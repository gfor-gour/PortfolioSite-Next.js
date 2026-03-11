"use client"

import ProjectCard from "@/app/components/project-card"

const projects = [
  {
    title: "Personality Detection Using Machine Learning",
    description:
      "Developed a machine learning system using Random Forest to predict personality traits from behavioral data with 91% accuracy. Improved feature engineering and data preprocessing, enhancing the F1 score by 20% for reliable real-time predictions.",
    link: "https://github.com/Amitsharma2468/personalitydetection",
    liveLink: "https://personalitydetection.vercel.app/",
    tags: [
      "Python",
      " scikit-learn",
      " Flask",
      "Next.js",
      "Pandas",
      "NumPy",
      "joblib",
    ],
  },
  {
    title: "Local Household Service Provider",
    description:
      "Designed and developed a full-stack Local Household Service Provider platform with booking flows, API integration, payment gateway, Nodemailer notifications, and AI chatbot support.",
    link: "https://github.com/gfor-gour/AI-Integrated-Local-Service-Provider-Platform-Project_350",
    liveLink: "https://service-connect-350.vercel.app/",
    tags: ["Next.js", "Express.js", "MongoDB", "TypeScript", "TailwindCSS"],
  },
  {
    title: "IICT Library Management",
    description:
      "Developed a full-stack IICT Library Management system with catalog search, lending history, authentication, and real-time book tracking using React, TypeScript, Node.js, and Express.",
    link: "https://github.com/mehedi-hasan-2302/IICT-Library-Management",
    liveLink: "https://iict-library.vercel.app/",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "TypeScript"],
  },
  {
    title: "Financial Document Analysis using RAG",
    description:
      "Built a RAG pipeline combining text and structured financial data, achieving 100% retrieval relevance and query responses under 2 seconds using FAISS-based similarity search and hybrid retrieval.",
    link: "https://github.com/gfor-gour/RAG-pipeline",
    tags: [
      "Python",
      "pdfplumber",
      "all-MiniLM-L6-v2",
      "DistilBERT-base-cased-distilled-SQuAD",
      "FAISS",
      "pandas",
      "NLTK",
      "NumPy",
    ],
  },
  {
    title: "Green Mind App",
    description:
      "Independently developed a Flutter-based mobile app for SUST psychiatric appointments with secure Firebase authentication, replacing manual booking with an intuitive scheduling system.",
    link: "https://github.com/gfor-gour/Green-Mind-App",
    tags: ["Flutter", "Firebase", "Dart"],
  },
  {
    title: "Run and Survive-2D C++ Game",
    description:
      "Developed a 2D side-scrolling survival game in C++ with smooth obstacle mechanics, custom rendering, and responsive jump logic as a first-year team project.",
    link: "https://github.com/gfor-gour/GameProject-1-2/tree/master",
    tags: ["C++", "Igraphics"],
  },
  {
    title: "Custome PhoneCover E-commerce",
    description:
      "Built a custom phone cover e-commerce site using Next.js, TypeScript, Stripe, and Prisma—with live design preview and payment integration.",
    link: "https://github.com/gfor-gour/EcomProject-by-Gour",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
  },
  {
    title: "Fly and Live Forever- 2D Java Game",
    description:
      "Developed Fly and Live Forever, a 2D runner game using Java LibGDX, where a toy plane navigates dynamic obstacles to survive as long as possible.",
    link: "https://github.com/gfor-gour/2-1-JavaGame-Project?tab=readme-ov-file",
    tags: ["java", "LibGDX"],
  },
]

export default function ProjectsPage() {
  return (
    <main className="container px-4 sm:px-6 lg:px-8">
      <section className="py-8 sm:py-12 md:py-24 lg:py-32">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-center mb-8 sm:mb-12">
          <span className="text-foreground">
            Development{" "}
          </span>
          <span className="text-foreground">Archive</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((p) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              description={p.description}
              link={p.link}
              liveLink={p.liveLink}
              tags={p.tags}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
