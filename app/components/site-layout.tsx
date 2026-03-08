"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import AnimatedBg from "@/components/animated-bg"

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen text-black dark:text-foreground flex justify-center">
      <AnimatedBg />
      <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <header className="w-full border-b border-[var(--glow)] bg-[#A6B0A6] dark:bg-background/95 backdrop-blur sticky top-0 z-50">
          <div className="container flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="flex-shrink-0 flex items-center font-bold text-lg ml-2 sm:ml-4 text-[#2F4F4F] dark:text-white"
              style={{
                minWidth: "max-content",
                border: "2px solid var(--glow)",
                boxShadow: "0 0 8px 2px var(--glow), 0 0 4px 1px var(--glow)",
                background: "var(--card)",
                borderRadius: "0.75rem",
                padding: "0.1rem 1rem",
              }}
            >
              G_for_Gour
            </Link>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <span
                  className="rounded-xl flex items-center flex-shrink-0"
                  style={{
                    border: "2px solid var(--glow)",
                    boxShadow: "0 0 6px 1.6px var(--glow), 0 0 3.2px 0.8px var(--glow)",
                    background: "var(--card)",
                    padding: "0.1rem 0.5rem",
                    height: "1.8rem",
                    minHeight: "unset",
                  }}
                >
                  <Link
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2F4F4F] dark:text-white text-xs sm:text-sm font-semibold dark:font-medium hover:no-underline hover:text-[#2F4F4F] dark:hover:text-white transition-none"
                  >
                    Resume
                  </Link>
                </span>
                <ThemeToggle className="flex-shrink-0 h-7 w-7 sm:h-9 sm:w-9" />
              </div>
            </div>
          </div>
        </header>

        {children}

        <footer className="border-t border-[var(--glow)] bg-[#A6B0A6] dark:bg-background">
          <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
            <p className="text-xs text-gray-500 dark:text-muted-foreground">
              © 2024 g_for_gour.dev. All rights reserved.
            </p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              <Link
                className="text-xs text-gray-500 dark:text-muted-foreground hover:text-black dark:hover:text-primary hover:underline underline-offset-4"
                href="#"
              >
                Terms of Service
              </Link>
              <Link
                className="text-xs text-gray-500 dark:text-muted-foreground hover:text-black dark:hover:text-primary hover:underline underline-offset-4"
                href="#"
              >
                Privacy
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  )
}
