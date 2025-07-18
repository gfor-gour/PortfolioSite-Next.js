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
        border: "2px solid var(--glow)",
        boxShadow:
          "0 0 8px 2px var(--glow), 0 0 4px 1px var(--glow)",
        background: "var(--card)",
        borderRadius: "0.75rem",
        margin: "0 auto",
      }}
    >
      <CardContent className="p-4 sm:p-6">
        <h3 className="font-bold text-lg sm:text-xl mb-2 text-[#2F4F4F] dark:text-violet-600">{title}</h3>
        <p className="text-sm font-medium mb-4 line-clamp-3 text-[#2F4F4F] dark:text-gray-200">{description}</p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 justify-center">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border border-[#2F4F4F] shadow-[0_0_8px_2px_#2F4F4F] rounded-full px-2 py-0.5 text-xs sm:text-sm font-semibold text-[#2F4F4F] bg-transparent dark:bg-transparent"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <Link
            href={link}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm border border-[#2F4F4F] shadow-[0_0_8px_2px_#2F4F4F] rounded-md px-4 py-2 text-[#2F4F4F] font-bold dark:text-primary hover:bg-[#bfc7b9] dark:hover:bg-violet-900/30 transition-colors"
          >
            <Github className="h-4 w-4 text-[#2F4F4F] dark:text-violet-400" />
            View on GitHub
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
