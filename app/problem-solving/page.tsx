"use client"

import CPProfile from "@/app/components/cp-profile"

export default function ProblemSolvingPage() {
  return (
    <main className="container px-4 sm:px-6 lg:px-8">
      <section className="py-12 md:py-24 lg:py-32">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          <span className="text-[#2F4F4F] dark:text-violet-400">CP Profile</span>
        </h2>
        <CPProfile />
      </section>
    </main>
  )
}
