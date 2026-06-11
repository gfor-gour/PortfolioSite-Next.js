"use client"

import HeroSection from "@/app/components/hero-section"
import ExperiencesSection from "@/app/components/experiences-section"
import ProjectsSection from "@/app/components/projects-section"
import CPProfile from "@/app/components/cp-profile"
import AchievementSection from "@/app/components/achievement-section"
import TechStack from "@/app/components/tech-stack"
import ContactSection from "@/app/components/contact-section"

export default function CombinedPortfolio() {
  return (
    <div className="w-full flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 max-w-7xl mx-auto pb-24">
      <div id="home" className="scroll-mt-20 w-full">
        <HeroSection />
      </div>
      
      <div id="experiences" className="scroll-mt-20 w-full">
        <ExperiencesSection />
      </div>
      
      <div id="projects" className="scroll-mt-20 w-full">
        <ProjectsSection />
      </div>
      
      <div id="problem-solving" className="scroll-mt-20 w-full">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-foreground">
          CP Profile
        </h2>
        <CPProfile />
      </div>
      
      <div id="achievements" className="scroll-mt-20 w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-center mb-8 sm:mb-12 text-foreground">
          Hackathon Achievements
        </h2>
        <AchievementSection />
      </div>
      
      <div id="skills" className="scroll-mt-20 w-full text-foreground">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          Technical Skills
        </h2>
        <TechStack />
      </div>
      
      <div id="contact" className="scroll-mt-20 w-full">
        <ContactSection />
      </div>
    </div>
  )
}
