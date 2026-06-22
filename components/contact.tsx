"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react"

export function Contact() {
  return (
    <section id="contato" className="py-28 px-4 bg-secondary/20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-[0.35em] block mb-4">
            Contato
          </span>

          <h2 className="font-serif text-4xl md:text-6xl font-semibold mb-4">
            Fale Conosco
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Atendimento reservado para reservas, eventos privados e experiências gastronômicas exclusivas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* VISIT EXPERIENCE (novo destaque) */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            className="
              lg:col-span-1
              rounded-3xl
              bg-card/70
              backdrop-blur-xl
              border border-primary/20
              p-8
            "
          >
            <h3 className="font-serif text-2xl mb-4">
              Visite a Aurora Prime
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Localizada em um ambiente discreto no Distrito Gastronômico de São Paulo,
              a Aurora Prime foi projetada para oferecer privacidade, silêncio e uma
              experiência sensorial completa.
            </p>

            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex gap-3">
                <MapPin className="text-primary" />
                <span>
                  Av. Aurora, 1088 — SP
                </span>
              </div>

              <div className="flex gap-3">
                <Clock className="text-primary" />
                <span>
                  Ter a Dom • 12h às 23h
                </span>
              </div>
            </div>

            <button className="mt-6 w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-xl hover:scale-[1.02] transition">
              Reservar Agora <ArrowRight size={16} />
            </button>
          </motion.div>

          {/* CONTACT CARDS */}
          <motion.div className="lg:col-span-2 grid md:grid-cols-2 gap-6">

            <Card icon={<Phone />} title="Telefone">
              <a href="tel:+5511999999999" className="hover:text-primary transition">
                (11) 99999-9999
              </a>
              <p className="text-xs text-muted-foreground mt-1">
                Atendimento via WhatsApp disponível
              </p>
            </Card>

            <Card icon={<Mail />} title="E-mail">
              <a href="mailto:contato@auroraprime.com" className="hover:text-primary transition break-all">
                contato@auroraprime.com
              </a>
              <br />
              <a href="mailto:reservas@auroraprime.com" className="hover:text-primary transition break-all">
                reservas@auroraprime.com
              </a>
            </Card>

            <Card icon={<Clock />} title="Horários">
              Terça a Quinta: 12h – 15h<br />
              Sexta e Sábado: 12h – 23h30<br />
              Domingo: 12h – 17h
            </Card>

            <Card icon={<MapPin />} title="Experiência">
              Ambiente intimista, iluminação baixa e foco total na experiência gastronômica.
              Ideal para jantares especiais e encontros privados.
            </Card>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- CARD ---------------- */

function Card({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="
        rounded-2xl
        bg-card/60
        backdrop-blur-xl
        border border-primary/10
        p-6
        hover:border-primary/30
        hover:shadow-lg hover:shadow-primary/10
        transition-all duration-300
      "
    >
      <div className="flex items-center gap-3 mb-4 text-primary">
        {icon}
        <h3 className="font-serif text-xl text-foreground">{title}</h3>
      </div>

      <div className="text-sm text-muted-foreground leading-relaxed">
        {children}
      </div>
    </motion.div>
  )
}