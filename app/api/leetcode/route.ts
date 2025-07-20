import { NextResponse } from "next/server"

export async function GET() {
  try {
    const username = process.env.LEETCODE_USERNAME
    
    if (!username || username === "your_leetcode_username") {
      return NextResponse.json(
        { 
          error: "LeetCode username not configured. Please set LEETCODE_USERNAME environment variable.",
          userInfo: {
            totalSolved: 528,
            totalQuestions: 3000,
            easySolved: 200,
            totalEasy: 800,
            mediumSolved: 250,
            totalMedium: 1200,
            hardSolved: 78,
            totalHard: 1000,
            badges: [],
          },
          contestInfo: {
            rating: 1500,
            topPercentage: 15.5,
          },
          calendar: {
            submissionCalendar: "{}",
          },
        },
        { status: 200 }
      )
    }

    const query = `
      {
        userInfo: matchedUser(username: "${username}") {
          userCalendar {
            activeYears
            submissionCalendar
            totalActiveDays
            streak
          }
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
            }
          }
          problemsSolved: submitStats {
            acSubmissionNum {
              difficulty
              count
            }
          }
          profile {
            ranking
          }
          badges {
            id
            displayName
            icon
            category
          }
        }
        allQuestionsCount {
          difficulty
          count
        }
        contestInfo: userContestRanking(username: "${username}") {
          rating
          topPercentage
        }
      }
    `

    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    })

    if (!response.ok) {
      throw new Error(`LeetCode API responded with status: ${response.status}`)
    }

    const data = await response.json()

    if (!data.data?.userInfo) {
      throw new Error("Failed to fetch LeetCode data")
    }

    // Defensive checks for all nested properties
    const problemsSolved = data.data.userInfo?.problemsSolved?.acSubmissionNum || []
    // Get total questions from allQuestionsCount
    type QuestionCount = { difficulty: string; count: number }
    const totalQuestions =
      data.data.allQuestionsCount?.find((q: QuestionCount) => q.difficulty === "All")
        ?.count ?? 0
    const totalEasy =
      data.data.allQuestionsCount?.find((q: QuestionCount) => q.difficulty === "Easy")
        ?.count ?? 0
    const totalMedium =
      data.data.allQuestionsCount?.find((q: QuestionCount) => q.difficulty === "Medium")
        ?.count ?? 0
    const totalHard =
      data.data.allQuestionsCount?.find((q: QuestionCount) => q.difficulty === "Hard")
        ?.count ?? 0

    return NextResponse.json({
      userInfo: {
        totalSolved: problemsSolved[0]?.count ?? 0,
        totalQuestions,
        easySolved: problemsSolved[1]?.count ?? 0,
        totalEasy,
        mediumSolved: problemsSolved[2]?.count ?? 0,
        totalMedium,
        hardSolved: problemsSolved[3]?.count ?? 0,
        totalHard,
        badges: data.data.userInfo?.badges || [],
      },
      contestInfo: {
        rating: data.data.contestInfo?.rating || 0,
        topPercentage: data.data.contestInfo?.topPercentage || 0,
      },
      calendar: {
        submissionCalendar: data.data.userInfo?.userCalendar?.submissionCalendar || "{}",
      },
    })
  } catch (error) {
    console.error("LeetCode API Error:", error)
    return NextResponse.json(
      { error: "Failed to fetch LeetCode data" },
      { status: 500 }
    )
  }
}
