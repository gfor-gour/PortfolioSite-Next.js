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
      className="bg-white dark:bg-background text-black dark:text-primary border-none transition-transform duration-200 hover:scale-[1.025] hover:shadow-xl"
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
      <CardContent className="p-4">
        <h3 className="font-semibold text-xl mb-2 text-black dark:text-primary">{title}</h3>
        <p className="text-sm mb-4 text-black dark:text-primary">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-primary/10 dark:bg-primary/20 px-2 py-1 text-xs font-medium text-black dark:text-primary ring-1 ring-inset ring-primary/20"
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
