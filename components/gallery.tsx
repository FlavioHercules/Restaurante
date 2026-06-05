"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "/images/gallery-1.png",
    alt: "Interior elegante do restaurante",
    category: "Ambiente",
  },
  {
    src: "/images/dish-1.png",
    alt: "Picanha grelhada premium",
    category: "Pratos",
  },
  {
    src: "/images/gallery-2.png",
    alt: "Bar do restaurante",
    category: "Bar",
  },
  {
    src: "/images/dish-2.png",
    alt: "Carpaccio de filé mignon",
    category: "Pratos",
  },
  {
    src: "/images/gallery-3.png",
    alt: "Chef preparando pratos",
    category: "Cozinha",
  },
  {
    src: "/images/gallery-4.png",
    alt: "Adega de vinhos",
    category: "Vinhos",
  },
  {
    src: "/images/dish-3.png",
    alt: "Sobremesa petit gâteau",
    category: "Sobremesas",
  },
  {
    src: "/images/dish-4.png",
    alt: "Salmão grelhado",
    category: "Pratos",
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="galeria" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-[0.3em] mb-4 block">
            Momentos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Galeria
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça nosso ambiente e nossos pratos através de imagens que 
            capturam a essência da experiência Sabor & Brasa.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative overflow-hidden cursor-pointer group ${
                index === 0 || index === 5 ? "col-span-2 row-span-2 h-80 md:h-auto" : "h-40 md:h-52"
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm uppercase tracking-wider">
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Fechar imagem"
          >
            <X size={32} />
          </button>
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={selectedImage}
              alt="Imagem ampliada"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      )}
    </section>
  )
}
