"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

type Category = "entradas" | "principais" | "sobremesas" | "bebidas"

const categories: { id: Category; label: string }[] = [
  { id: "entradas", label: "Entradas" },
  { id: "principais", label: "Pratos Principais" },
  { id: "sobremesas", label: "Sobremesas" },
  { id: "bebidas", label: "Bebidas" },
]

const menuItems: Record<Category, {
  name: string
  description: string
  price: string
  image: string
}[]> = {
  entradas: [
    {
      name: "Carpaccio de Filé Mignon",
      description: "Finas fatias de filé mignon com rúcula, parmesão e redução balsâmica",
      price: "R$ 68,00",
      image: "/images/dish-2.png",
    },
    {
      name: "Burrata com Tomate Confit",
      description: "Queijo burrata italiano com tomates confitados, pesto e focaccia",
      price: "R$ 72,00",
      image: "/images/dish-6.png",
    },
    {
      name: "Camarões ao Alho",
      description: "Camarões salteados na manteiga com alho, pimenta e ervas frescas",
      price: "R$ 85,00",
      image: "/images/dish-5.png",
    },
  ],
  principais: [
    {
      name: "Picanha Premium 400g",
      description: "Corte nobre grelhado na brasa com batatas rústicas e chimichurri",
      price: "R$ 145,00",
      image: "/images/dish-1.png",
    },
    {
      name: "Filé Mignon ao Molho Madeira",
      description: "Medalhões de filé com molho madeira, arroz cremoso e legumes",
      price: "R$ 158,00",
      image: "/images/dish-1.png",
    },
    {
      name: "Salmão Grelhado",
      description: "Filé de salmão com crosta de ervas, risoto de limão siciliano",
      price: "R$ 128,00",
      image: "/images/dish-4.png",
    },
    {
      name: "Costela no Bafo",
      description: "Costela bovina cozida lentamente por 12 horas com especiarias",
      price: "R$ 165,00",
      image: "/images/dish-1.png",
    },
    {
      name: "Lagosta Grelhada",
      description: "Lagosta fresca grelhada na manteiga de ervas com aspargos",
      price: "R$ 285,00",
      image: "/images/dish-5.png",
    },
  ],
  sobremesas: [
    {
      name: "Petit Gâteau",
      description: "Bolo de chocolate com centro cremoso, sorvete de baunilha e ouro",
      price: "R$ 42,00",
      image: "/images/dish-3.png",
    },
    {
      name: "Crème Brûlée",
      description: "Creme francês de baunilha com casquinha caramelizada",
      price: "R$ 38,00",
      image: "/images/dish-3.png",
    },
    {
      name: "Tiramisù",
      description: "Clássico italiano com mascarpone, café espresso e cacau",
      price: "R$ 45,00",
      image: "/images/dish-3.png",
    },
  ],
  bebidas: [
    {
      name: "Vinho Tinto Reserva",
      description: "Malbec argentino - garrafa 750ml",
      price: "R$ 189,00",
      image: "/images/gallery-2.png",
    },
    {
      name: "Vinho Branco Chardonnay",
      description: "Chileno safra especial - garrafa 750ml",
      price: "R$ 165,00",
      image: "/images/gallery-2.png",
    },
    {
      name: "Whisky 12 Anos",
      description: "Single malt escocês - dose 50ml",
      price: "R$ 48,00",
      image: "/images/gallery-2.png",
    },
    {
      name: "Água com Gás Premium",
      description: "Garrafa 500ml",
      price: "R$ 12,00",
      image: "/images/gallery-2.png",
    },
  ],
}

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("entradas")

  return (
    <section id="cardapio" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-[0.3em] mb-4 block">
            Nossa Seleção
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Cardápio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ingredientes selecionados e preparos artesanais para uma experiência 
            gastronômica única.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 text-sm uppercase tracking-wider transition-all duration-200 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-foreground/70 hover:border-primary hover:text-primary"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {menuItems[activeCategory].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex gap-4 p-4 bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="relative w-24 h-24 shrink-0 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    {item.name}
                  </h3>
                  <span className="text-primary font-semibold shrink-0">
                    {item.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
