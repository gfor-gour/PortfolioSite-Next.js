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

    const data = await response.json()

    if (!data.data?.userInfo) {
      throw new Error("Failed to fetch LeetCode data")
    }

    const { userInfo, contestInfo, allQuestionsCount } = data.data

    // Defensive checks for all nested properties
    const problemsSolved = userInfo?.problemsSolved?.acSubmissionNum || []
    const submitStats = userInfo?.submitStats?.acSubmissionNum || []
    // Get total questions from allQuestionsCount
    const totalQuestions =
      allQuestionsCount?.find((q: any) => q.difficulty === "All")?.count ?? 0
    const totalEasy =
      allQuestionsCount?.find((q: any) => q.difficulty === "Easy")?.count ?? 0
    const totalMedium =
      allQuestionsCount?.find((q: any) => q.difficulty === "Medium")?.count ?? 0
    const totalHard =
      allQuestionsCount?.find((q: any) => q.difficulty === "Hard")?.count ?? 0

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
      },
      contestInfo: {
        rating: contestInfo?.rating || 0,
        topPercentage: contestInfo?.topPercentage || 0,
      },
      calendar: {
        submissionCalendar: userInfo?.userCalendar?.submissionCalendar || "{}",
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
