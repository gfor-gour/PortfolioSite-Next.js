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
        border: "2px solid rgba(139,92,246,1)",
        boxShadow:
          "0 0 8px 2px rgba(139, 92, 246, 0.7), 0 0 4px 1px rgba(139, 92, 246, 0.5)",
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
        className="text-black dark:text-primary border-none bg-transparent shadow-none px-0 h-auto min-h-0"
      >
        <Link
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {label}
        </Link>
      </Button>
    </span>
  )
}