import { NextResponse } from 'next/server'
import { LeetCodeDataSchema, LeetCodeData } from '@/types/leetcode'

const CACHE_DURATION = 6 * 3600  // 6 hours
const LEETCODE_API_URL = 'https://leetcode.com/graphql'
const USERNAME = 'g_for_gour'

const profileQuery = `
  query userProfile($username: String!) {
    matchedUser(username: $username) {
      submitStats {
        acSubmissionNum {
          difficulty
          count
        }
        totalSubmissionNum {
          difficulty
          count
        }
      }
    }
    allQuestionsCount {
      difficulty
      count
    }
    userContestRanking(username: $username) {
      rating
      topPercentage
    }
  }
`

// Update cache type definition
let cache: {
  data: LeetCodeData | null;
  lastFetched: number;
} = {
  data: null,
  lastFetched: 0
}

async function fetchLeetCodeData() {
  const response = await fetch(LEETCODE_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Referer': 'https://leetcode.com',
    },
    body: JSON.stringify({
      query: profileQuery,
      variables: { 
        username: USERNAME
      }
    })
  })

  if (!response.ok) {
    throw new Error(`LeetCode API error: ${response.status}`)
  }

  const { data, errors } = await response.json()
  if (errors) {
    throw new Error(errors[0].message)
  }

  // Get problem counts by difficulty
  const problemCounts = data.allQuestionsCount.reduce((acc: any, item: any) => {
    acc[item.difficulty.toUpperCase()] = item.count
    return acc
  }, {})

  // Get solved counts by difficulty (normalize to uppercase)
  const solvedCounts = data.matchedUser.submitStats.acSubmissionNum.reduce((acc: any, item: any) => {
    acc[item.difficulty.toUpperCase()] = item.count
    return acc
  }, {})

  return {
    userInfo: {
      totalSolved: solvedCounts.ALL || 0,
      totalQuestions: problemCounts.ALL || 0,
      easySolved: solvedCounts.EASY || 0,
      totalEasy: problemCounts.EASY || 0,
      mediumSolved: solvedCounts.MEDIUM || 0,
      totalMedium: problemCounts.MEDIUM || 0,
      hardSolved: solvedCounts.HARD || 0,
      totalHard: problemCounts.HARD || 0
    },
    contestInfo: {
      rating: data.userContestRanking?.rating || 0,
      topPercentage: data.userContestRanking?.topPercentage || 0
    },
    lastUpdated: new Date().toISOString()
  }
}

export async function GET() {
  try {
    const now = Date.now()
    if (cache.data && (now - cache.lastFetched) / 1000 < CACHE_DURATION) {
      return NextResponse.json(cache.data)
    }

    const leetcodeData = await fetchLeetCodeData()
    const validatedData = LeetCodeDataSchema.parse(leetcodeData)

    cache = {
      data: validatedData,
      lastFetched: now
    }

    return NextResponse.json(validatedData)
  } catch (error) {
    console.error('Error fetching LeetCode data:', error)
    
    if (cache.data) {
      return NextResponse.json(cache.data)
    }

    return NextResponse.json(
      { error: 'Failed to fetch LeetCode data' },
      { status: 500 }
    )
  }
}
