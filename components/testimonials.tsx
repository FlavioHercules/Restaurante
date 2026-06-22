"use client"

import { motion } from "framer-motion"
import { Star, Quote, User } from "lucide-react"

const testimonials = [
  {
    label: "Cliente Premium",
    experience: "Jantar Executivo",
    content:
      "Uma experiência gastronômica impecável. Carnes extremamente macias, apresentação refinada e atendimento acima das expectativas.",
    rating: 5,
  },
  {
    label: "Casal Cliente",
    experience: "Ocasião Especial",
    content:
      "Ambiente sofisticado e acolhedor. Cada prato impressiona no sabor e nos detalhes. Um lugar memorável para celebrar momentos importantes.",
    rating: 5,
  },
  {
    label: "Cliente Verificado",
    experience: "Experiência Completa",
    content:
      "Da entrada à sobremesa, tudo foi perfeito. A harmonização com vinhos elevou ainda mais a experiência gastronômica.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 px-4 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-[0.35em] mb-4 block">
            Depoimentos
          </span>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
            Experiências Memoráveis
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Cada visita é pensada para proporcionar momentos únicos e uma
            experiência gastronômica inesquecível.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.label}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.18 }}
              whileHover={{ y: -8 }}
              className="
                relative
                rounded-3xl
                bg-card/80
                backdrop-blur-md
                border border-border
                p-8
                overflow-hidden
                hover:border-primary/40
                hover:shadow-2xl
                hover:shadow-primary/10
                transition-all duration-500
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-transparent pointer-events-none" />

              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/15" />

              {/* Avatar */}
              <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                <User className="w-6 h-6 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 leading-relaxed mb-7 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Footer */}
              <div>
                <p className="font-serif text-xl font-semibold text-foreground">
                  {testimonial.label}
                </p>
                <p className="text-primary text-sm tracking-wide">
                  {testimonial.experience}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}