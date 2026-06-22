"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import DetailsPrato from "./DetailsPrato"

const highlights = [
  {
    name: "Picanha Premium",
    badge: "Chef's Choice",
    description:
      "Corte nobre grelhado na brasa, servido com batatas rústicas e molho chimichurri.",
    price: "R$ 145,00",
    image: "/images/dish-1.png",
    ingredients: [
      "Picanha Angus",
      "Batatas rústicas",
      "Chimichurri artesanal",
      "Flor de sal",
    ],
    pairing: "🍷 Malbec Reserva",
  },
  {
    name: "Carpaccio de Filé",
    badge: "Mais Pedido",
    description:
      "Finas fatias de filé mignon com rúcula, parmesão e redução de balsâmico.",
    price: "R$ 68,00",
    image: "/images/dish-2.png",
    ingredients: [
      "Filé mignon",
      "Rúcula fresca",
      "Parmesão",
      "Molho balsâmico",
    ],
    pairing: "🍷 Pinot Noir",
  },
  {
    name: "Petit Gâteau",
    badge: "Signature Dessert",
    description:
      "Bolo de chocolate com centro cremoso, sorvete de baunilha e folha de ouro.",
    price: "R$ 42,00",
    image: "/images/dish-3.png",
    ingredients: [
      "Chocolate belga",
      "Sorvete de baunilha",
      "Folha de ouro",
    ],
    pairing: "☕ Espresso Premium",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
}

export function Highlights() {
  type Dish = (typeof highlights)[number]
const [selectedDish, setSelectedDish] = useState<Dish | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  function openDish(dish: any) {
    setSelectedDish(dish)
    setIsOpen(true)
  }

  return (
    <section className="py-24 px-4 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-[0.35em] mb-4 block">
            Nossos Destaques
          </span>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-5">
            Pratos da Casa
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Selecionamos os pratos favoritos dos nossos clientes para oferecer
            uma experiência gastronômica memorável.
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
              onClick={() => openDish(dish)}
              className="
                group cursor-pointer
                bg-card/80
                backdrop-blur-sm
                border border-border
                rounded-2xl
                overflow-hidden
                hover:border-primary/40
                hover:shadow-2xl
                hover:shadow-primary/10
                transition-all duration-500
              "
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="
                    object-cover
                    group-hover:scale-110
                    group-hover:rotate-1
                    transition-transform duration-700
                  "
                />

                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/20
                    to-transparent
                    group-hover:from-black/60
                    transition-all duration-500
                  "
                />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-primary/30 text-primary text-xs uppercase tracking-widest">
                    {dish.badge}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-serif text-2xl font-semibold text-foreground">
                    {dish.name}
                  </h3>

                  <span className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary font-semibold text-sm whitespace-nowrap">
                    {dish.price}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {dish.description}
                </p>

                <button
                  className="
                    w-full
                    py-3
                    rounded-xl
                    border border-primary/30
                    text-primary
                    uppercase
                    tracking-widest
                    text-sm
                    hover:bg-primary
                    hover:text-primary-foreground
                    transition-all duration-300
                  "
                >
                  Ver Detalhes →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <DetailsPrato
        dish={selectedDish}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </section>
  )
}