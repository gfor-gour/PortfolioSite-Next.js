import { NextResponse } from 'next/server'

const CACHE_DURATION = 24 * 3600  // 24 hours in seconds
const MAX_RETRIES = 3
const INITIAL_RETRY_DELAY = 1000

async function fetchWithRetry(url: string, retries = MAX_RETRIES, delay = INITIAL_RETRY_DELAY) {
  try {
    const response = await fetch(url, {
      headers: {
        'Accept': '*/*',
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36'
      }
    })
    
    // Handle rate limiting
    if (response.status === 429) {
      const responseText = await response.text()
      console.log(`Rate limit response: ${responseText}`)
      
      if (retries > 0) {
        console.log(`Rate limited, retrying in ${delay/1000} seconds...`)
        await new Promise(resolve => setTimeout(resolve, delay))
        return fetchWithRetry(url, retries - 1, delay * 2)
      } else {
        throw new Error('Rate limit exceeded after all retries')
      }
    }

    // Only try to parse JSON for successful responses
    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`API error (${response.status}): ${errorText}`)
    }
    
    const data = await response.json()
    return data
  } catch (error) {
    if (retries > 0) {
      await new Promise(resolve => setTimeout(resolve, delay))
      return fetchWithRetry(url, retries - 1, delay * 2)
    }
    throw error
  }
}

type CombinedData = {
  userInfo: any
  recentSubmissions: any
  contestInfo: any
  calendarData: any
  lastUpdated: string
}

let cache: {
  data: CombinedData | null,
  lastFetched: number
} = {
  data: null,
  lastFetched: 0
}

// Add mock data for development
const mockData: CombinedData = {
  userInfo: {
    totalSolved: 450,
    totalQuestions: 2500,
    easySolved: 150,
    totalEasy: 600,
    mediumSolved: 250,
    totalMedium: 1300,
    hardSolved: 50,
    totalHard: 600,
    acceptanceRate: 67.8
  },
  recentSubmissions: [],
  contestInfo: {
    rating: 1567,
    topPercentage: 15.5
  },
  calendarData: {},
  lastUpdated: new Date().toISOString()
}

export async function GET() {
  try {
    const now = Date.now()
    if (cache.data && (now - cache.lastFetched) / 1000 < CACHE_DURATION) {
      return NextResponse.json(cache.data)
    }

    const username = 'g_for_gour'
    const baseUrl = 'https://alfa-leetcode-api.onrender.com'
    
    // Updated endpoints to match the API's actual routes
    const [userData, recentData, contestData, calendarData] = await Promise.all([
      fetchWithRetry(`${baseUrl}/userProfile/${username}`),
      fetchWithRetry(`${baseUrl}/${username}/submission`),
      fetchWithRetry(`${baseUrl}/${username}/contest`),
      fetchWithRetry(`${baseUrl}/userProfileCalendar?username=${username}&year=2024`)
    ])

    const combinedData = {
      userInfo: userData,
      recentSubmissions: recentData,
      contestInfo: contestData,
      calendarData: calendarData,
      lastUpdated: new Date().toISOString()
    }

    cache = {
      data: combinedData,
      lastFetched: now
    }

    return NextResponse.json(combinedData)

  } catch (error) {
    console.error('Error fetching LeetCode data:', error)
    
    // Return mock data in case of error during development
    if (process.env.NODE_ENV === 'development') {
      console.log('Returning mock data for development')
      return NextResponse.json(mockData)
    }

    return NextResponse.json(
      { 
        error: 'Failed to fetch LeetCode data',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}