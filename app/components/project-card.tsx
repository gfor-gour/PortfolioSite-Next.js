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
      className="w-[90%] sm:w-[340px] md:w-[370px] mx-auto transition-transform duration-200 hover:scale-[1.02]"
      style={{
        border: "2px solid rgba(139,92,246,1)",
        boxShadow:
          "0 0 8px 2px rgba(139, 92, 246, 0.7), 0 0 4px 1px rgba(139, 92, 246, 0.5)",
        background: "transparent",
        borderRadius: "0.75rem",
        margin: "0 auto",
      }}
    >
      <CardContent className="p-4 sm:p-6">
        <h3 className="font-semibold text-lg sm:text-xl mb-2">{title}</h3>
        <p className="text-sm mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 justify-center">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border border-violet-500 rounded-full px-2 py-0.5 text-xs sm:text-sm text-violet-700 bg-transparent dark:bg-transparent"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <Link
            href={link}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm border border-violet-500 rounded-md px-4 py-2 text-black dark:text-primary hover:bg-violet-50 dark:hover:bg-violet-900/30 transition-colors"
          >
            <Github className="h-4 w-4 text-violet-600 dark:text-violet-400" />
            View on GitHub
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
