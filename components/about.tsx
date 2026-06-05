"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function About() {
  return (
    <section id="sobre" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] lg:h-[600px]">
              <Image
                src="/images/about-bg.png"
                alt="Ingredientes premium do Sabor & Brasa"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-primary -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary text-sm uppercase tracking-[0.3em] mb-4 block">
              Nossa História
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Sobre o Sabor & Brasa
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Fundado em 2010, o Sabor & Brasa nasceu da paixão por unir a 
                tradição das churrasqueiras brasileiras com a sofisticação da 
                alta gastronomia. Nossa missão é proporcionar momentos 
                inesquecíveis através de sabores autênticos.
              </p>
              <p>
                Selecionamos as melhores carnes de produtores certificados, 
                garantindo qualidade e procedência em cada corte. Nossa equipe de 
                chefs altamente qualificados prepara cada prato com dedicação e 
                técnica apurada.
              </p>
              <p>
                O ambiente foi cuidadosamente projetado para oferecer conforto e 
                elegância, criando o cenário perfeito para celebrações especiais, 
                jantares de negócios ou momentos a dois.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-border">
              <div>
                <span className="text-primary font-serif text-4xl font-semibold block">15+</span>
                <span className="text-muted-foreground text-sm uppercase tracking-wider">
                  Anos de Experiência
                </span>
              </div>
              <div>
                <span className="text-primary font-serif text-4xl font-semibold block">50k+</span>
                <span className="text-muted-foreground text-sm uppercase tracking-wider">
                  Clientes Satisfeitos
                </span>
              </div>
              <div>
                <span className="text-primary font-serif text-4xl font-semibold block">12</span>
                <span className="text-muted-foreground text-sm uppercase tracking-wider">
                  Prêmios Gastronômicos
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
