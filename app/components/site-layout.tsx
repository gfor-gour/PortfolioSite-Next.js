"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { LightLines } from "@/components/ui/light-lines"
import { SpotlightNavbar } from "@/components/ui/spotlight-navbar"
import {
  User,
  FolderGit2,
  Code2,
  Trophy,
  Wrench,
  Mail,
} from "lucide-react"

const navItems = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/projects",
    label: "Projects",
  },
  {
    href: "/problem-solving",
    label: "Problem Solving",
  },
  {
    href: "/achievements",
    label: "Achievements",
  },
  {
    href: "/skills",
    label: "Skills",
  },
  {
    href: "/contact",
    label: "Contact",
  },
]

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const getActiveIndex = () => {
    const index = navItems.findIndex((item) => {
      if (item.href === "/") return pathname === "/"
      return pathname.startsWith(item.href)
    })
    return index >= 0 ? index : 0
  }

  return (
    <div className="relative flex h-[100dvh] min-h-0 flex-col overflow-hidden bg-background text-foreground">
      {/* Fixed Background */}
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

      {/* Main Content (scrollable) - fills entire remaining space */}
      <main className="flex-1 min-h-0 overflow-y-auto mt-14 w-full relative z-10">
        <div className="w-full flex justify-center">
          {children}
        </div>
      </main>

      {/* Floating Spotlight Navbar (no background/border, truly transparent float) */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none mb-2 sm:mb-3 md:mb-4 lg:mb-6">
        <div className="flex justify-center w-full px-4 pointer-events-auto">
          <SpotlightNavbar
            items={navItems}
            onItemClick={(item) => {
              // Navigation is handled via link wrapper in SpotlightNavbar
            }}
            defaultActiveIndex={getActiveIndex()}
            className="w-full"
          />
        </div>
      </nav>
    </div>
  )
}
