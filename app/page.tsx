"use client"

import Image from "next/image"

export default function HomePage() {
  return (
    <main className="container px-4 sm:px-6 lg:px-8">
      <section className="pt-4 sm:pt-8 md:pt-10 lg:pt-12 pb-8 sm:pb-10">
        <div className="flex flex-col md:flex-row items-start gap-8 w-full">
          {/* Left Content */}
          <div className="w-full md:w-[60%] flex flex-col items-start justify-center space-y-4 sm:space-y-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center w-full gap-2 sm:gap-4">
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground dark:text-white">
                Hi, I&apos;m
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground break-words sm:whitespace-nowrap">
              <span className="inline-block animate-name delay-1">Gour</span>{" "}
              <span className="inline-block animate-name delay-2">Gupal</span>{" "}
              <span className="inline-block animate-name delay-3">Talukder</span>{" "}
              <span className="inline-block animate-name delay-4">Shawon</span>
            </h1>

            <div className="space-y-2 sm:space-y-3 w-full">
              {/* Education row */}
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                <p className="flex-1 text-base sm:text-lg md:text-xl font-semibold text-foreground dark:text-white">
                  B.Sc in Software Engineering · SUST, Sylhet
                </p>
                <p className="text-sm sm:text-base text-foreground/80 dark:text-gray-400 sm:text-right">
                  March 2022 – May 2026
                </p>
              </div>

              {/* Intern Software Engineer row */}
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                <p className="flex-1 text-base sm:text-lg md:text-xl font-semibold text-foreground dark:text-white">
                  Intern Software Engineer at Shellbeehaken Ltd.
                </p>
                <p className="text-sm sm:text-base text-foreground/80 dark:text-gray-400 sm:text-right">
                  Dec 2025 – May 2026
                </p>
              </div>

            </div>

            <span
              className="block"
              style={{
                width: "100%",
                height: "1px",
                borderRadius: "0.5px",
                background: "var(--glow)",
                boxShadow: "0 0 4.8px 1.2px var(--glow), 0 0 2.4px 0.6px var(--glow)",
              }}
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-[40%] flex flex-col items-center md:items-end">
            <div className="relative w-[210px] sm:w-[240px] md:w-[270px] lg:w-[300px] aspect-square mb-4">
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
                  boxShadow: "0 0 12px 2.4px var(--glow), 0 0 24px 4.8px var(--glow)",
                  objectPosition: "center 15%",
                }}
              />
            </div>

            {/* Social Links Box */}
            <div
              className="flex w-[210px] sm:w-[240px] md:w-[270px] lg:w-[300px] justify-between gap-2 rounded-xl p-3 sm:p-4 glow-surface"
            >
              <a
                href="https://github.com/gfor-gour"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-foreground dark:text-primary flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg className="h-5 w-5 sm:h-7 sm:w-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/gour-gupal-talukder/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-foreground dark:text-primary flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg className="h-5 w-5 sm:h-7 sm:w-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.424-.103.249-.129.597-.129.946v5.435h-3.554s.05-8.807 0-9.726h3.554v1.375c.43-.664 1.199-1.61 2.920-1.61 2.135 0 3.733 1.39 3.733 4.377v5.584zM5.337 9.341c-1.144 0-1.915-.755-1.915-1.7 0-.955.771-1.7 1.956-1.7 1.184 0 1.915.745 1.933 1.7 0 .945-.749 1.7-1.974 1.7zm-1.6 11.111h3.2V9.726h-3.2v10.726zM22.224 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.224 0z"/>
                </svg>
              </a>
              <a
                href="https://x.com/this_is_Gour"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-foreground dark:text-primary flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg className="h-5 w-5 sm:h-7 sm:w-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.165-6.75-5.917 6.75h-3.31l7.73-8.835L2.818 2.25h6.6l4.759 6.236L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="mailto:gourgupaltalukder@gmail.com"
                className="flex-1 text-foreground dark:text-primary flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg className="h-5 w-5 sm:h-7 sm:w-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
