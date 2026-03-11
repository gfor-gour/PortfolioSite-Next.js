"use client"

import TechStack from "@/app/components/tech-stack"

export default function SkillsPage() {
  return (
    <main className="container px-4 sm:px-6 lg:px-8">
      <section className="py-12 md:py-24 lg:py-32">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          <span className="text-foreground">
            Technical Skills
          </span>
        </h2>
        <div className="text-foreground">
          <TechStack />
        </div>
      </section>
    </main>
  )
}
