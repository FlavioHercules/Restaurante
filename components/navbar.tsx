"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contato", label: "Contato" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-primary/20 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled ? "h-16" : "h-20"
            }`}
          >
            {/* Logo */}
            <Link href="#inicio" className="group">
              <span className="font-serif text-2xl md:text-3xl font-semibold text-primary tracking-wide">
                Site-Restaurante
              </span>
              <div className="h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500" />
            </Link>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative text-foreground/80 hover:text-primary transition-colors uppercase tracking-wider text-sm"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-primary group-hover:w-full transition-all duration-300" />
                </Link>
              ))}

              <Link
                href="#reservas"
                className="
                  px-6 py-3 rounded-xl
                  bg-primary text-primary-foreground
                  text-sm uppercase tracking-wider
                  hover:scale-105 hover:shadow-lg hover:shadow-primary/30
                  transition-all duration-300
                "
              >
                Reservar Mesa
              </Link>
            </div>

            {/* Mobile button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
              className="
                fixed top-0 right-0 h-screen w-[80%]
                bg-background border-l border-primary/20
                z-50 md:hidden p-8
              "
            >
              <div className="flex justify-end mb-10">
                <button onClick={() => setIsOpen(false)}>
                  <X size={28} />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg uppercase tracking-wider text-foreground/80 hover:text-primary transition"
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  href="#reservas"
                  onClick={() => setIsOpen(false)}
                  className="
                    mt-6 text-center py-4 rounded-xl
                    bg-primary text-primary-foreground
                    uppercase tracking-wider
                  "
                >
                  Reservar Mesa
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}