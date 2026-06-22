"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  { src: "/images/gallery-1.png", alt: "Interior elegante", category: "Ambiente" },
  { src: "/images/dish-1.png", alt: "Picanha premium", category: "Pratos" },
  { src: "/images/gallery-2.png", alt: "Bar", category: "Bar" },
  { src: "/images/dish-2.png", alt: "Carpaccio", category: "Pratos" },
  { src: "/images/gallery-3.png", alt: "Chef", category: "Cozinha" },
  { src: "/images/gallery-4.png", alt: "Adega", category: "Vinhos" },
  { src: "/images/dish-3.png", alt: "Sobremesa", category: "Sobremesas" },
  { src: "/images/dish-4.png", alt: "Salmão", category: "Pratos" },
]

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const nextImage = () => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex + 1) % galleryImages.length)
  }

  const prevImage = () => {
    if (selectedIndex === null) return
    setSelectedIndex(
      selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1
    )
  }

  return (
    <section id="galeria" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-[0.35em] mb-4 block">
            Momentos
          </span>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
            Galeria
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Conheça nosso ambiente, nossa cozinha e os pratos que tornam cada
            visita memorável.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              onClick={() => setSelectedIndex(index)}
              className={`
                relative rounded-2xl overflow-hidden cursor-pointer group
                hover:shadow-2xl hover:shadow-primary/10
                transition-all duration-500
                ${
                  index === 0 || index === 5
                    ? "col-span-2 row-span-2 h-80 md:h-auto"
                    : "h-40 md:h-52"
                }
              `}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="
                  object-cover
                  group-hover:scale-110
                  group-hover:brightness-110
                  transition-all duration-700
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition" />

              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-primary/30 text-primary text-xs uppercase tracking-widest">
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 z-20"
            >
              <X size={32} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
              className="absolute left-6 z-20"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
              className="absolute right-6 z-20"
            >
              <ChevronRight size={40} />
            </button>

            <motion.div
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              className="relative w-full max-w-6xl h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                fill
                className="object-contain rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}