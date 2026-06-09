"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { CalendarDays, Clock, Users, Phone, User } from "lucide-react"

export function Reservations() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Número do WhatsApp do restaurante (substitua pelo número real)
  const WHATSAPP_NUMBER = "5511999999999"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Formatar a mensagem para o WhatsApp
    const message = `Olá! Gostaria de fazer uma reserva no Site-Restaurante.

*Dados da Reserva:*
- Nome: ${formData.name}
- Telefone: ${formData.phone}
- Data: ${formData.date}
- Horário: ${formData.time}
- Pessoas: ${formData.guests}

Aguardo confirmação. Obrigado!`

    // Codificar a mensagem para URL
    const encodedMessage = encodeURIComponent(message)
    
    // Abrir WhatsApp com a mensagem
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank")
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", phone: "", date: "", time: "", guests: "2" })
    
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="reservas" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-[0.3em] mb-4 block">
            Reserve Sua Mesa
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Faça Sua Reserva
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Garanta seu lugar para uma experiência gastronômica inesquecível. 
            Preencha o formulário abaixo e entraremos em contato para confirmar.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-card border border-border p-8 md:p-12"
        >
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-4 bg-primary/10 border border-primary text-foreground text-center"
            >
              Reserva solicitada! Complete o envio no WhatsApp que foi aberto.
            </motion.div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <User className="w-4 h-4" />
                Nome Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                placeholder="Seu nome"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                placeholder="(11) 99999-9999"
              />
            </div>

            {/* Date */}
            <div className="space-y-2">
              <label htmlFor="date" className="text-sm uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                Data
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full bg-input border border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
              />
            </div>

            {/* Time */}
            <div className="space-y-2">
              <label htmlFor="time" className="text-sm uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Horário
              </label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full bg-input border border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
              >
                <option value="">Selecione um horário</option>
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
              </select>
            </div>

            {/* Guests */}
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="guests" className="text-sm uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <Users className="w-4 h-4" />
                Número de Pessoas
              </label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
                className="w-full bg-input border border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "pessoa" : "pessoas"}
                  </option>
                ))}
                <option value="12+">Mais de 12 pessoas</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-8 bg-primary text-primary-foreground py-4 text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Enviando..." : "Solicitar Reserva"}
          </button>
        </motion.form>
      </div>
    </section>
  )
}
