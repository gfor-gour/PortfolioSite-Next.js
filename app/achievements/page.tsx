"use client"

import AchievementSection from "@/app/components/achievement-section"

export default function AchievementsPage() {
  return (
    <main className="container px-4 sm:px-6 lg:px-8">
      <section className="py-8 sm:py-12 md:py-24 lg:py-32">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-center mb-8 sm:mb-12">
          <span className="text-foreground">Hackathon </span>
          <span className="text-foreground">Achievements</span>
        </h2>
        <AchievementSection />
      </section>
    </main>
  )
}
