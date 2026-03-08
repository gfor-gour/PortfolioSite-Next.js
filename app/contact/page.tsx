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

const glowingCardStyle = {
  border: "2px solid var(--glow)",
  boxShadow: "0 0 8px 2px var(--glow), 0 0 4px 1px var(--glow)",
  background: "transparent",
}

export default function ContactPage() {
  return (
    <main className="container px-4 sm:px-6 lg:px-8">
      <section className="py-12 md:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tighter text-black dark:text-primary sm:text-4xl md:text-5xl mb-12 text-center">
            <span className="text-[#2F4F4F] dark:text-violet-400">
              Let&apos;s Connect
            </span>
          </h2>

          <div className="flex flex-col items-center space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div
                className="p-6 rounded-xl backdrop-blur transition-all duration-300 hover:scale-105"
                style={{ ...glowingCardStyle }}
              >
                <div className="flex items-center gap-4">
                  <MapPinIcon className="w-6 h-6 text-[#2F4F4F] dark:text-violet-400" />
                  <div>
                    <h3 className="font-semibold text-[#2F4F4F] dark:text-primary">
                      Location
                    </h3>
                    <p className="text-[#2F4F4F] dark:text-gray-300">
                      Sylhet, Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="tel:+8801746244930"
                className="p-6 rounded-xl backdrop-blur transition-all duration-300 hover:scale-105"
                style={{ ...glowingCardStyle }}
              >
                <div className="flex items-center gap-4">
                  <PhoneIcon className="w-6 h-6 text-[#2F4F4F] dark:text-violet-400" />
                  <div>
                    <h3 className="font-semibold text-[#2F4F4F] dark:text-primary">
                      Phone
                    </h3>
                    <p className="text-[#2F4F4F] dark:text-gray-300">
                      +880 1746-244930
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="w-full space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="mailto:gourgupaltalukder@gmail.com"
                  className="flex items-center gap-4 p-6 rounded-xl backdrop-blur transition-all duration-300 hover:scale-105"
                  style={{ ...glowingCardStyle }}
                >
                  <MailIcon className="w-6 h-6 text-[#2F4F4F] dark:text-violet-400" />
                  <div>
                    <h3 className="font-semibold text-[#2F4F4F] dark:text-primary">
                      Email
                    </h3>
                    <p className="text-[#2F4F4F] dark:text-gray-300">
                      gourgupaltalukder@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/gfor-gour"
                  className="flex items-center gap-4 p-6 rounded-xl backdrop-blur transition-all duration-300 hover:scale-105"
                  style={{ ...glowingCardStyle }}
                >
                  <GithubIcon className="w-6 h-6 text-[#2F4F4F] dark:text-violet-400" />
                  <div>
                    <h3 className="font-semibold text-[#2F4F4F] dark:text-primary">
                      GitHub
                    </h3>
                    <p className="text-[#2F4F4F] dark:text-gray-300">
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
                    className={`flex items-center justify-center gap-3 p-4 rounded-xl backdrop-blur transition-all duration-300 hover:scale-105 ${social.color}`}
                    style={{ ...glowingCardStyle }}
                  >
                    {social.icon}
                    <span className="font-medium text-[#2F4F4F] dark:text-primary">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>

              <div
                className="mt-8 p-6 rounded-xl backdrop-blur"
                style={{ ...glowingCardStyle }}
              >
                <p className="text-center text-lg md:text-xl font-medium text-[#2F4F4F] dark:text-violet-700">
                  Feel free to reach out for collaborations or just to say hi!
                  <br />
                  <span className="text-base md:text-lg text-[#2F4F4F] dark:text-violet-400/90">
                    I&apos;m always open to discussing new projects and
                    opportunities.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
