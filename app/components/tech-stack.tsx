import Image from 'next/image'

export default function TechStack() {
  const technologies = [
    // First Row - Frontend & Core
    [
      { name: 'React', src: '/react.svg', darkMode: true },
      { name: 'Next.js', src: '/next.svg', darkMode: true },
      { name: 'TypeScript', src: '/typescript.svg', darkMode: true },
      { name: 'TailwindCSS', src: '/tailwind.svg' },
      { name: 'Git', src: '/git.svg', darkMode: true },
      { name: 'Node.js', src: '/node.svg', darkMode: true }
    ],
    // Second Row - Backend & Languages
    [
      { name: 'MongoDB', src: '/mongodb.svg' },
      { name: 'PostgreSQL', src: '/postgresql.svg' },
      { name: 'Express.js', src: '/express.svg' },
      { name: 'C++', src: '/cpp.svg' },
      { name: 'Python', src: '/python.svg' },
      { name: 'Firebase', src: '/firebase.svg' }
    ]
  ]

  return (
    <div className="flex flex-col items-center gap-12">
      {technologies.map((row, rowIndex) => (
        <div 
          key={rowIndex}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-16"
        >
          {row.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-3 transition-transform hover:scale-110"
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                <Image
                  src={tech.src}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className={`w-10 h-10 sm:w-12 sm:h-12 object-contain ${
                    tech.darkMode ? 'dark:invert dark:brightness-175' : ''
                  }`}
                />
              </div>
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
