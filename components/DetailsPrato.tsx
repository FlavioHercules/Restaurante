"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"

interface Dish {
  name: string
  image: string
  price: string
  description: string
  ingredients: string[]
  pairing: string
}

interface DetailsPratoProps {
  dish: Dish | null
  isOpen: boolean
  onClose: () => void
}

export default function DetailsPrato({
  dish,
  isOpen,
  onClose,
}: DetailsPratoProps) {
  return (
    <AnimatePresence>
      {isOpen && dish && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl bg-card border border-primary/20 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-20 p-2 rounded-full bg-black/50 hover:bg-black/70 transition"
            >
              <X size={20} />
            </button>

            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative min-h-[350px] md:min-h-[600px]">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 md:p-10">
                <span className="text-primary uppercase tracking-[0.25em] text-xs">
                  Chef Special
                </span>

                <h2 className="font-serif text-4xl mt-3 mb-3">
                  {dish.name}
                </h2>

                <span className="text-primary text-2xl font-semibold">
                  {dish.price}
                </span>

                <p className="text-muted-foreground leading-relaxed mt-6">
                  {dish.description}
                </p>

                <div className="mt-8">
                  <h3 className="font-semibold text-lg mb-3">Ingredientes</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {dish.ingredients.map((ingredient) => (
                      <li key={ingredient}>• {ingredient}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 p-4 rounded-2xl bg-primary/10 border border-primary/20">
                  <h4 className="font-semibold mb-2">Harmonização</h4>
                  <p className="text-muted-foreground">{dish.pairing}</p>
                </div>

                <button
                  className="
                    mt-8
                    w-full
                    py-4
                    rounded-xl
                    bg-primary
                    text-primary-foreground
                    uppercase
                    tracking-widest
                    hover:opacity-90
                    transition
                  "
                >
                  Pedir Agora
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}