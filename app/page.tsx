'use client'

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter, MapPin, Phone, Facebook } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import { ThemeToggle } from "@/components/theme-toggle"
import AnimatedBg from "@/components/animated-bg"
import Image from "next/image" 
import CPProfile from './components/cp-profile'

export default function Page(){
  
  const glowingCardStyle = {
    border: "2px solid rgba(139,92,246,1)",
    boxShadow: "0 0 8px 2px rgba(139, 92, 246, 0.7), 0 0 4px 1px rgba(139, 92, 246, 0.5)",
    background: "transparent",
  }

  return (
    <div className="relative min-h-screen text-black dark:text-foreground">
      <AnimatedBg />
      <header className="sticky top-0 z-50 w-full border-b border-border bg-white dark:bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center pl-2 md:pl-8 pr-2 md:pr-8">
          
          <Link
            href="#about"
            className="mr-4 flex items-center font-bold text-lg text-black dark:text-primary hover:underline underline-offset-4"
            style={{
              minWidth: "max-content",
              border: "2px solid rgba(139,92,246,1)",
              boxShadow:
                "0 0 8px 2px rgba(139, 92, 246, 0.7), 0 0 4px 1px rgba(139, 92, 246, 0.5)",
              background: "transparent",
              borderRadius: "0.75rem",
              padding: "0.1rem 1rem",
            }}
          >
            G_for_Gour
          </Link>
          
          <nav className="flex items-center gap-3 ml-auto">
            <ThemeToggle />
            {[
              
              { href: "#cp-profile", label: "CP Profile" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contact" },
              { href: "/resume.pdf", label: "Resume", external: true },
            ].map(({ href, label, external }) => (
              <span
                key={label}
                className="rounded-xl flex items-center"
                style={{
                  border: "2px solid rgba(139,92,246,1)",
                  boxShadow:
                    "0 0 8px 2px rgba(139, 92, 246, 0.7), 0 0 4px 1px rgba(139, 92, 246, 0.5)",
                  background: "transparent",
                  padding: "0.1rem 0.75rem",
                  height: "2.2rem",
                  minHeight: "unset",
                }}
              >
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="text-black dark:text-primary border-none bg-transparent shadow-none px-0 h-auto min-h-0"
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
          </nav>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <section
          id="about"
          className="pt-8 md:pt-10 lg:pt-12 pb-12 md:pb-24 lg:pb-32 flex items-center justify-center"
        >
          <div className="flex flex-col md:flex-row items-start w-full">
            {/* Left: Main About Content (60%) */}
            <div className="w-full md:w-[60%] flex flex-col items-start justify-center space-y-6 md:pl-8">
              <div className="flex items-center w-full">
                <span
                  className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold 
    text-violet-600 dark:text-white"
                >
                  Hi, I'm
                </span>
                <div className="flex-1" />
                <div
                  className="flex gap-4 rounded-xl"
                  style={{
                    border: "2px solid rgba(139,92,246,1)",
                    boxShadow:
                      "0 0 8px 2px rgba(139, 92, 246, 0.7), 0 0 4px 1px rgba(139, 92, 246, 0.5)",
                    background: "transparent",
                    padding: "0.5rem 1rem",
                  }}
                >
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-black dark:text-primary border-none bg-transparent shadow-none flex items-center justify-center"
                    asChild
                  >
                    <Link href="https://github.com/gfor-gour" target="_blank">
                      <Github className="h-7 w-7" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  {/* <Link href="https://leetcode.com" target="_blank">
                    <Button variant="outline" size="lg" className="text-black dark:text-primary border-none bg-transparent shadow-none flex items-center justify-center">
                      <Image
                        src="/leetcode.png"
                        alt="LeetCode"
                        width={28}
                        height={28}
                        style={{ display: "inline-block" }}
                      />
                      <span className="sr-only">LeetCode</span>
                    </Button>
                  </Link> */}
                  <Link href="https://www.linkedin.com/in/gour-gupal-talukder/" target="_blank">
                    <Button variant="outline" size="lg" className="text-black dark:text-primary border-none bg-transparent shadow-none flex items-center justify-center">
                      <Linkedin className="h-7 w-7" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="https://x.com/this_is_Gour" target="_blank">
                    <Button variant="outline" size="lg" className="text-black dark:text-primary border-none bg-transparent shadow-none flex items-center justify-center">
                      <Twitter className="h-7 w-7" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </Link>
                  <Link href="mailto:gourgupaltalukder@gmail.com">
                    <Button variant="outline" size="lg" className="text-black dark:text-primary border-none bg-transparent shadow-none flex items-center justify-center">
                      <Mail className="h-7 w-7" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-black dark:text-primary whitespace-nowrap"
                id="about-name"
                style={{ width: "fit-content" }}
              >
                <span className="inline-block animate-name delay-1">Gour</span>{" "}
                <span className="inline-block animate-name delay-2">Gupal</span>{" "}
                <span className="inline-block animate-name delay-3">Talukder</span>{" "}
                <span className="inline-block animate-name delay-4">Shawon</span>
              </h1>
              <div className="w-full md:w-auto flex flex-col items-start">
                <span>
                  <span className="text-base md:text-lg font-semibold text-violet-700 dark:text-violet-200">
                    A Software Engineering student at SUST, Sylhet, Bangladesh.
                  </span>
                  <span className="mx-2 text-base md:text-lg font-semibold text-violet-700 dark:text-violet-200">
                    |
                  </span>
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
                    background:
                      "linear-gradient(90deg, rgba(139,92,246,0.7) 0%, rgba(139,92,246,1) 50%, rgba(139,92,246,0.7) 100%)",
                    boxShadow:
                      "0 0 8px 2px rgba(139, 92, 246, 0.7), 0 0 4px 1px rgba(139, 92, 246, 0.5)",
                  }}
                />
              </div>
              <div
                className="rounded-xl mt-2"
                style={{
                  width: "fit-content",
                  minWidth: "220px",
                  maxWidth: "100%",
                  border: "2px solid rgba(139,92,246,1)",
                  boxShadow:
                    "0 0 8px 2px rgba(139, 92, 246, 0.7), 0 0 4px 1px rgba(139, 92, 246, 0.5)",
                  background: "transparent",
                  padding: "0.75rem 1.25rem",
                  marginLeft: 0,
                  marginRight: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <p className="text-base md:text-lg text-gray-700 dark:text-primary/80 pb-2 text-left">
                  Throughout my coding journey, I’ve demonstrated rigorous problem‑solving acumen by completing over 600 algorithmic challenges across diverse platforms—450+ of which are on LeetCode using C++, Python, and SQL—and earning 16 badges. In parallel, I’ve architected and deployed full‑stack solutions with Next.js, React, Tailwind CSS, Node.js, and both MongoDB and PostgreSQL.
                </p>
                <p className="text-base md:text-lg text-gray-700 dark:text-primary/80 pt-0 text-left">
                  Academically, I’ve consistently performed well, especially in core subjects such as Data Structures & Algorithms, Software Design Patterns, Database Systems, Operating Systems, Computer Networks, and Software Testing. I’m also diving into AI and large‑language models, building a tool to generate clear, context‑aware Git commit messages using LLMs. I’m looking for challenging opportunities that let me push these ideas further.
                </p>
              </div>
            </div>
            {/* Right: Profile Picture (40%) */}
            <div className="hidden md:flex w-full md:w-[40%] justify-end items-start pt-[4.5rem] pl-4">
              <div className="relative w-[400px] h-[500px] mr-12">
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
                  height={500}
                  priority
                  className="relative z-10 rounded-2xl object-cover"
                  style={{
                    boxShadow: "0 0 20px 4px rgba(139,92,246,0.5), 0 0 40px 8px rgba(139,92,246,0.3)", // Enhanced violet shadow
                    objectPosition: "center 25%"
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-black dark:text-primary sm:text-4xl md:text-5xl mb-12 text-center">
              Projects
            </h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
              <ProjectCard
                title="Local Household Service Provider"
                description="Designed and developed a full-stack Local Household Service Provider platform with booking flows, API integration, payment gateway, Nodemailer notifications, and AI chatbot support."
                link="https://github.com/gfor-gour/AI-Integrated-Local-Service-Provider-Platform-Project_350"
                tags={["Next.js", "Express.js", "MongoDB", "TypeScript", "TailwindCSS"]}
              />
              <ProjectCard
                title="IICT Library Management"
                description="Developed a full-stack IICT Library Management system with catalog search, lending history, authentication, and real-time book tracking using React, TypeScript, Node.js, and Express."
                link="https://github.com/mehedi-hasan-2302/IICT-Library-Management"
                tags={["React", "Node.js", "Express.js", "MongoDB", "TypeScript"]}
              />
              <ProjectCard
                title="Green Mind App"
                description="Independently developed a Flutter-based mobile app for SUST psychiatric appointments with secure Firebase authentication, replacing manual booking with an intuitive scheduling system."
                link="https://github.com/gfor-gour/Green-Mind-App"
                tags={["Flutter", "Firebase", "Dart"]}
              />
              

              <ProjectCard
                title="Run and Survive-2D C++ Game"
                description="Developed a 2D side-scrolling survival game in C++ with smooth obstacle mechanics, custom rendering, and responsive jump logic as a first-year team project."
                link="https://github.com/gfor-gour/GameProject-1-2/tree/master"
                tags={["C++", "Igraphics"]}
              />
              <ProjectCard
                title="Custome PhoneCover E-commerce"
                description="Built a custom phone cover e-commerce site using Next.js, TypeScript, Stripe, and Prisma—with live design preview and payment integration—developed as a learning project based on a YouTube tutorial series."
                link="https://github.com/gfor-gour/EcomProject-by-Gour"
                tags={["Next.js", "TypeScript", "Stripe", "Prisma"]}
              />
              <ProjectCard
                title="Fly and Live Forever- 2D Java Game"
                description="Developed Fly and Live Forever, a 2D runner game using Java LibGDX, where a toy plane navigates dynamic obstacles to survive as long as possible."
                link="https://github.com/gfor-gour/2-1-JavaGame-Project?tab=readme-ov-file"
                tags={["java", "LibGDX"]}
              />
            </div>
          </div>
        </section>

        <section id="cp-profile" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-black dark:text-primary sm:text-4xl md:text-5xl mb-12 text-center">
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
                Let's <span className="text-violet-600 dark:text-violet-400">Connect</span>
              </h2>
              
              <div className="flex flex-col items-center space-y-8">
                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  {/* Location Card */}
                  <div 
                    className="p-6 rounded-xl backdrop-blur transition-all duration-300 hover:scale-105"
                    style={glowingCardStyle}
                  >
                    <div className="flex items-center gap-4">
                      <MapPin className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                      <div>
                        <h3 className="font-semibold text-black dark:text-primary">Location</h3>
                        <p className="text-black dark:text-gray-300">Sylhet, Bangladesh</p>
                      </div>
                    </div>
                  </div>

                  {/* Phone Card */}
                  <a 
                    href="tel:+8801746244930" 
                    className="p-6 rounded-xl backdrop-blur transition-all duration-300 hover:scale-105"
                    style={glowingCardStyle}
                  >
                    <div className="flex items-center gap-4">
                      <Phone className="w-6 h-6 text-violet-600 dark:text-violet-400" />
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
                      <Mail className="w-6 h-6 text-violet-600 dark:text-violet-400" />
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
                      <Github className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                      <div>
                        <h3 className="font-semibold text-black dark:text-primary">GitHub</h3>
                        <p className="text-black dark:text-gray-300">gfor-gour</p>
                      </div>
                    </a>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4"> 
                    {[
                      {
                        name: 'LinkedIn',
                        icon: <Linkedin className="w-6 h-6" />,
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
                            className="dark:invert brightness-0 dark:brightness-200" 
                          />
                        ),
                        href: 'https://leetcode.com/u/g_for_gour/',
                        color: 'text-gray-800 dark:text-gray-200'
                      },
                      {
                        name: 'X (Twitter)',
                        icon: <Twitter className="w-6 h-6" />,
                        href: 'https://x.com/this_is_Gour',
                        color: 'text-gray-800 dark:text-gray-200'
                      },
                      {
                        name: 'Facebook',
                        icon: <Facebook className="w-6 h-6" />,
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
                        I'm always open to discussing new projects and opportunities.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-white dark:bg-background">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-muted-foreground">© 2024 gourgupal.dev. All rights reserved.</p>
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
