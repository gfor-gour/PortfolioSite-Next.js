"use client"

interface Experience {
  title: string
  company: string
  startDate: string
  endDate: string
  description: string[]
}

const experiences: Experience[] = [
  {
    title: "Intern Software Engineer",
    company: "ShellBeeHaken Ltd.",
    startDate: "Dec 2025",
    endDate: "May 2026",
    description: [
      "Developed and maintained full-stack web applications using modern technologies",
      "Collaborated with senior engineers to implement new features and fix bugs",
      "Participated in code reviews and contributed to improving code quality",
      "Worked on database optimization and API performance improvements",
    ],
  },
]

export default function ExperiencesPage() {
  return (
    <div className="container px-4 sm:px-6 lg:px-8">
      <section className="pt-4 sm:pt-8 md:pt-10 lg:pt-12 pb-8 sm:pb-10">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-2">
            Experiences
          </h1>
          {/* <span
            className="block w-full max-w-xs h-px"
            style={{
               background: "var(--glow)",
              boxShadow: "0 0 4.8px 1.2px var(--glow), 0 0 2.4px 0.6px var(--glow)",
            }}
          /> */}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Container */}
          <div className="flex gap-6 sm:gap-8 md:gap-12">
            {/* Left Side - Timeline */}
            <div className="relative flex flex-col items-center pt-2" style={{ minWidth: "80px" }}>
              {/* Vertical Line */}
              <div
                className="absolute top-0 bottom-0 w-px left-1/2 transform -translate-x-1/2"
                style={{
                  background: "linear-gradient(to bottom, var(--glow), transparent)",
                  boxShadow: "0 0 8px var(--glow)",
                }}
              />

              {/* Timeline Points */}
              {experiences.map((_, index) => (
                <div
                  key={index}
                  className="relative z-10 flex flex-col items-center"
                  style={{ marginBottom: index < experiences.length - 1 ? "200px" : "0" }}
                >
                  {/* Glow Point */}
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{
                      background: "var(--glow)",
                      boxShadow: "0 0 12px var(--glow), 0 0 24px var(--glow), inset 0 0 4px var(--glow)",
                      border: "2px solid var(--glow)",
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Right Side - Experience Content */}
            <div className="flex-1 pt-1">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="mb-40"
                >
                  {/* Date Range */}
                  <div className="text-sm sm:text-base font-semibold text-foreground/60 dark:text-gray-400 mb-3">
                    <span>{exp.startDate}</span>
                    <span className="mx-2">→</span>
                    <span>{exp.endDate}</span>
                  </div>

                  {/* Floating Content Card */}
                  <div
                    className="p-5 sm:p-6 md:p-7 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                    style={{
                      background: "rgba(var(--card-rgb), 0.5)",
                      border: "1px solid var(--glow)",
                      boxShadow: "0 0 8px 1px rgba(var(--glow-rgb), 0.3), inset 0 0 4px rgba(var(--glow-rgb), 0.1)",
                    }}
                  >
                    {/* Job Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground dark:text-white mb-1">
                      {exp.title}
                    </h3>

                    {/* Company Name */}
                    <p className="text-base sm:text-lg font-semibold text-foreground/80 dark:text-gray-300 mb-4">
                      {exp.company}
                    </p>

                    {/* Description */}
                    <ul className="space-y-2">
                      {exp.description.map((point, i) => (
                        <li key={i} className="flex gap-3 text-sm sm:text-base text-foreground/75 dark:text-gray-400">
                          <span className="text-glow flex-shrink-0 mt-1">▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
