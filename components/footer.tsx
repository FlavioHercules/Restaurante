"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-20">

        <div className="grid lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link href="#inicio" className="inline-block mb-4">
              <span className="font-serif text-3xl font-semibold text-primary">
                Site-Restaurante
              </span>
            </Link>

            <p className="text-muted-foreground leading-relaxed max-w-md mb-8">
              Uma experiência gastronômica inspirada na alta cozinha contemporânea,
              onde cada prato é tratado como uma composição única de técnica, aroma e memória.
            </p>

            <div className="text-sm text-muted-foreground space-y-2">
              <p>
                Av. Aurora, 1088 — Distrito Gastronômico
              </p>
              <p>
                São Paulo • Brasil
              </p>
            </div>
          </motion.div>

          {/* NAV */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-lg font-semibold mb-6">
              Navegação
            </h3>

            <ul className="space-y-3">
              {[
                { href: "#inicio", label: "Início" },
                { href: "#cardapio", label: "Cardápio" },
                { href: "#sobre", label: "Sobre" },
                { href: "#galeria", label: "Galeria" },
                { href: "#reservas", label: "Reservas" },
                { href: "#contato", label: "Contato" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* HOURS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-lg font-semibold mb-6">
              Funcionamento
            </h3>

            <ul className="space-y-3 text-muted-foreground">
              <li className="flex justify-between">
                <span>Terça - Quinta</span>
                <span>12h — 23h</span>
              </li>
              <li className="flex justify-between">
                <span>Sexta - Sábado</span>
                <span>12h — 00h</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo</span>
                <span>12h — 17h</span>
              </li>
              <li className="flex justify-between">
                <span>Segunda</span>
                <span className="text-primary">Fechado</span>
              </li>
            </ul>

            <p className="text-xs text-muted-foreground mt-6 leading-relaxed">
              Reservas recomendadas com antecedência para experiências em horários nobres.
            </p>
          </motion.div>

        </div>

        {/* BOTTOM */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {new Date().getFullYear()} Site-Restaurante. Experiência gastronômica fictícia para demonstração.
          </p>

          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacidade
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Termos
            </Link>
          </div>

        </div>

      </div>
    </footer>
  )
}