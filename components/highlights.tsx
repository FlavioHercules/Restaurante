"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const highlights = [
  {
    name: "Picanha Premium",
    description: "Corte nobre grelhado na brasa, servido com batatas rústicas e molho chimichurri",
    price: "R$ 145,00",
    image: "/images/dish-1.png",
  },
  {
    name: "Carpaccio de Filé",
    description: "Finas fatias de filé mignon com rúcula, parmesão e redução de balsâmico",
    price: "R$ 68,00",
    image: "/images/dish-2.png",
  },
  {
    name: "Petit Gâteau",
    description: "Bolo de chocolate com centro cremoso, sorvete de baunilha e folha de ouro",
    price: "R$ 42,00",
    image: "/images/dish-3.png",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function Highlights() {
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
            Nossos Destaques
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Pratos da Casa
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Selecionamos os favoritos dos nossos clientes para você experimentar 
            o melhor da nossa culinária.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {highlights.map((dish) => (
            <motion.div
              key={dish.name}
              variants={itemVariants}
              className="group bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {dish.name}
                  </h3>
                  <span className="text-primary font-semibold">{dish.price}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
