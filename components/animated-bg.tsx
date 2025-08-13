"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function AnimatedBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    function setCanvasSize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()

  const particles: Particle[] = []
  const particleCount = 220 // Increased density

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.2 + 0.3 // Tiny bubbles (0.3 to 1.5)
        this.speedX = Math.random() * 1.2 - 0.6 // Slightly slower movement
        this.speedY = Math.random() * 1.2 - 0.6
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        let colorList: string[]
        if (theme === "dark") {
          colorList = [
            "rgba(255,255,255,0.96)",
            "rgba(255,255,255,0.82)",
            "rgba(255,255,255,0.68)"
          ]
        } else {
          colorList = [
            "rgba(14, 13, 13, 0.84)",
            "rgba(41, 39, 39, 0.92)",
            "rgba(44, 44, 44, 0.93)"
          ]
        }
        // Pick a random color for each bubble
        ctx.shadowColor = colorList[Math.floor(Math.random() * colorList.length)]
        ctx.shadowBlur = 10 // Slightly more shine
        ctx.fillStyle = colorList[Math.floor(Math.random() * colorList.length)]
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0 // Reset shadow
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const particle of particles) {
        particle.update()
        particle.draw()
      }
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      setCanvasSize()
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] h-full w-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
