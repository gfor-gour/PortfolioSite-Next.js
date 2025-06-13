'use client'

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
import Image from "next/image" 
import CPProfile from './components/cp-profile'

export default function Page() {
  
  const glowingCardStyle = {
    border: "2px solid rgba(139,92,246,1)",
    boxShadow: "0 0 8px 2px rgba(139, 92, 246, 0.7), 0 0 4px 1px rgba(139, 92, 246, 0.5)",
    background: "transparent",
  }

  return (
    <div className="relative min-h-screen text-black dark:text-foreground">
      <AnimatedBg />

      {/* Fix navbar scrolling */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-white dark:bg-background/95 backdrop-blur">
        <div className="container flex h-14 items-center justify-between">
          {/* Logo - Left side */}
            <Link
            href="#about"
            className="flex-shrink-0 flex items-center font-bold text-lg ml-2 sm:ml-4"
            style={{
              minWidth: "max-content",
              border: "2px solid rgba(139,92,246,1)",
              boxShadow: "0 0 8px 2px rgba(139, 92, 246, 0.7), 0 0 4px 1px rgba(139, 92, 246, 0.5)",
              background: "transparent",
              borderRadius: "0.75rem",
              padding: "0.1rem 1rem",
            }}
            >
            G_for_Gour
            </Link>

          {/* Navigation container - Right side */}
          <div className="flex-1 flex justify-end">
            <nav className="flex items-center">
              <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto scrollbar-hide py-2 px-1">
                {[
                  { href: "#cp-profile", label: "CP Profile" },
                  { href: "#projects", label: "Projects" },
                  { href: "#contact", label: "Contact" },
                  { href: "/resume.pdf", label: "Resume", external: true },
                ].map(({ href, label, external }) => (
                  <span
                    key={label}
                    className="rounded-xl flex items-center flex-shrink-0"
                    style={{
                      border: "2px solid rgba(139,92,246,1)",
                      boxShadow: "0 0 8px 2px rgba(139, 92, 246, 0.7), 0 0 4px 1px rgba(139, 92, 246, 0.5)",
                      background: "transparent",
                      padding: "0.1rem 0.5rem",
                      height: "1.8rem",
                      minHeight: "unset",
                    }}
                  >
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="text-black dark:text-primary border-none bg-transparent shadow-none px-0 h-auto min-h-0 text-xs sm:text-sm"
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
                ))}
                <ThemeToggle 
                  className="flex-shrink-0 h-7 w-7 sm:h-9 sm:w-9 ml-2"
                />
              </div>
            </nav>
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
              <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-violet-600 dark:text-white">
                  Hi, I&apos;m
                </span>
              </div>

              {/* Name with animations */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-black dark:text-primary break-words sm:whitespace-nowrap">
                <span className="inline-block animate-name delay-1">Gour</span>{" "}
                <span className="inline-block animate-name delay-2">Gupal</span>{" "}
                <span className="inline-block animate-name delay-3">Talukder</span>{" "}
                <span className="inline-block animate-name delay-4">Shawon</span>
              </h1>

              {/* Bio section */}
              <div className="w-full md:w-auto flex flex-col items-start">
                <span className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                  <span className="text-base md:text-lg font-semibold text-violet-700 dark:text-violet-200">
                    A Software Engineering student at SUST, Sylhet, Bangladesh.
                  </span>
                  <span className="hidden sm:inline text-violet-700 dark:text-violet-200">|</span>
                  <span className="text-sm md:text-base text-violet-600 dark:text-violet-300">
                    7th semester of the Final Year
                  </span>
                </span>
                <span
                  className="block mt-2"
                  style={{
                    width: "100%",
                    height: "1px", // Thinner line
                    borderRadius: "0.5px",
                    background: "linear-gradient(90deg, rgba(139,92,246,0.7) 0%, rgba(139,92,246,1) 50%, rgba(139,92,246,0.7) 100%)",
                    boxShadow: "0 0 8px 2px rgba(139, 92, 246, 0.7), 0 0 4px 1px rgba(139, 92, 246, 0.5)",
                  }} />
              </div>

              {/* About text container */}
              <div
                className="rounded-xl mt-2 w-full sm:w-fit max-w-full p-4 sm:p-6"
                style={{
                  border: "2px solid rgba(139,92,246,1)",
                  boxShadow: "0 0 8px 2px rgba(139, 92, 246, 0.7), 0 0 4px 1px rgba(139, 92, 246, 0.5)",
                  background: "transparent",
                }}
              >
                <p className="text-gray-800 dark:text-violet-100">
                  Throughout my coding journey, I’ve demonstrated rigorous problem‑solving acumen by completing over 600 algorithmic challenges across diverse platforms—450+ of which are on LeetCode using C++, Python, and SQL—and earning 16 badges. In parallel, I’ve architected and deployed full‑stack solutions with Next.js, React, Tailwind CSS, Node.js, and both MongoDB and PostgreSQL.
                  Academically, I’ve consistently performed well, especially in core subjects such as Data Structures & Algorithms, Software Design Patterns, Database Systems, Operating Systems, Computer Networks, and Software Testing. I’m also diving into AI and large‑language models, building a tool to generate clear, context‑aware Git commit messages using LLMs. I’m looking for challenging opportunities that let me push these ideas further.
                </p>
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full md:w-[40%] flex flex-col items-center md:items-end">
              {/* Profile Picture Container */}
              <div className="relative w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] aspect-square mb-6">
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: "radial-gradient(circle at center, rgba(139,92,246,0.15), transparent 70%)",
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
                    boxShadow: "0 0 20px 4px rgba(139,92,246,0.5), 0 0 40px 8px rgba(139,92,246,0.3)",
                    objectPosition: "center 15%" 
                  }} />
              </div>

              {/* Social Links Box - Visible on all screen sizes */}
              <div className="flex w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] justify-between gap-2 rounded-xl p-4"
                style={{
                  border: "2px solid rgba(139,92,246,1)",
                  boxShadow: "0 0 8px 2px rgba(139, 92, 246, 0.7), 0 0 4px 1px rgba(139,92,246,0.5)",
                  background: "transparent",
                }}
              >
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="flex-1 text-black dark:text-primary border-none bg-transparent shadow-none flex items-center justify-center"
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
                  className="flex-1 text-black dark:text-primary border-none bg-transparent shadow-none flex items-center justify-center"
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
                  className="flex-1 text-black dark:text-primary border-none bg-transparent shadow-none flex items-center justify-center"
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
                  className="flex-1 text-black dark:text-primary border-none bg-transparent shadow-none flex items-center justify-center"
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

        <section id="projects" className="py-8 sm:py-12 md:py-24 lg:py-32">
          <div className="container px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-center mb-8 sm:mb-12">
              <span className="text-black dark:text-white">Development </span>
              <span className="text-violet-600 dark:text-violet-400">Archive</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">

              <ProjectCard
                title="Local Household Service Provider"
                description="Designed and developed a full-stack Local Household Service Provider platform with booking flows, API integration, payment gateway, Nodemailer notifications, and AI chatbot support."
                link="https://github.com/gfor-gour/AI-Integrated-Local-Service-Provider-Platform-Project_350"
                tags={["Next.js", "Express.js", "MongoDB", "TypeScript", "TailwindCSS"]} />
              <ProjectCard
                title="IICT Library Management"
                description="Developed a full-stack IICT Library Management system with catalog search, lending history, authentication, and real-time book tracking using React, TypeScript, Node.js, and Express."
                link="https://github.com/mehedi-hasan-2302/IICT-Library-Management"
                tags={["React", "Node.js", "Express.js", "MongoDB", "TypeScript"]} />
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
              CP <span className="text-violet-600 dark:text-violet-400">Profile</span>
            </h2>
            <CPProfile />
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Technical <span className="text-violet-600 dark:text-violet-400">Skills</span>
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
                Let&apos;s <span className="text-violet-600 dark:text-violet-400">Connect</span>
              </h2>

              <div className="flex flex-col items-center space-y-8">
                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  {/* Location Card */}
                  <div className="p-6 rounded-xl backdrop-blur transition-all duration-300 hover:scale-105"
                    style={glowingCardStyle}
                  >
                    <div className="flex items-center gap-4">
                      <MapPinIcon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                      <div>
                        <h3 className="font-semibold text-black dark:text-primary">Location</h3>
                        <p className="text-black dark:text-gray-300">Sylhet, Bangladesh</p>
                      </div>
                    </div>
                  </div>

                  {/* Phone Card */}
                  <a href="tel:+8801746244930"
                    className="p-6 rounded-xl backdrop-blur transition-all duration-300 hover:scale-105"
                    style={glowingCardStyle}
                  >
                    <div className="flex items-center gap-4">
                      <PhoneIcon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                      <div>
                        <h3 className="font-semibold text-black dark:text-primary">Phone</h3>
                        <p className="text-black dark:text-gray-300">+880 1746-244930</p>
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
                      style={glowingCardStyle}
                    >
                      <MailIcon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                      <div>
                        <h3 className="font-semibold text-black dark:text-primary">Email</h3>
                        <p className="text-black dark:text-gray-300">gourgupaltalukder@gmail.com</p>
                      </div>
                    </a>


                    <a
                      href="https://github.com/gfor-gour"
                      className="flex items-center gap-4 p-6 rounded-xl backdrop-blur transition-all duration-300 hover:scale-105"
                      style={glowingCardStyle}
                    >
                      <GithubIcon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                      <div>
                        <h3 className="font-semibold text-black dark:text-primary">GitHub</h3>
                        <p className="text-black dark:text-gray-300">gfor-gour</p>
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
                        style={glowingCardStyle}
                      >
                        {social.icon}
                        <span className="font-medium text-black dark:text-primary">{social.name}</span>
                      </a>
                    ))}
                  </div>

                  <div
                    className="mt-8 p-6 rounded-xl backdrop-blur"
                    style={glowingCardStyle}
                  >
                    <p className="text-center text-lg md:text-xl font-medium text-violet-700 dark:text-violet-300">
                      Feel free to reach out for collaborations or just to say hi!
                      <br />
                      <span className="text-base md:text-lg text-violet-600/90 dark:text-violet-400/90">
                        I&apos;m always open to discussing new projects and opportunities.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main><footer className="border-t border-border bg-white dark:bg-background">
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
  )
}
