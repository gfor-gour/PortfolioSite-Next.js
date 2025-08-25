import { Card, CardContent } from "@/components/ui/card"
import { Github, ExternalLink, RotateCcw } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface ProjectCardProps {
  title: string
  description: string
  image?: string
  link: string
  tags: string[]
  liveLink?: string
}

export default function ProjectCard({ title, description, link, tags, liveLink }: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  
  const toggleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className="w-[90%] sm:w-[340px] md:w-[370px] mx-auto perspective-1000">
      <div 
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side */}
        <Card
          className="w-full h-full transition-transform duration-200 hover:scale-[1.02] backdrop-blur backface-hidden"
          style={{
            border: "2px solid var(--glow)",
            boxShadow:
              "0 0 8px 2px var(--glow), 0 0 4px 1px var(--glow)",
            background: "transparent",
            borderRadius: "0.75rem",
            margin: "0 auto",
          }}
        >
          <CardContent className="p-4 sm:p-6 flex flex-col h-full">
            {/* Title - Centered and Larger */}
            <h3 className="font-bold text-xl sm:text-2xl mb-4 text-center text-[#2F4F4F] dark:text-violet-600">
              {title}
            </h3>

            {/* Tags - Better Spaced and Distributed */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-6 justify-center">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="border rounded-full px-3 py-1 text-xs sm:text-sm font-semibold bg-transparent border-[#2F4F4F] text-[#2F4F4F] shadow-[0_0_8px_2px_#2F4F4F] dark:border-violet-500/50 dark:text-violet-400 dark:shadow-[0_0_8px_2px_rgba(139,92,246,0.5)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Spacer to push buttons to bottom */}
            <div className="flex-1"></div>

            {/* Action Buttons - Fixed Gaps, No Stretching */}
            <div className="space-y-3">
              {/* Details Button */}
              <button
                onClick={toggleFlip}
                className="w-full inline-flex items-center justify-center gap-2 text-sm border rounded-md px-4 py-2.5 font-bold transition-colors border-[#2F4F4F] text-[#2F4F4F] shadow-[0_0_8px_2px_#2F4F4F] hover:bg-[#bfc7b9] dark:border-violet-500/50 dark:text-violet-400 dark:shadow-[0_0_8px_2px_rgba(139,92,246,0.5)] dark:hover:bg-violet-900/30"
              >
                <RotateCcw className="h-4 w-4" />
                Details
              </button>

              {/* Repository Button */}
              <Link
                href={link}
                target="_blank"
                className="w-full inline-flex items-center justify-center gap-2 text-sm border rounded-md px-4 py-2.5 font-bold transition-colors border-[#2F4F4F] text-[#2F4F4F] shadow-[0_0_8px_2px_#2F4F4F] hover:bg-[#bfc7b9] dark:border-violet-500/50 dark:text-violet-400 dark:shadow-[0_0_8px_2px_rgba(139,92,246,0.5)] dark:hover:bg-violet-900/30"
              >
                <Github className="h-4 w-4 text-[#2F4F4F] dark:text-violet-400" />
                Repository
              </Link>

              {/* Live Project Button - Optional */}
              {liveLink && (
                <Link
                  href={liveLink}
                  target="_blank"
                  className="w-full inline-flex items-center justify-center gap-2 text-sm border rounded-md px-4 py-2.5 font-bold transition-colors border-[#2F4F4F] text-[#2F4F4F] shadow-[0_0_8px_2px_#2F4F4F] hover:bg-[#bfc7b9] dark:border-violet-500/50 dark:text-violet-400 dark:shadow-[0_0_8px_2px_rgba(139,92,246,0.5)] dark:hover:bg-violet-900/30"
                >
                  <ExternalLink className="h-4 w-4 text-red-600 dark:text-red-400" />
                  <span className="border-b-2 border-red-600 dark:border-red-400">Live Project</span>
                </Link>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Back Side */}
        <Card
          className="absolute inset-0 w-full h-full transition-transform duration-200 backdrop-blur backface-hidden rotate-y-180"
          style={{
            border: "2px solid var(--glow)",
            boxShadow:
              "0 0 8px 2px var(--glow), 0 0 4px 1px var(--glow)",
            background: "transparent",
            borderRadius: "0.75rem",
          }}
        >
          <CardContent className="p-4 sm:p-6 flex flex-col h-full">
            {/* Title on Back */}
            <h3 className="font-bold text-xl sm:text-2xl mb-4 text-center text-[#2F4F4F] dark:text-violet-600">
              {title}
            </h3>

            {/* Description */}
            <div className="flex-1 mb-4">
              <p className="text-sm font-medium text-[#2F4F4F] dark:text-gray-200 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Flip Button */}
            <button
              onClick={toggleFlip}
              className="mt-auto inline-flex items-center justify-center gap-2 text-sm border rounded-md px-4 py-2.5 font-bold transition-colors border-[#2F4F4F] text-[#2F4F4F] shadow-[0_0_8px_2px_#2F4F4F] hover:bg-[#bfc7b9] dark:border-violet-500/50 dark:text-violet-400 dark:shadow-[0_0_8px_2px_rgba(139,92,246,0.5)] dark:hover:bg-violet-900/30"
            >
              <RotateCcw className="h-4 w-4" />
              Flip
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
