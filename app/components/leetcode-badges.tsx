'use client'

import Image from 'next/image'
import { Trophy, Award, Star, Target } from 'lucide-react'

interface Badge {
  id: string
  displayName: string
  icon: string
  category: string
}

interface LeetCodeBadgesProps {
  badges: Badge[]
}

export default function LeetCodeBadges({ badges }: LeetCodeBadgesProps) {
  const getBadgeIcon = (badge: Badge) => {
    // Try to use the actual badge icon from LeetCode
    if (badge.icon && badge.icon !== '') {
      // If the icon is a URL, use it directly
      if (badge.icon.startsWith('http')) {
        return (
          <Image 
            src={badge.icon} 
            alt={badge.displayName}
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
            onError={(e) => {
              // Fallback to generic icon if image fails to load
              e.currentTarget.style.display = 'none'
              e.currentTarget.nextElementSibling?.classList.remove('hidden')
            }}
          />
        )
      }
      
      // If it's a base64 encoded image
      if (badge.icon.startsWith('data:image')) {
        return (
          <img 
            src={badge.icon} 
            alt={badge.displayName}
            className="w-8 h-8 object-contain"
          />
        )
      }
    }
    
    // Fallback to generic icons based on category/name
    const name = badge.displayName.toLowerCase()
    const category = badge.category.toLowerCase()

    if (name.includes('contest') || category.includes('contest')) {
      return <Trophy className="w-8 h-8 text-yellow-500" />
    }
    if (name.includes('streak') || name.includes('daily')) {
      return <Target className="w-8 h-8 text-green-500" />
    }
    if (name.includes('problem') || name.includes('solve')) {
      return <Star className="w-8 h-8 text-blue-500" />
    }
    if (name.includes('rating') || name.includes('rank')) {
      return <Award className="w-8 h-8 text-purple-500" />
    }
    
    return <Award className="w-8 h-8 text-[#2F4F4F] dark:text-violet-400" />
  }

  if (!badges || badges.length === 0) {
    return (
      <div className="w-full p-6 rounded-xl backdrop-blur"
        style={{
          border: "2px solid var(--glow)",
          boxShadow: "0 0 8px 2px var(--glow), 0 0 4px 1px var(--glow)",
          background: "transparent",
        }}
      >
        <div className="text-center text-[#2F4F4F] dark:text-violet-400">
          <Award className="w-8 h-8 mx-auto mb-2" />
          <p className="text-sm">No badges available</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full p-6 rounded-xl backdrop-blur"
      style={{
        border: "2px solid var(--glow)",
        boxShadow: "0 0 8px 2px var(--glow), 0 0 4px 1px var(--glow)",
        background: "transparent",
      }}
    >
      <h3 className="text-lg font-semibold text-[#2F4F4F] dark:text-violet-400 mb-6 text-center">
        LeetCode Badges ({badges.length})
      </h3>
      
      {/* Badge Icons Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className="flex flex-col items-center gap-2 p-4 rounded-lg border border-[#2F4F4F]/20 dark:border-violet-500/20 hover:border-[#2F4F4F]/40 dark:hover:border-violet-500/40 transition-all duration-200 hover:scale-105 group"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="flex-shrink-0 relative">
              {getBadgeIcon(badge)}
              {/* Fallback icon (hidden by default) */}
              <div className="hidden">
                {badge.icon && badge.icon.startsWith('http') && (
                  <Award className="w-8 h-8 text-[#2F4F4F] dark:text-violet-400" />
                )}
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs font-medium text-[#2F4F4F] dark:text-violet-300 truncate max-w-[80px] group-hover:max-w-none transition-all duration-200">
                {badge.displayName}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Badge Details List (Collapsible) */}
      <details className="mt-4">
        <summary className="cursor-pointer text-sm font-medium text-[#2F4F4F] dark:text-violet-400 hover:text-[#2F4F4F]/80 dark:hover:text-violet-400/80 transition-colors">
          View Badge Details
        </summary>
        <div className="mt-3 space-y-2">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className="flex items-center gap-3 p-3 rounded-lg border border-[#2F4F4F]/10 dark:border-violet-500/10"
              style={{
                background: "rgba(255, 255, 255, 0.02)",
              }}
            >
              <div className="flex-shrink-0">
                {getBadgeIcon(badge)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[#2F4F4F] dark:text-violet-300 truncate">
                  {badge.displayName}
                </p>
                <p className="text-xs text-[#2F4F4F]/70 dark:text-violet-400/70 capitalize">
                  {badge.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </details>
    </div>
  )
}