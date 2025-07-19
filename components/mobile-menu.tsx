"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import Link from "next/link"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: "#cp-profile", label: "CP Profile" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
    { href: "/resume.pdf", label: "Resume", isExternal: true },
  ]

  const handleLinkClick = (href: string, isExternal?: boolean) => {
    setIsOpen(false)

    if (!isExternal && href.startsWith("#")) {
      // Small delay to allow sheet to close first
      setTimeout(() => {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }

  return (
    <div className="sm:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="relative z-50 h-7 w-7 sm:h-9 sm:w-9">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="w-full sm:w-80 bg-background border-l border-border p-0">
          <div className="flex h-full flex-col">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <h2 className="text-lg font-semibold text-foreground">Menu</h2>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-6 py-6">
              <div className="space-y-4">
                {menuItems.map(({ href, label, isExternal }) => (
                  <Link
                    key={label}
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    onClick={() => handleLinkClick(href, isExternal)}
                    className="block w-full rounded-lg border-2 bg-background/50 px-4 py-3 text-left text-lg font-medium text-foreground transition-all duration-200 active:scale-95 dark:border-violet-500/50 dark:hover:border-violet-500 dark:hover:bg-violet-500/10 dark:hover:shadow-lg dark:hover:shadow-violet-500/20 border-[#2F4F4F]/50 hover:border-[#2F4F4F] hover:bg-[#2F4F4F]/10 hover:shadow-lg hover:shadow-[#2F4F4F]/20"
                    style={{
                      boxShadow: "0 0 8px 1px var(--glow)",
                    }}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Footer */}
            <div className="border-t border-border px-6 py-4">
              <p className="text-sm text-muted-foreground text-center">© 2024 g_for_gour.dev</p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
