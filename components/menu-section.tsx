"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

type Category = "entradas" | "principais" | "sobremesas" | "bebidas"

const categories = [
  { id: "entradas", label: "Entradas" },
  { id: "principais", label: "Pratos Principais" },
  { id: "sobremesas", label: "Sobremesas" },
  { id: "bebidas", label: "Bebidas" },
] as const

const menuItems = {
  entradas: [
    {
      name: "Carpaccio de Filé Mignon",
      badge: "Bestseller",
      description:
        "Finas fatias de filé mignon com rúcula, parmesão e redução balsâmica.",
      price: "R$ 68,00",
      image: "/images/dish-2.png",
    },
    {
      name: "Burrata com Tomate Confit",
      badge: "Premium",
      description:
        "Queijo burrata italiano com tomates confitados, pesto e focaccia.",
      price: "R$ 72,00",
      image: "/images/dish-6.png",
    },
  ],
  principais: [
    {
      name: "Picanha Premium 400g",
      badge: "Chef’s Choice",
      description:
        "Corte nobre grelhado na brasa com batatas rústicas e chimichurri.",
      price: "R$ 145,00",
      image: "/images/dish-1.png",
    },
    {
      name: "Salmão Grelhado",
      badge: "Novo",
      description:
        "Filé de salmão com crosta de ervas e risoto de limão siciliano.",
      price: "R$ 128,00",
      image: "/images/dish-4.png",
    },
  ],
  sobremesas: [
    {
      name: "Petit Gâteau",
      badge: "Signature",
      description:
        "Chocolate com centro cremoso e sorvete de baunilha.",
      price: "R$ 42,00",
      image: "/images/dish-3.png",
    },
  ],
  bebidas: [
    {
      name: "Vinho Tinto Reserva",
      badge: "Reserva",
      description: "Malbec argentino - garrafa 750ml.",
      price: "R$ 189,00",
      image: "/images/gallery-2.png",
    },
  ],
}

export function MenuSection() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("entradas")

  return (
    <section id="cardapio" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-[0.35em] mb-4 block">
            Nossa Seleção
          </span>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
            Cardápio
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ingredientes selecionados e preparos artesanais para uma
            experiência gastronômica única.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-7 py-3 rounded-full text-sm uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "border border-border text-foreground/70 hover:border-primary hover:text-primary"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {menuItems[activeCategory].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="
                group rounded-2xl
                bg-card/80 backdrop-blur-md
                border border-border
                p-5
                hover:border-primary/40
                hover:shadow-2xl hover:shadow-primary/10
                transition-all duration-500
              "
            >
              <div className="flex gap-5">
                <div className="relative w-32 h-32 rounded-2xl overflow-hidden shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="flex-1">
                  <span className="text-primary text-xs uppercase tracking-widest">
                    {item.badge}
                  </span>

                  <div className="flex items-start justify-between gap-3 mt-2 mb-3">
                    <h3 className="font-serif text-xl font-semibold">
                      {item.name}
                    </h3>

                    <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <button className="text-primary text-sm uppercase tracking-wider hover:translate-x-1 transition-transform">
                    Ver detalhes →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}