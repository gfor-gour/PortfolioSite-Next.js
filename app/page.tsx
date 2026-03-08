"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  User,
  FolderGit2,
  Code2,
  Trophy,
  Wrench,
  Mail,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MailIcon,
  ChevronRight,
} from "lucide-react"

const sections = [
  {
    href: "/about",
    label: "About",
    description: "Who I am, my background & what I do",
    icon: User,
  },
  {
    href: "/projects",
    label: "Projects",
    description: "Development archive & side projects",
    icon: FolderGit2,
  },
  {
    href: "/problem-solving",
    label: "Problem Solving",
    description: "LeetCode stats, badges & activity",
    icon: Code2,
  },
  {
    href: "/achievements",
    label: "Achievements",
    description: "Hackathons & competition wins",
    icon: Trophy,
  },
  {
    href: "/skills",
    label: "Skills",
    description: "Tech stack & tools I work with",
    icon: Wrench,
  },
  {
    href: "/contact",
    label: "Contact",
    description: "Get in touch — email, socials & more",
    icon: Mail,
  },
]

export default function HomePage() {
  return (
    <main className="container px-4 sm:px-6 lg:px-8">
      <section className="pt-4 sm:pt-8 md:pt-10 lg:pt-12 pb-8 sm:pb-10">
        <div className="flex flex-col md:flex-row items-start gap-8 w-full">
          {/* Left Content (same positioning as About) */}
          <div className="w-full md:w-[60%] flex flex-col items-start justify-center space-y-4 sm:space-y-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center w-full gap-2 sm:gap-4">
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2F4F4F] dark:text-white">
                Hi, I&apos;m
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#2F4F4F] dark:text-primary break-words sm:whitespace-nowrap">
              <span className="inline-block animate-name delay-1">Gour</span>{" "}
              <span className="inline-block animate-name delay-2">Gupal</span>{" "}
              <span className="inline-block animate-name delay-3">Talukder</span>{" "}
              <span className="inline-block animate-name delay-4">Shawon</span>
            </h1>

            <div className="space-y-2 sm:space-y-3 w-full">
              {/* Education row */}
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                <p className="flex-1 text-base sm:text-lg md:text-xl font-semibold text-[#2F4F4F] dark:text-violet-200">
                  B.Sc in Software Engineering · SUST, Sylhet
                </p>
                <p className="text-sm sm:text-base text-[#2F4F4F]/80 dark:text-violet-300/90 sm:text-right">
                  March 2022 – Present
                </p>
              </div>

              {/* Intern Software Engineer row */}
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                <p className="flex-1 text-base sm:text-lg md:text-xl font-semibold text-[#2F4F4F] dark:text-violet-300">
                  Intern Software Engineer at Shellbeehaken Ltd.
                </p>
                <p className="text-sm sm:text-base text-[#2F4F4F]/80 dark:text-violet-300/90 sm:text-right">
                  Dec 2025 – Present
                </p>
              </div>

              {/* Intern Research Assistant row */}
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                <p className="flex-1 text-base sm:text-lg md:text-xl font-semibold text-[#2F4F4F] dark:text-violet-300">
                  Intern Research Assistant at AMIR Lab
                </p>
                <p className="text-sm sm:text-base text-[#2F4F4F]/80 dark:text-violet-300/90 sm:text-right">
                  Feb 2026 – Present
                </p>
              </div>
            </div>

            <span
              className="block"
              style={{
                width: "100%",
                height: "1px",
                borderRadius: "0.5px",
                background: "var(--glow)",
                boxShadow: "0 0 8px 2px var(--glow), 0 0 4px 1px var(--glow)",
              }}
            />

            {/* Routing buttons under name (compact; should fit without scrolling) */}
            <div className="w-full">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {sections.map(({ href, label, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className="group flex items-center justify-between gap-3 rounded-xl px-3 py-3 sm:px-4 sm:py-3 backdrop-blur transition-all duration-200 hover:scale-[1.02] active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--glow)] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    style={{
                      border: "2px solid var(--glow)",
                      boxShadow: "0 0 6px 1px var(--glow)",
                      background: "transparent",
                    }}
                  >
                    <span className="flex items-center gap-2 min-w-0">
                      <span
                        className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-[#2F4F4F] dark:text-violet-400"
                        style={{
                          border: "2px solid var(--glow)",
                          boxShadow: "0 0 6px 1px var(--glow)",
                          background: "var(--card)",
                        }}
                      >
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="font-semibold text-sm sm:text-base text-[#2F4F4F] dark:text-white truncate">
                        {label}
                      </span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-[#2F4F4F] dark:text-violet-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content (same positioning as About; frame 25% smaller) */}
          <div className="w-full md:w-[40%] flex flex-col items-center md:items-end">
            <div className="relative w-[210px] sm:w-[240px] md:w-[270px] lg:w-[300px] aspect-square mb-4">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "radial-gradient(circle at center, #2F4F4F22 0%, transparent 70%)",
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
                  boxShadow: "0 0 20px 4px var(--glow), 0 0 40px 8px var(--glow)",
                  objectPosition: "center 15%",
                }}
              />
            </div>

            {/* Social Links Box (same as About; scaled to match smaller frame) */}
            <div
              className="flex w-[210px] sm:w-[240px] md:w-[270px] lg:w-[300px] justify-between gap-2 rounded-xl p-3 sm:p-4"
              style={{
                border: "2px solid var(--glow)",
                boxShadow: "0 0 8px 2px var(--glow), 0 0 4px 1px var(--glow)",
                background: "transparent",
              }}
            >
              <Button
                variant="outline"
                size="lg"
                className="flex-1 text-[#2F4F4F] dark:text-primary border-none bg-transparent shadow-none flex items-center justify-center"
                asChild
              >
                <Link href="https://github.com/gfor-gour" target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="h-5 w-5 sm:h-7 sm:w-7" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1 text-[#2F4F4F] dark:text-primary border-none bg-transparent shadow-none flex items-center justify-center"
                asChild
              >
                <Link
                  href="https://www.linkedin.com/in/gour-gupal-talukder/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon className="h-5 w-5 sm:h-7 sm:w-7" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1 text-[#2F4F4F] dark:text-primary border-none bg-transparent shadow-none flex items-center justify-center"
                asChild
              >
                <Link href="https://x.com/this_is_Gour" target="_blank" rel="noopener noreferrer">
                  <TwitterIcon className="h-5 w-5 sm:h-7 sm:w-7" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1 text-[#2F4F4F] dark:text-primary border-none bg-transparent shadow-none flex items-center justify-center"
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
