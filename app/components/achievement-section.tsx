'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Trophy, Users, Building2, Github, ExternalLink } from "lucide-react"

// Image component with fallback
function ImageWithFallback({
  src,
  alt,
  fallbackIcon: FallbackIcon,
  fallbackText,
  className,
  objectFit = "contain",
}: {
  src?: string
  alt: string
  fallbackIcon: React.ElementType
  fallbackText: string
  className?: string
  objectFit?: "contain" | "cover"
}) {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  if (!src || imageError) {
    return (
      <div className="w-full aspect-[4/3] flex items-center justify-center bg-gray-100 dark:bg-gray-800/50 border-2 border-dashed border-[#2F4F4F]/30 dark:border-violet-400/30">
        <div className="text-center px-4">
          <FallbackIcon className="w-12 h-12 mx-auto mb-3 text-[#2F4F4F]/30 dark:text-violet-400/30" />
          <p className="text-sm font-medium text-[#2F4F4F] dark:text-violet-300">
            {fallbackText}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Image will be displayed here
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full aspect-[4/3] bg-gray-50 dark:bg-gray-900">
      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800/50">
          <div className="text-center px-4">
            <FallbackIcon className="w-8 h-8 mx-auto mb-2 text-[#2F4F4F]/20 dark:text-violet-400/20 animate-pulse" />
            <p className="text-xs text-gray-400 dark:text-gray-500">Loading...</p>
          </div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill
        className={`${objectFit === "contain" ? "object-contain p-4" : "object-cover"} ${className || ""}`}
        sizes="(max-width: 768px) 100vw, 50vw"
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
      />
    </div>
  )
}

// Image component with natural size (for event photos) - uses original image dimensions
function NaturalSizeImage({
  src,
  alt,
  fallbackIcon: FallbackIcon,
  fallbackText,
  maxWidth = "max-w-full",
}: {
  src?: string
  alt: string
  fallbackIcon: React.ElementType
  fallbackText: string
  maxWidth?: string
}) {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  if (!src || imageError) {
    return (
      <div className={`w-full ${maxWidth} flex items-center justify-center bg-gray-100 dark:bg-gray-800/50 border-2 border-dashed border-[#2F4F4F]/30 dark:border-violet-400/30 rounded-lg min-h-[200px]`}>
        <div className="text-center px-4 py-8">
          <FallbackIcon className="w-12 h-12 mx-auto mb-3 text-[#2F4F4F]/30 dark:text-violet-400/30" />
          <p className="text-sm font-medium text-[#2F4F4F] dark:text-violet-300">
            {fallbackText}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Image will be displayed here
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative w-full ${maxWidth} bg-transparent rounded-lg overflow-hidden`}>
      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800/50 min-h-[200px] rounded-lg z-10">
          <div className="text-center px-4">
            <FallbackIcon className="w-8 h-8 mx-auto mb-2 text-[#2F4F4F]/20 dark:text-violet-400/20 animate-pulse" />
            <p className="text-xs text-gray-400 dark:text-gray-500">Loading...</p>
          </div>
        </div>
      )}
      {/* Use regular img tag to preserve natural image dimensions */}
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-contain rounded-lg"
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
        style={{ display: imageLoaded ? 'block' : 'none' }}
      />
    </div>
  )
}

interface Achievement {
  title: string
  position: string
  organizer: string
  coHost?: string
  description: string
  teamSize?: string
  certificateImage?: string
  eventImage?: string
  githubLink?: string
  liveLink?: string
}

interface AchievementSectionProps {
  achievements?: Achievement[]
}

export default function AchievementSection({ achievements }: AchievementSectionProps) {
  // Default achievement data
  const defaultAchievements: Achievement[] = [
    {
      title: "International Hackathon \"Bridging Engineering & Computer Science\"",
      position: "2nd Runner-up",
      organizer: "ILM-AI",
      coHost: "St. George's, University of London",
      description: "Collaborated in a two-member team to design and develop a browser-based, high-fidelity simulation of projectile motion with optional air resistance.",
      teamSize: "2 members",
      certificateImage: "/hack1_certificate.png",
      eventImage: "/prize_event.png",
      githubLink: "https://github.com/gfor-gour/Projectile-Simulation",
      liveLink: "https://simulating-projectile-motion-by-gou.vercel.app/",
    }
  ]

  const displayAchievements = achievements || defaultAchievements

  const glowingCardStyle = {
    border: "2px solid var(--glow)",
    boxShadow: "0 0 8px 2px var(--glow), 0 0 4px 1px var(--glow)",
    background: "transparent",
  }

  return (
    <div className="w-full space-y-8 sm:space-y-12">
      {displayAchievements.map((achievement, index) => (
        <div
          key={index}
          className="w-full rounded-xl backdrop-blur p-6 sm:p-8 md:p-10"
          style={glowingCardStyle}
        >
          {/* Achievement Header */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-start gap-3 mb-6">
              <Trophy className="w-6 h-6 sm:w-7 sm:h-7 text-[#2F4F4F] dark:text-violet-400 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2F4F4F] dark:text-white mb-3">
                  {achievement.title}
                </h3>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2F4F4F]/10 dark:bg-violet-400/20 border border-[#2F4F4F]/30 dark:border-violet-400/30">
                  <span className="text-base sm:text-lg font-semibold text-[#2F4F4F] dark:text-violet-400">
                    {achievement.position}
                  </span>
                </div>
              </div>
            </div>

            {/* Split Content: Left (Event Details) and Right (Description + Buttons) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6">
              {/* Left Column: Event Details */}
              <div className="flex flex-col gap-4 sm:gap-5">
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-[#2F4F4F] dark:text-violet-400 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#2F4F4F] dark:text-violet-300 mb-1">
                      Organized by
                    </p>
                    <p className="text-sm text-[#2F4F4F] dark:text-gray-300">
                      {achievement.organizer}
                    </p>
                  </div>
                </div>

                {achievement.coHost && (
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-[#2F4F4F] dark:text-violet-400 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-[#2F4F4F] dark:text-violet-300 mb-1">
                        Co-hosted by
                      </p>
                      <p className="text-sm text-[#2F4F4F] dark:text-gray-300">
                        {achievement.coHost}
                      </p>
                    </div>
                  </div>
                )}

                {achievement.teamSize && (
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-[#2F4F4F] dark:text-violet-400 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-[#2F4F4F] dark:text-violet-300 mb-1">
                        Team Size
                      </p>
                      <p className="text-sm text-[#2F4F4F] dark:text-gray-300">
                        {achievement.teamSize}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Description + Buttons */}
              <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
                {/* Description */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#2F4F4F] dark:bg-violet-400 rounded-full mt-2"></div>
                  <p className="text-sm sm:text-base md:text-lg text-[#2F4F4F] dark:text-violet-100 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {/* Action Buttons - Always visible, positioned below description */}
                <div className="flex flex-col sm:flex-row gap-3 mt-2 sm:mt-3">
                  {/* GitHub Button */}
                  <Link
                    href={achievement.githubLink || "#"}
                    target={achievement.githubLink ? "_blank" : undefined}
                    rel={achievement.githubLink ? "noopener noreferrer" : undefined}
                    onClick={!achievement.githubLink ? (e) => e.preventDefault() : undefined}
                    className={`flex-1 w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs sm:text-sm border rounded-md px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 font-bold transition-all duration-200 border-[#2F4F4F] text-[#2F4F4F] shadow-[0_0_8px_2px_#2F4F4F] hover:bg-[#bfc7b9] hover:shadow-[0_0_12px_3px_#2F4F4F] dark:border-violet-500/50 dark:text-violet-400 dark:shadow-[0_0_8px_2px_rgba(139,92,246,0.5)] dark:hover:bg-violet-900/30 dark:hover:shadow-[0_0_12px_3px_rgba(139,92,246,0.7)] ${
                      !achievement.githubLink ? "opacity-60 cursor-not-allowed hover:bg-transparent hover:shadow-[0_0_8px_2px_#2F4F4F] dark:hover:bg-transparent dark:hover:shadow-[0_0_8px_2px_rgba(139,92,246,0.5)]" : "cursor-pointer"
                    }`}
                  >
                    <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#2F4F4F] dark:text-violet-400 flex-shrink-0" />
                    <span className="whitespace-nowrap">GitHub</span>
                  </Link>

                  {/* Live Project Button */}
                  <Link
                    href={achievement.liveLink || "#"}
                    target={achievement.liveLink ? "_blank" : undefined}
                    rel={achievement.liveLink ? "noopener noreferrer" : undefined}
                    onClick={!achievement.liveLink ? (e) => e.preventDefault() : undefined}
                    className={`flex-1 w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs sm:text-sm border rounded-md px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 font-bold transition-all duration-200 border-[#2F4F4F] text-[#2F4F4F] shadow-[0_0_8px_2px_#2F4F4F] hover:bg-[#bfc7b9] hover:shadow-[0_0_12px_3px_#2F4F4F] dark:border-violet-500/50 dark:text-violet-400 dark:shadow-[0_0_8px_2px_rgba(139,92,246,0.5)] dark:hover:bg-violet-900/30 dark:hover:shadow-[0_0_12px_3px_rgba(139,92,246,0.7)] ${
                      !achievement.liveLink ? "opacity-60 cursor-not-allowed hover:bg-transparent hover:shadow-[0_0_8px_2px_#2F4F4F] dark:hover:bg-transparent dark:hover:shadow-[0_0_8px_2px_rgba(139,92,246,0.5)]" : "cursor-pointer"
                    }`}
                  >
                    <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-red-600 dark:text-red-400 flex-shrink-0" />
                    <span className="border-b-2 border-red-600 dark:border-red-400 whitespace-nowrap">Live Project</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            className="w-full h-px my-6 sm:my-8"
            style={{
              background: "var(--glow)",
              boxShadow: "0 0 8px 2px var(--glow), 0 0 4px 1px var(--glow)",
            }}
          />

          {/* Images Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Certificate Image */}
            <div className="flex flex-col items-center">
              <h4 className="text-lg sm:text-xl font-semibold text-[#2F4F4F] dark:text-violet-300 mb-4 text-center">
                Certificate
              </h4>
              <div
                className="relative w-full max-w-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
                style={glowingCardStyle}
              >
                <ImageWithFallback
                  src={achievement.certificateImage}
                  alt={`Certificate for ${achievement.title}`}
                  fallbackIcon={Trophy}
                  fallbackText="Certificate"
                  objectFit="contain"
                />
              </div>
            </div>

            {/* Event Image */}
            <div className="flex flex-col items-center">
              <h4 className="text-lg sm:text-xl font-semibold text-[#2F4F4F] dark:text-violet-300 mb-4 text-center">
                Event Photo
              </h4>
              <div
                className="w-full transition-transform duration-300 hover:scale-[1.02]"
                style={glowingCardStyle}
              >
                <NaturalSizeImage
                  src={achievement.eventImage}
                  alt={`Event photo for ${achievement.title}`}
                  fallbackIcon={Users}
                  fallbackText="Event Photo"
                  maxWidth="max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
