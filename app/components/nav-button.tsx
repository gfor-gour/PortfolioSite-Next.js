'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"

interface NavButtonProps {
  href: string
  label: string
  external?: boolean
}

export default function NavButton({ href, label, external }: NavButtonProps) {
  return (
    <span
      className="rounded-xl flex items-center"
      style={{
        border: "2px solid var(--glow)",
        boxShadow:
          "0 0 6px 1.6px var(--glow), 0 0 3.2px 0.8px var(--glow)",
        background: "transparent",
        padding: "0.1rem 0.75rem",
        height: "2.2rem",
        minHeight: "unset",
      }}
    >
      <Button
        asChild
        size="sm"
        variant="outline"
        className="border-none bg-transparent shadow-none px-0 h-auto min-h-0 text-[#2F4F4F] dark:text-white"
      >
        <Link
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          <span className="text-[#2F4F4F] dark:text-white">{label}</span>
        </Link>
      </Button>
    </span>
  )
}