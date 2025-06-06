import { NextResponse } from "next/server"

export async function GET() {
  try {
    const username = process.env.LEETCODE_USERNAME
    if (!username) {
      throw new Error("LeetCode username not configured")
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

    const data = await response.json()

    if (!data.data?.userInfo) {
      throw new Error("Failed to fetch LeetCode data")
    }

    const { userInfo, contestInfo } = data.data

    // Transform data to match your schema
    return NextResponse.json({
      userInfo: {
        totalSolved: userInfo.problemsSolved.acSubmissionNum[0].count,
        totalQuestions: userInfo.submitStats.acSubmissionNum[0].count,
        easySolved: userInfo.problemsSolved.acSubmissionNum[1].count,
        totalEasy: userInfo.submitStats.acSubmissionNum[1].count,
        mediumSolved: userInfo.problemsSolved.acSubmissionNum[2].count,
        totalMedium: userInfo.submitStats.acSubmissionNum[2].count,
        hardSolved: userInfo.problemsSolved.acSubmissionNum[3].count,
        totalHard: userInfo.submitStats.acSubmissionNum[3].count,
      },
      contestInfo: {
        rating: contestInfo?.rating || 0,
        topPercentage: contestInfo?.topPercentage || 0,
      },
      calendar: {
        submissionCalendar: userInfo.userCalendar.submissionCalendar,
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
