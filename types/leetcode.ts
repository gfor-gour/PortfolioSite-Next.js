import { z } from 'zod'

export const LeetCodeUserSchema = z.object({
  totalSolved: z.number(),
  totalQuestions: z.number(),
  easySolved: z.number(),
  totalEasy: z.number(),
  mediumSolved: z.number(),
  totalMedium: z.number(),
  hardSolved: z.number(),
  totalHard: z.number()
})

export const LeetCodeCalendarSchema = z.object({
  submissionCalendar: z.record(z.number())
})

export const LeetCodeDataSchema = z.object({
  userInfo: LeetCodeUserSchema,
  contestInfo: z.object({
    rating: z.number(),
    topPercentage: z.number()
  }),
  lastUpdated: z.string(),
  calendar: LeetCodeCalendarSchema
})

export type LeetCodeData = z.infer<typeof LeetCodeDataSchema>