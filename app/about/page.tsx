"use client"

import Image from "next/image"
import Link from "next/link"
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="container px-4 sm:px-6 lg:px-8">
      <section className="pt-4 sm:pt-8 md:pt-10 lg:pt-12 pb-8 sm:pb-12 md:pb-24 lg:pb-32">
        <div className="flex flex-col md:flex-row items-start gap-8 w-full">
          <div className="w-full md:w-[60%] flex flex-col items-start justify-center space-y-4 sm:space-y-6">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground dark:text-foreground">
              Hi, I&apos;m
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground dark:text-foreground break-words sm:whitespace-nowrap">
              <span className="inline-block animate-name delay-1">Gour</span>{" "}
              <span className="inline-block animate-name delay-2">Gupal</span>{" "}
              <span className="inline-block animate-name delay-3">Talukder</span>{" "}
              <span className="inline-block animate-name delay-4">Shawon</span>
            </h1>

            <div className="w-full md:w-auto flex flex-col items-start">
              <span className="flex flex-col items-start gap-1">
                <span className="text-base md:text-lg font-semibold text-foreground dark:text-violet-200">
                  A Software Engineering student{" "}
                  <span className="font-normal">7th semester, Final Year</span>
                </span>
                <span className="text-lg md:text-xl font-semibold text-foreground dark:text-violet-300">
                  Shahjalal University of Science and Technology, Sylhet,
                  Bangladesh
                </span>
              </span>
              <span className="block mt-2 glow-divider" />
            </div>

            <div
              className="rounded-xl mt-2 w-full sm:w-fit max-w-full p-4 sm:p-6 backdrop-blur glow-surface"
            >
              <div className="space-y-4 text-gray-800 dark:text-violet-100">
                {[
                  "Problem-solving driven developer with 750+ algorithmic problems solved across LeetCode, Codeforces, UVA & VJudge; 23 badges, 433 day max streak, and peak rating 1622 on LeetCode.",
                  "Full-stack engineer experienced in building and deploying scalable applications using Next.js, React, Node.js, Express.js, MongoDB, and PostgreSQL.",
                  "Developed ML systems including a 91% accurate personality detection model using Random Forest with optimized feature engineering.",
                  "Built real-world impactful systems: digital library management, AI-assisted service platform, and a Flutter app used in SUST's psychiatry department, reducing manual workload by 80%.",
                  "Strong foundation in CS fundamentals: DSA, OOP, Operating Systems, Networking, DBMS, AI, ML, Deep Learning.",
                  "Hands-on experience with LLM research, currently working on automated Git commit message generation using LLM's & human evaluation.",
                  "Team-oriented, fast learner, and highly consistent with a strong growth mindset — always eager to take on technically challenging projects.",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-[#2F4F4F] dark:bg-violet-400 rounded-full mt-2" />
                    <div>{text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full md:w-[40%] flex flex-col items-center md:items-end">
            <div className="relative w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] aspect-square mb-6">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "radial-gradient(circle at center, #2F4F4F22 0%, transparent 70%)",
                  filter: "blur(20px)",
                  transform: "translateY(10px) scale(0.95)",
                }}
              />
              <Image
                src="/profile.png"
                alt="Gour Gupal Talukder"
                width={400}
                height={400}
                priority
                className="relative z-10 rounded-2xl object-cover w-full h-full"
                style={{
                  boxShadow:
                    "0 0 20px 4px var(--glow), 0 0 40px 8px var(--glow)",
                  objectPosition: "center 15%",
                }}
              />
            </div>

            <div
              className="flex w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] justify-between gap-2 rounded-xl p-4 glow-surface"
            >
              <Button
                variant="outline"
                size="lg"
                className="flex-1 text-foreground dark:text-primary border-none bg-transparent shadow-none flex items-center justify-center"
                asChild
              >
                <Link href="https://github.com/gfor-gour" target="_blank">
                  <GithubIcon className="h-5 w-5 sm:h-7 sm:w-7" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1 text-foreground dark:text-primary border-none bg-transparent shadow-none flex items-center justify-center"
                asChild
              >
                <Link
                  href="https://www.linkedin.com/in/gour-gupal-talukder/"
                  target="_blank"
                >
                  <LinkedinIcon className="h-5 w-5 sm:h-7 sm:w-7" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1 text-foreground dark:text-primary border-none bg-transparent shadow-none flex items-center justify-center"
                asChild
              >
                <Link href="https://x.com/this_is_Gour" target="_blank">
                  <TwitterIcon className="h-5 w-5 sm:h-7 sm:w-7" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1 text-foreground dark:text-primary border-none bg-transparent shadow-none flex items-center justify-center"
                asChild
              >
                <Link href="mailto:gourgupaltalukder@gmail.com">
                  <MailIcon className="h-5 w-5 sm:h-7 sm:w-7" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
