"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  CalendarDays,
  Clock,
  Users,
  Phone,
  User,
  MapPin,
} from "lucide-react"

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

  const WHATSAPP_NUMBER = "5511999999999"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const message = `Olá! Gostaria de reservar uma mesa.

Nome: ${formData.name}
Telefone: ${formData.phone}
Data: ${formData.date}
Horário: ${formData.time}
Pessoas: ${formData.guests}`

    const encodedMessage = encodeURIComponent(message)

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
      "_blank"
    )

    setTimeout(() => {
      setSubmitted(true)
      setIsSubmitting(false)
      setFormData({
        name: "",
        phone: "",
        date: "",
        time: "",
        guests: "2",
      })

      setTimeout(() => setSubmitted(false), 5000)
    }, 600)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="reservas" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-[0.35em] mb-4 block">
            Reserve Sua Mesa
          </span>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
            Faça Sua Reserva
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Garanta sua mesa para uma experiência gastronômica inesquecível.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Panel */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              rounded-3xl
              bg-card/80
              backdrop-blur-xl
              border border-primary/20
              p-8 md:p-10
              shadow-2xl shadow-primary/10
            "
          >
            <h3 className="font-serif text-3xl mb-8">Informações</h3>

            <div className="space-y-6 text-muted-foreground">
              <div className="flex gap-4">
                <Clock className="text-primary shrink-0" />
                <div>
                  <p className="text-foreground font-semibold">Horários</p>
                  <p>Almoço: 12h às 15h</p>
                  <p>Jantar: 19h às 23h</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-primary shrink-0" />
                <div>
                  <p className="text-foreground font-semibold">Contato</p>
                  <p>(11) 99999-9999</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-primary shrink-0" />
                <div>
                  <p className="text-foreground font-semibold">Endereço</p>
                  <p>Av. Gourmet, 999</p>
                  <p>São Paulo - SP</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-5 rounded-2xl bg-primary/10 border border-primary/20">
              <p className="text-primary font-semibold mb-2">
                Reservas VIP & Eventos
              </p>
              <p className="text-sm text-muted-foreground">
                Oferecemos reservas exclusivas para aniversários, reuniões e
                eventos privados.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="
              rounded-3xl
              bg-card/80
              backdrop-blur-xl
              border border-primary/20
              p-8 md:p-10
              shadow-2xl shadow-primary/10
            "
          >
            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-primary/10 border border-primary/30 text-center">
                ✓ WhatsApp aberto! Finalize sua reserva.
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-5">
              <Input
                icon={<User size={16} />}
                label="Nome"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />

              <Input
                icon={<Phone size={16} />}
                label="Telefone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />

              <Input
                icon={<CalendarDays size={16} />}
                label="Data"
                name="date"
                type="date"
                min={new Date().toISOString().split("T")[0]}
                value={formData.date}
                onChange={handleChange}
              />

              <Select
                icon={<Clock size={16} />}
                label="Horário"
                name="time"
                value={formData.time}
                onChange={handleChange}
                options={["12:00", "13:00", "14:00", "19:00", "20:00", "21:00", "22:00"]}
              />

              <div className="md:col-span-2">
                <Select
                  icon={<Users size={16} />}
                  label="Pessoas"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  options={Array.from({ length: 12 }, (_, i) => `${i + 1}`)}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="
                w-full mt-8 py-4 rounded-2xl
                bg-primary text-primary-foreground
                uppercase tracking-wider
                hover:scale-[1.02]
                hover:shadow-xl hover:shadow-primary/30
                transition-all duration-300
              "
            >
              {isSubmitting ? "Enviando..." : "Reservar Agora"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function Input({ icon, label, ...props }: any) {
  return (
    <div>
      <label className="flex gap-2 text-sm uppercase tracking-wider mb-2 text-muted-foreground">
        {icon}
        {label}
      </label>
      <input
        {...props}
        required
        className="
          w-full px-4 py-3 rounded-xl
          bg-input border border-border
          focus:outline-none focus:ring-2 focus:ring-primary/30
        "
      />
    </div>
  )
}

function Select({ icon, label, options, ...props }: any) {
  return (
    <div>
      <label className="flex gap-2 text-sm uppercase tracking-wider mb-2 text-muted-foreground">
        {icon}
        {label}
      </label>
      <select
        {...props}
        required
        className="
          w-full px-4 py-3 rounded-xl
          bg-input border border-border
          focus:outline-none focus:ring-2 focus:ring-primary/30
        "
      >
        <option value="">Selecione</option>
        {options.map((option: string) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}