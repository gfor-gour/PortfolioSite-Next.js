'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { 
  GithubIcon, 
  LinkedinIcon, 
  MailIcon, 
  TwitterIcon, 
  MapPinIcon, 
  PhoneIcon, 
  FacebookIcon 
} from "lucide-react"
import Link from "next/link"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import { ThemeToggle } from "@/components/theme-toggle"
import AnimatedBg from "@/components/animated-bg"
import { MobileMenu } from "@/components/mobile-menu"
import Image from "next/image" 
import CPProfile from './components/cp-profile'
import AchievementSection from './components/achievement-section'
import { LeetCodeData } from '@/types/leetcode'

export default function Page() {
  const [leetCodeData, setLeetCodeData] = useState<LeetCodeData | null>(null)
  const [loading, setLoading] = useState(true)
  
  const glowingCardStyle = {
    border: "2px solid var(--glow)",
    boxShadow: "0 0 8px 2px var(--glow), 0 0 4px 1px var(--glow)",
    background: "var(--card)",
  }

  const fetchLeetCodeData = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/leetcode', {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error('Failed to fetch LeetCode data')
      }

      const data = await response.json()
      setLeetCodeData(data)
    } catch (err) {
      console.error('Error fetching LeetCode data:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLeetCodeData()
  }, [])

  return (
    <div className="relative min-h-screen text-black dark:text-foreground flex justify-center">
      <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
      <AnimatedBg />

      {/* Static navbar */}
      <header className="w-full border-b border-[var(--glow)] bg-[#A6B0A6] dark:bg-background/95 backdrop-blur">
        <div className="container flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo - Left side */}
          <Link
          href="#about"
          className="flex-shrink-0 flex items-center font-bold text-lg ml-2 sm:ml-4 text-[#2F4F4F] dark:text-white"
          style={{
          minWidth: "max-content",
          border: "2px solid var(--glow)",
          boxShadow: "0 0 8px 2px var(--glow), 0 0 4px 1px var(--glow)",
          background: "var(--card)",
          borderRadius: "0.75rem",
          padding: "0.1rem 1rem",
          }}
          >
          G_for_Gour
          </Link>

        {/* Navigation container - Right side */}
        <div className="flex items-center gap-2">
          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center">
            <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide py-2 px-2">
              {[
                { href: "#contact", label: "Contact" },
                { href: "/resume.pdf", label: "Resume", external: true },
              ].map(({ href, label, external }) => (
                <span
                  key={label}
                  className="rounded-xl flex items-center flex-shrink-0"
                  style={{
                    border: "2px solid var(--glow)",
                    boxShadow: "0 0 6px 1.6px var(--glow), 0 0 3.2px 0.8px var(--glow)",
                    background: "var(--card)",
                    padding: "0.1rem 0.5rem",
                    height: "1.8rem",
                    minHeight: "unset",
                  }}
                >
                  <Link
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="text-[#2F4F4F] dark:text-white text-xs sm:text-sm font-semibold dark:font-medium hover:no-underline hover:text-[#2F4F4F] dark:hover:text-white transition-none"
                  >
                    {label}
                  </Link>
                </span>
              ))}
            </div>
          </nav>

          {/* Theme Toggle and Mobile Menu */}
          <div className="flex items-center gap-2">
            <ThemeToggle 
              className="flex-shrink-0 h-7 w-7 sm:h-9 sm:w-9"
            />
            <MobileMenu />
          </div>
        </div>
        </div>
      </header>

      <main className="container px-4 sm:px-6 lg:px-8">
        <section
        id="about"
        className="pt-4 sm:pt-8 md:pt-10 lg:pt-12 pb-8 sm:pb-12 md:pb-24 lg:pb-32"
        >
        <div className="flex flex-col md:flex-row items-start gap-8 w-full">
          {/* Left Content */}
          <div className="w-full md:w-[60%] flex flex-col items-start justify-center space-y-4 sm:space-y-6">
          {/* Hi, I'm section - Remove mobile social icons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center w-full gap-2 sm:gap-4">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2F4F4F] dark:text-white">
            Hi, I&apos;m
            </span>
          </div>

          {/* Name with animations */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#2F4F4F] dark:text-primary break-words sm:whitespace-nowrap">
            <span className="inline-block animate-name delay-1">Gour</span>{" "}
            <span className="inline-block animate-name delay-2">Gupal</span>{" "}
            <span className="inline-block animate-name delay-3">Talukder</span>{" "}
            <span className="inline-block animate-name delay-4">Shawon</span>
          </h1>

          {/* Bio section */}
          <div className="w-full md:w-auto flex flex-col items-start">
            <span className="flex flex-col items-start gap-1">
              <span className="text-base md:text-lg font-semibold text-[#2F4F4F] dark:text-violet-200">
                A Software Engineering student <span className="font-normal">7th semester, Final Year</span>
              </span>
              <span className="text-lg md:text-xl font-semibold text-[#2F4F4F] dark:text-violet-300">
                Shahjalal University of Science and Technology, Sylhet, Bangladesh
              </span>
            </span>
            <span
            className="block mt-2"
            style={{
              width: "100%",
              height: "1px", // Thinner line
              borderRadius: "0.5px",
              background: "var(--glow)",
              boxShadow: "0 0 8px 2px var(--glow), 0 0 4px 1px var(--glow)",
            }} />
          </div>

          {/* About text container */}
          <div
            className="rounded-xl mt-2 w-full sm:w-fit max-w-full p-4 sm:p-6 backdrop-blur"
            style={{
            border: "2px solid var(--glow)",
            boxShadow: "0 0 8px 2px var(--glow), 0 0 4px 1px var(--glow)",
            background: "transparent",
            }}
          >
            <div className="space-y-4 text-gray-800 dark:text-violet-100">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-[#2F4F4F] dark:bg-violet-400 rounded-full mt-2"></div>
                <div>
                  Problem-solving driven developer with 750+ algorithmic problems solved across LeetCode, Codeforces, UVA & VJudge; 23 badges, 433 day max streak, and peak rating 1622 on LeetCode.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-[#2F4F4F] dark:bg-violet-400 rounded-full mt-2"></div>
                <div>
                  Full-stack engineer experienced in building and deploying scalable applications using Next.js, React, Node.js, Express.js, MongoDB, and PostgreSQL.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-[#2F4F4F] dark:bg-violet-400 rounded-full mt-2"></div>
                <div>
                  Developed ML systems including a 91% accurate personality detection model using Random Forest with optimized feature engineering.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-[#2F4F4F] dark:bg-violet-400 rounded-full mt-2"></div>
                <div>
                  Built real-world impactful systems: digital library management, AI-assisted service platform, and a Flutter app used in SUST’s psychiatry department, reducing manual workload by 80%.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-[#2F4F4F] dark:bg-violet-400 rounded-full mt-2"></div>
                <div>
                  Strong foundation in CS fundamentals: DSA, OOP, Operating Systems, Networking, DBMS, AI, ML, Deep Learning.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-[#2F4F4F] dark:bg-violet-400 rounded-full mt-2"></div>
                <div>
                  Hands-on experience with LLM research, currently working on automated Git commit message generation using LLM&apos;s & human evaluation.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-[#2F4F4F] dark:bg-violet-400 rounded-full mt-2"></div>
                <div>
                  Team-oriented, fast learner, and highly consistent with a strong growth mindset — always eager to take on technically challenging projects.
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-[40%] flex flex-col items-center md:items-end">
          {/* Profile Picture Container */}
          <div className="relative w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] aspect-square mb-6">
            <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: "radial-gradient(circle at center, #2F4F4F22 0%, transparent 70%)",
              filter: "blur(20px)",
              transform: "translateY(10px) scale(0.95)",
            }}
            />
            <Image
            src="/profile.png"
            alt="Gour Gupal Talukder"
            width={400}
            height={400}
            priority
            className="relative z-10 rounded-2xl object-cover w-full h-full"
            style={{
              boxShadow: "0 0 20px 4px var(--glow), 0 0 40px 8px var(--glow)",
              objectPosition: "center 15%" 
            }} />
          </div>

          {/* Social Links Box - Visible on all screen sizes */}
          <div className="flex w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] justify-between gap-2 rounded-xl p-4"
            style={{
            border: "2px solid var(--glow)",
            boxShadow: "0 0 8px 2px var(--glow), 0 0 4px 1px var(--glow)",
            background: "transparent",
            }}
          >
            
            <Button 
            variant="outline" 
            size="lg" 
            className="flex-1 text-[#2F4F4F] dark:text-primary border-none bg-transparent shadow-none flex items-center justify-center"
            asChild
            >
            <Link href="https://github.com/gfor-gour" target="_blank">
              <GithubIcon className="h-5 w-5 sm:h-7 sm:w-7" />
              <span className="sr-only">GitHub</span>
            </Link>
            </Button>
            <Button
            variant="outline"
            size="lg"
            className="flex-1 text-[#2F4F4F] dark:text-primary border-none bg-transparent shadow-none flex items-center justify-center"
            asChild
            >
            <Link href="https://www.linkedin.com/in/gour-gupal-talukder/" target="_blank">
              <LinkedinIcon className="h-5 w-5 sm:h-7 sm:w-7" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            </Button>
            <Button
            variant="outline"
            size="lg"
            className="flex-1 text-[#2F4F4F] dark:text-primary border-none bg-transparent shadow-none flex items-center justify-center"
            asChild
            >
            <Link href="https://x.com/this_is_Gour" target="_blank">
              <TwitterIcon className="h-5 w-5 sm:h-7 sm:w-7" />
              <span className="sr-only">Twitter</span>
            </Link>
            </Button>
            <Button
            variant="outline"
            size="lg"
            className="flex-1 text-[#2F4F4F] dark:text-primary border-none bg-transparent shadow-none flex items-center justify-center"
            asChild
            >
            <Link href="mailto:gourgupaltalukder@gmail.com">
              <MailIcon className="h-5 w-5 sm:h-7 sm:w-7" />
              <span className="sr-only">Email</span>
            </Link>
            </Button>
          </div>
          </div>
        </div>
        </section>

        <section id="achievements" className="py-8 sm:py-12 md:py-24 lg:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-center mb-8 sm:mb-12">
          <span className="text-[#2F4F4F] dark:text-white">Hackathon </span>
          <span className="text-[#2F4F4F] dark:text-violet-400">Achievements</span>
          </h2>
          <AchievementSection />
        </div>
        </section>

        <section id="projects" className="py-8 sm:py-12 md:py-24 lg:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-center mb-8 sm:mb-12">
          <span className="text-[#2F4F4F] dark:text-white">Development </span>
          <span className="text-[#2F4F4F] dark:text-violet-400">Archive</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          
          <ProjectCard
            title="Personality Detection Using Machine Learning"
            description="Developed a machine learning system using Random Forest to predict personality traits from behavioral data with 91% accuracy. Improved feature engineering and data preprocessing, enhancing the F1 score by 20% for reliable real-time predictions."
            link="https://github.com/Amitsharma2468/personalitydetection"
            liveLink="https://personalitydetection.vercel.app/"
            tags={["Python", " scikit-learn", " Flask", "Next.js", "Pandas", "NumPy", "joblib"]} />

          <ProjectCard
            title="Local Household Service Provider"
            description="Designed and developed a full-stack Local Household Service Provider platform with booking flows, API integration, payment gateway, Nodemailer notifications, and AI chatbot support."
            link="https://github.com/gfor-gour/AI-Integrated-Local-Service-Provider-Platform-Project_350"
            liveLink="https://service-connect-350.vercel.app/"
            tags={["Next.js", "Express.js", "MongoDB", "TypeScript", "TailwindCSS"]} />
          <ProjectCard
            title="IICT Library Management"
            description="Developed a full-stack IICT Library Management system with catalog search, lending history, authentication, and real-time book tracking using React, TypeScript, Node.js, and Express."
            link="https://github.com/mehedi-hasan-2302/IICT-Library-Management"
            liveLink="https://iict-library.vercel.app/"
            tags={["React", "Node.js", "Express.js", "MongoDB", "TypeScript"]} />

          <ProjectCard
            title="Financial Document Analysis using RAG"
            description="Built a RAG pipeline combining text and structured financial data, achieving 100% retrieval relevance and query responses under 2 seconds using FAISS-based similarity search and hybrid retrieval. Implemented smart chunking, embedding generation, and hybrid query answering, ensuring 100% accuracy in financial metric extraction and precise year-over-year comparisons."
            link="https://github.com/gfor-gour/RAG-pipeline"
            tags={[ "Python", "pdfplumber", "all-MiniLM-L6-v2", "DistilBERT-base-cased-distilled-SQuAD", "FAISS", "pandas", "NLTK", "NumPy"]} />


          <ProjectCard
            title="Green Mind App"
            description="Independently developed a Flutter-based mobile app for SUST psychiatric appointments with secure Firebase authentication, replacing manual booking with an intuitive scheduling system."
            link="https://github.com/gfor-gour/Green-Mind-App"
            tags={["Flutter", "Firebase", "Dart"]} />


          <ProjectCard
            title="Run and Survive-2D C++ Game"
            description="Developed a 2D side-scrolling survival game in C++ with smooth obstacle mechanics, custom rendering, and responsive jump logic as a first-year team project."
            link="https://github.com/gfor-gour/GameProject-1-2/tree/master"
            tags={["C++", "Igraphics"]} />
          <ProjectCard
            title="Custome PhoneCover E-commerce"
            description="Built a custom phone cover e-commerce site using Next.js, TypeScript, Stripe, and Prisma—with live design preview and payment integration—developed as a learning project based on a YouTube tutorial series."
            link="https://github.com/gfor-gour/EcomProject-by-Gour"
            tags={["Next.js", "TypeScript", "Stripe", "Prisma"]} />
          <ProjectCard
            title="Fly and Live Forever- 2D Java Game"
            description="Developed Fly and Live Forever, a 2D runner game using Java LibGDX, where a toy plane navigates dynamic obstacles to survive as long as possible."
            link="https://github.com/gfor-gour/2-1-JavaGame-Project?tab=readme-ov-file"
            tags={["java", "LibGDX"]} />
          </div>
        </div>
        </section>

        <section id="cp-profile" className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          <span className="text-[#2F4F4F] dark:text-violet-400">CP Profile</span>
          </h2>
          <CPProfile />
        </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          <span className="text-[#2F4F4F] dark:text-violet-400">Technical Skills</span>
          </h2>
          <div className="text-black dark:text-primary">
          <TechStack />
          </div>
        </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tighter text-black dark:text-primary sm:text-4xl md:text-5xl mb-12 text-center">
            <span className="text-[#2F4F4F] dark:text-violet-400">Let&apos;s Connect</span>
          </h2>

          <div className="flex flex-col items-center space-y-8">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Location Card */}
            <div
              className="p-6 rounded-xl backdrop-blur transition-all duration-300 hover:scale-105"
              style={{ ...glowingCardStyle, background: "transparent" }}
            >
              <div className="flex items-center gap-4">
              <MapPinIcon className="w-6 h-6 text-[#2F4F4F] dark:text-violet-400" />
              <div>
                <h3 className="font-semibold text-[#2F4F4F] dark:text-primary">Location</h3>
                <p className="text-[#2F4F4F] dark:text-gray-300">Sylhet, Bangladesh</p>
              </div>
              </div>
            </div>

            {/* Phone Card */}
            <a href="tel:+8801746244930"
              className="p-6 rounded-xl backdrop-blur transition-all duration-300 hover:scale-105"
            style={{ ...glowingCardStyle, background: "transparent" }}
            >
              <div className="flex items-center gap-4">
              <PhoneIcon className="w-6 h-6 text-[#2F4F4F] dark:text-violet-400" />
              <div>
                <h3 className="font-semibold text-[#2F4F4F] dark:text-primary">Phone</h3>
                <p className="text-[#2F4F4F] dark:text-gray-300">+880 1746-244930</p>
              </div>
              </div>
            </a>
            </div>

            {/* Email and Social Links */}
            <div className="w-full space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
              href="mailto:gourgupaltalukder@gmail.com"
              className="flex items-center gap-4 p-6 rounded-xl backdrop-blur transition-all duration-300 hover:scale-105"
              style={{ ...glowingCardStyle, background: "transparent" }}
              >
              <MailIcon className="w-6 h-6 text-[#2F4F4F] dark:text-violet-400" />
              <div>
                <h3 className="font-semibold text-[#2F4F4F] dark:text-primary">Email</h3>
                <p className="text-[#2F4F4F] dark:text-gray-300">gourgupaltalukder@gmail.com</p>
              </div>
              </a>


              <a
              href="https://github.com/gfor-gour"
              className="flex items-center gap-4 p-6 rounded-xl backdrop-blur transition-all duration-300 hover:scale-105"
              style={{ ...glowingCardStyle, background: "transparent" }}
              >
              <GithubIcon className="w-6 h-6 text-[#2F4F4F] dark:text-violet-400" />
              <div>
                <h3 className="font-semibold text-[#2F4F4F] dark:text-primary">GitHub</h3>
                <p className="text-[#2F4F4F] dark:text-gray-300">gfor-gour</p>
              </div>
              </a>
            </div>

            {/* Social Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
              {
                name: 'LinkedIn',
                icon: <LinkedinIcon className="w-6 h-6" />,
                href: 'https://www.linkedin.com/in/gour-gupal-talukder/',
                color: 'text-blue-600 dark:text-blue-400'
              },
              {
                name: 'LeetCode',
                icon: (
                <Image
                  src="/leetcode.svg"
                  alt="LeetCode"
                  width={24}
                  height={24}
                  className="dark:invert brightness-0 dark:brightness-200" />
                ),
                href: 'https://leetcode.com/u/g_for_gour/',
                color: 'text-gray-800 dark:text-gray-200'
              },
              {
                name: 'X (Twitter)',
                icon: <TwitterIcon className="w-6 h-6" />,
                href: 'https://x.com/this_is_Gour',
                color: 'text-gray-800 dark:text-gray-200'
              },
              {
                name: 'Facebook',
                icon: <FacebookIcon className="w-6 h-6" />,
                href: 'https://www.facebook.com/gour.talukder37/',
                color: 'text-blue-600 dark:text-blue-400'
              }
              ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-3 p-4 rounded-xl backdrop-blur 
                  transition-all duration-300 hover:scale-105 ${social.color}`}
                style={{ ...glowingCardStyle, background: "transparent" }}
              >
                {social.icon}
                <span className="font-medium text-[#2F4F4F] dark:text-primary">{social.name}</span>
              </a>
              ))}
            </div>

            <div
              className="mt-8 p-6 rounded-xl backdrop-blur"
              style={{ ...glowingCardStyle, background: "transparent" }}
            >
              <p className="text-center text-lg md:text-xl font-medium text-[#2F4F4F] dark:text-violet-700">
              Feel free to reach out for collaborations or just to say hi!
              <br />
              <span className="text-base md:text-lg text-[#2F4F4F] dark:text-violet-400/90">
                I&apos;m always open to discussing new projects and opportunities.
              </span>
              </p>
            </div>
            </div>
          </div>
          </div>
        </div>
        </section>
      </main>
      <footer className="border-t border-[var(--glow)] bg-[#A6B0A6] dark:bg-background">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-muted-foreground">© 2024 g_for_gour.dev. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs text-gray-500 dark:text-muted-foreground hover:text-black dark:hover:text-primary hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs text-gray-500 dark:text-muted-foreground hover:text-black dark:hover:text-primary hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
          </nav>
        </div>
        </footer>
      </div>
    </div>
  )
}
