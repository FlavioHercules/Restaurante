"use client"

import { useEffect } from "react"
import gsap from "gsap"

export function CursorFollower() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor-follower") as HTMLDivElement

    const move = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.4,
        ease: "power3.out",
      })
    }

    window.addEventListener("mousemove", move)

    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <div className="cursor-follower fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference" />
  )
}