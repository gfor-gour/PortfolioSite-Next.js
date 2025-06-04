import { Card, CardContent } from "@/components/ui/card"
import { Github } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image?: string
  link: string
  tags: string[]
}

export default function ProjectCard({ title, description, link, tags }: ProjectCardProps) {
  return (
    <Card
      className="w-full max-w-[450px] mx-auto transition-transform duration-200 hover:scale-[1.02]"
      style={{
        border: "2px solid rgba(139,92,246,1)",
        boxShadow:
          "0 0 8px 2px rgba(139, 92, 246, 0.7), 0 0 4px 1px rgba(139, 92, 246, 0.5)",
        background: "transparent",
        borderRadius: "0.75rem",
        width: "100%",
        maxWidth: "370px", // Ensures 3 cards fit in a row with gap
        minWidth: "270px",
        margin: "0 auto",
      }}
    >
      <CardContent className="p-4 sm:p-6">
        <h3 className="font-semibold text-lg sm:text-xl mb-2">{title}</h3>
        <p className="text-sm mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] sm:text-xs px-1.5 py-0.5 sm:px-2 sm:py-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={link}
          target="_blank"
          className="inline-flex items-center gap-2 text-sm hover:underline text-black dark:text-primary"
        >
          <Github className="h-4 w-4 text-black dark:text-primary" />
          View on GitHub
        </Link>
      </CardContent>
    </Card>
  )
}
