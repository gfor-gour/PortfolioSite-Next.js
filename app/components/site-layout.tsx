"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { LightLines } from "@/components/ui/light-lines"
import {
  User,
  FolderGit2,
  Code2,
  Trophy,
  Wrench,
  Mail,
} from "lucide-react"

const navTabs = [
  {
    href: "/",
    label: "Home",
    icon: User,
  },
  {
    href: "/projects",
    label: "Projects",
    icon: FolderGit2,
  },
  {
    href: "/problem-solving",
    label: "Problem Solving",
    icon: Code2,
  },
  {
    href: "/achievements",
    label: "Achievements",
    icon: Trophy,
  },
  {
    href: "/skills",
    label: "Skills",
    icon: Wrench,
  },
  {
    href: "/contact",
    label: "Contact",
    icon: Mail,
  },
]

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const isTabActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <div className="relative flex h-[100dvh] min-h-0 flex-col overflow-hidden bg-background text-foreground">
      {/* Fixed to viewport so line art scales consistently; flex parent height no longer stretches with tall pages */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <LightLines
          className="h-full min-h-0"
          usePortfolioTheme
          speedMultiplier={1.5}
        />
      </div>
      
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 border-b border-[var(--glow)] bg-background/80 dark:bg-background/95 backdrop-blur z-50">
        <div className="flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-full">
          <Link
            href="/"
            className="flex-shrink-0 flex items-center font-bold text-lg ml-2 sm:ml-4 text-foreground dark:text-foreground"
            style={{
              minWidth: "max-content",
              border: "1.2px solid var(--glow)",
              boxShadow: "0 0 4.8px 1.2px var(--glow), 0 0 2.4px 0.6px var(--glow)",
              background: "var(--card)",
              borderRadius: "0.75rem",
              padding: "0.1rem 1rem",
            }}
          >
            g_for_gour
          </Link>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <span
                className="rounded-xl flex items-center flex-shrink-0 glow-pill"
                style={{
                  padding: "0.1rem 0.5rem",
                  height: "1.8rem",
                  minHeight: "unset",
                }}
              >
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground dark:text-foreground text-xs sm:text-sm font-semibold dark:font-medium hover:no-underline hover:text-foreground dark:hover:text-foreground transition-none"
                >
                  Resume
                </Link>
              </span>
              <ThemeToggle className="flex-shrink-0 h-7 w-7 sm:h-9 sm:w-9" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content (scrollable) */}
      <main className="flex-1 min-h-0 overflow-y-auto mt-14 mb-16 w-full relative z-10">
        <div className="w-full flex justify-center">
          {children}
        </div>
      </main>

      {/* Fixed Bottom Tab Bar */}
      <nav className="fixed bottom-0 left-0 right-0 border-t border-[var(--glow)] bg-background/80 dark:bg-background/95 backdrop-blur z-50">
        <div className="flex h-16 items-center justify-around px-4 sm:px-6 lg:px-8 max-w-full">
          {navTabs.map(({ href, label, icon: Icon }) => {
            const isActive = isTabActive(href)
            return (
              <Link
                key={href}
                href={href}
                className="flex flex-col items-center justify-center gap-1 px-3 py-2 transition-all duration-200 ease-out"
              >
                <Icon 
                  className={`w-6 h-6 transition-all duration-200 ${
                    isActive 
                      ? "text-foreground dark:text-white" 
                      : "text-foreground/40 dark:text-white/40"
                  }`}
                />
                <span 
                  className={`text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? "text-foreground dark:text-white" 
                      : "text-foreground/40 dark:text-white/40"
                  }`}
                >
                  {label}
                </span>
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
