"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const stats = [
  { number: "15+", label: "Anos de Experiência" },
  { number: "50k+", label: "Clientes Satisfeitos" },
  { number: "12", label: "Prêmios" },
]

export function About() {
  return (
    <section id="sobre" className="py-24 px-4 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] lg:h-[650px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/gallery-1.png"
                alt="Ambiente premium"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-primary/15 blur-3xl rounded-full -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary text-sm uppercase tracking-[0.35em] mb-4 block">
              Nossa História
            </span>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
              Sobre o Site-Restaurante
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
              <p>
                Desde 2010, transformamos tradição em sofisticação, unindo a
                essência da brasa brasileira à alta gastronomia contemporânea.
              </p>

              <p>
                Cada corte é selecionado com rigor. Cada prato é finalizado com
                precisão. Cada detalhe do ambiente foi pensado para proporcionar
                uma experiência sensorial completa.
              </p>

              <p>
                Seja para celebrações especiais, encontros memoráveis ou jantares
                exclusivos, oferecemos muito mais que refeições — criamos momentos.
              </p>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                "Carnes Angus Certificadas",
                "Adega Premium",
                "Chefs Especialistas",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="
                    rounded-2xl
                    border border-border
                    bg-card/80
                    backdrop-blur-sm
                    p-5
                    hover:border-primary/40
                    hover:shadow-lg hover:shadow-primary/10
                    transition-all
                  "
                >
                  <span className="text-primary font-serif text-4xl font-semibold block">
                    {stat.number}
                  </span>
                  <span className="text-muted-foreground text-xs uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}