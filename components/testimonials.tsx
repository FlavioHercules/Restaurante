"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Maria Clara Santos",
    role: "Empresária",
    content:
      "Uma experiência gastronômica incomparável! A picanha é simplesmente perfeita, e o atendimento é impecável. Já virou nosso restaurante favorito para ocasiões especiais.",
    rating: 5,
  },
  {
    name: "Roberto Almeida",
    role: "Médico",
    content:
      "Ambiente sofisticado e acolhedor. Os pratos são verdadeiras obras de arte, tanto no sabor quanto na apresentação. A carta de vinhos é excepcional.",
    rating: 5,
  },
  {
    name: "Ana Paula Ferreira",
    role: "Arquiteta",
    content:
      "Celebramos nosso aniversário de casamento aqui e foi perfeito! A equipe preparou tudo com muito carinho. Recomendo de olhos fechados.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-[0.3em] mb-4 block">
            Depoimentos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior recompensa. 
            Veja o que eles têm a dizer sobre suas experiências.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card border border-border p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div>
                <p className="font-serif text-lg font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-muted-foreground text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
