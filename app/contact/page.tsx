"use client"

import Image from "next/image"
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
  MapPinIcon,
  PhoneIcon,
  FacebookIcon,
} from "lucide-react"

export default function ContactPage() {
  return (
    <main className="container px-4 sm:px-6 lg:px-8">
      <section className="py-8 md:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tighter text-foreground dark:text-foreground sm:text-4xl md:text-5xl mb-8 text-center">
            <span className="text-foreground dark:text-foreground">
              Let&apos;s Connect
            </span>
          </h2>

          <div className="flex flex-col items-center space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div
                className="p-6 rounded-xl backdrop-blur transition-all duration-300 hover:scale-105 glow-surface"
              >
                <div className="flex items-center gap-4">
                  <MapPinIcon className="w-6 h-6 text-foreground dark:text-foreground" />
                  <div>
                    <h3 className="font-semibold text-foreground dark:text-foreground">
                      Location
                    </h3>
                    <p className="text-foreground dark:text-foreground/80">
                      Sylhet, Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="tel:+8801636022762"
                className="p-6 rounded-xl backdrop-blur transition-all duration-300 hover:scale-105 glow-surface"
              >
                <div className="flex items-center gap-4">
                  <PhoneIcon className="w-6 h-6 text-foreground dark:text-foreground" />
                  <div>
                    <h3 className="font-semibold text-foreground dark:text-foreground">
                      Phone
                    </h3>
                    <p className="text-foreground dark:text-foreground/80">
                      +880 1746-244930
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="w-full space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="mailto:gourgupaltalukder@gmail.com"
                  className="flex items-center gap-4 p-6 rounded-xl backdrop-blur transition-all duration-300 hover:scale-105 glow-surface"
                >
                  <MailIcon className="w-6 h-6 text-foreground dark:text-foreground" />
                  <div>
                    <h3 className="font-semibold text-foreground dark:text-foreground">
                      Email
                    </h3>
                    <p className="text-foreground dark:text-foreground/80">
                      gourgupaltalukder@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/gfor-gour"
                  className="flex items-center gap-4 p-6 rounded-xl backdrop-blur transition-all duration-300 hover:scale-105 glow-surface"
                >
                  <GithubIcon className="w-6 h-6 text-foreground dark:text-foreground" />
                  <div>
                    <h3 className="font-semibold text-foreground dark:text-foreground">
                      GitHub
                    </h3>
                    <p className="text-foreground dark:text-foreground/80">
                      gfor-gour
                    </p>
                  </div>
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    name: "LinkedIn",
                    icon: <LinkedinIcon className="w-6 h-6" />,
                    href: "https://www.linkedin.com/in/gour-gupal-talukder/",
                    color: "text-blue-600 dark:text-blue-400",
                  },
                  {
                    name: "LeetCode",
                    icon: (
                      <Image
                        src="/leetcode.svg"
                        alt="LeetCode"
                        width={24}
                        height={24}
                        className="dark:invert brightness-0 dark:brightness-200"
                      />
                    ),
                    href: "https://leetcode.com/u/g_for_gour/",
                    color: "text-gray-800 dark:text-gray-200",
                  },
                  {
                    name: "X (Twitter)",
                    icon: <TwitterIcon className="w-6 h-6" />,
                    href: "https://x.com/this_is_Gour",
                    color: "text-gray-800 dark:text-gray-200",
                  },
                  {
                    name: "Facebook",
                    icon: <FacebookIcon className="w-6 h-6" />,
                    href: "https://www.facebook.com/gour.talukder37/",
                    color: "text-blue-600 dark:text-blue-400",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-3 p-4 rounded-xl backdrop-blur transition-all duration-300 hover:scale-105 glow-surface ${social.color}`}
                  >
                    {social.icon}
                    <span className="font-medium text-foreground dark:text-foreground">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-6 text-center">
                <p className="text-lg md:text-xl font-medium text-foreground dark:text-foreground">
                  Feel free to reach out for collaborations or just to say hi!
                </p>
                <p className="text-base md:text-lg text-foreground/90 dark:text-foreground/90 mt-2">
                  I&apos;m always open to discussing new projects and opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
