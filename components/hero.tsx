"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-background" />
      </motion.div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        {/* Label */}
        <motion.span
          variants={item}
          className="text-primary text-sm md:text-base uppercase tracking-[0.3em] mb-6 block"
        >
          Experiência Gastronômica Premium
        </motion.span>

        {/* Title */}
        <motion.h1
          variants={item}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-6"
        >
          Site-Restaurante
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Onde a tradição encontra a sofisticação. Experimente carnes nobres
          preparadas com maestria, em um ambiente elegante e acolhedor.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#reservas"
            className="group relative bg-primary text-primary-foreground px-8 py-4 text-sm uppercase tracking-wider min-w-[200px] overflow-hidden"
          >
            <span className="relative z-10">Reservar Mesa</span>
            <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </Link>

          <Link
            href="#cardapio"
            className="border border-primary text-primary px-8 py-4 text-sm uppercase tracking-wider min-w-[200px] hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Ver Cardápio
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border border-primary/60 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4], y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}