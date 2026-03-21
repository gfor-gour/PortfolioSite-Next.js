"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import "./globals.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"
import SiteLayout from "./components/site-layout"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider 
            attribute="class" 
            defaultTheme="light" 
            enableSystem={false}
            disableTransitionOnChange
          >
            <SiteLayout>{children}</SiteLayout>
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
