"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contato" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-[0.3em] mb-4 block">
            Fale Conosco
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Contato
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos à disposição para atendê-lo. Entre em contato através 
            dos canais abaixo ou faça-nos uma visita.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border p-8 text-center"
          >
            <div className="w-14 h-14 bg-primary/10 mx-auto mb-6 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
              Endereço
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Av. Brigadeiro Faria Lima, 1234
              <br />
              Itaim Bibi - São Paulo, SP
              <br />
              CEP: 01452-001
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card border border-border p-8 text-center"
          >
            <div className="w-14 h-14 bg-primary/10 mx-auto mb-6 flex items-center justify-center">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
              Telefone
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              <a href="tel:+551132634567" className="hover:text-primary transition-colors">
                (11) 3263-4567
              </a>
              <br />
              <a href="tel:+5511999887766" className="hover:text-primary transition-colors">
                (11) 99988-7766
              </a>
              <br />
              <span className="text-sm">(WhatsApp)</span>
            </p>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border p-8 text-center"
          >
            <div className="w-14 h-14 bg-primary/10 mx-auto mb-6 flex items-center justify-center">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
              E-mail
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              <a href="mailto:contato@saborebrasa.com.br" className="hover:text-primary transition-colors break-all">
                contato@saborebrasa.com.br
              </a>
              <br />
              <a href="mailto:reservas@saborebrasa.com.br" className="hover:text-primary transition-colors break-all">
                reservas@saborebrasa.com.br
              </a>
            </p>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card border border-border p-8 text-center"
          >
            <div className="w-14 h-14 bg-primary/10 mx-auto mb-6 flex items-center justify-center">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
              Funcionamento
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Terça a Quinta: 12h - 23h
              <br />
              Sexta e Sábado: 12h - 00h
              <br />
              Domingo: 12h - 17h
            </p>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 h-80 bg-card border border-border overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976951333147!2d-46.67711692379!3d-23.56714406230!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5763f5c5c8e7%3A0x4e2d5c5c5c5c5c5c!2sAv.%20Brg.%20Faria%20Lima%2C%201234%20-%20Itaim%20Bibi%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização do Sabor & Brasa"
          />
        </motion.div>
      </div>
    </section>
  )
}
