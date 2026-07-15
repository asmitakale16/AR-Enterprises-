import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  
  const clients = [
    "SINAI ENGINEERING (SINAI)",
    "KLEEN GREEN TECHNOLOGIES",
    "ALFA PLAST",
    "CINAI AUTOTECH PRIVATE LIMITED",
    "AQUATECH SYSTEMS",
    "KALPTECH",
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-muted/30 pt-16 md:pt-20 pb-12 md:pb-16 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Start a Conversation
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Whether you're looking to hire leadership talent or transform your HR function — we'd love to connect.
          </motion.p>
        </div>
      </section>

      {/* Form + Contact Details */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16">

            {/* Contact Form */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            >
            <div className="bg-card p-5 sm:p-7 md:p-8 rounded-xl border border-border shadow-sm">

            <h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-5 md:mb-6">
            Send a Message
            </h2>

            <form
            className="space-y-5 md:space-y-6"
            action="https://formsubmit.co/sunil.kale400@gmail.com"
            method="POST"
    >

      {/* FormSubmit Configuration */}
      <input 
        type="hidden" 
        name="_subject" 
        value="New Inquiry from Website" 
      />

      <input 
        type="hidden" 
        name="_captcha" 
        value="false" 
      />

      <input 
        type="hidden" 
        name="_template" 
        value="table" 
      />


      {/* Name + Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

        <div className="space-y-2">
          <label 
            htmlFor="name" 
            className="text-sm font-medium text-foreground"
          >
            Full Name
          </label>

          <input
            type="text"
            id="name"
            name="Full Name"
            required
            className="flex min-h-[48px] h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            placeholder="John Doe"
          />
        </div>


        <div className="space-y-2">
          <label 
            htmlFor="company" 
            className="text-sm font-medium text-foreground"
          >
            Company
          </label>

          <input
            type="text"
            id="company"
            name="Company"
            className="flex min-h-[48px] h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            placeholder="Organization Name"
          />
        </div>

      </div>


      {/* Service */}
      <div className="space-y-2">

        <label 
          htmlFor="service" 
          className="text-sm font-medium text-foreground"
        >
          Service Needed
        </label>


        <select
          id="service"
          name="Service Needed"
          required
          defaultValue=""
          className="flex min-h-[48px] h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        >

          <option value="" disabled>
            Select an option
          </option>

          <option value="Executive Search">
            Executive Search
          </option>

          <option value="Board Services">
            Board Services
          </option>

          <option value="HR Advisory">
            HR Advisory
          </option>

          <option value="Global Talent Sourcing">
            Global Talent Sourcing
          </option>

          <option value="Other">
            Other
          </option>

        </select>

      </div>



      {/* Message */}
      <div className="space-y-2">

        <label 
          htmlFor="message" 
          className="text-sm font-medium text-foreground"
        >
          Message
        </label>


        <textarea
          id="message"
          name="Message"
          rows={5}
          className="flex w-full rounded-md border border-input bg-background px-3 py-3 text-sm resize-none min-h-[120px]"
          placeholder="How can we help you?"
        />

      </div>



      {/* Submit Button */}
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center rounded-sm text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 min-h-[52px] px-8 gap-2"
      >

        Send Inquiry

        <Send className="w-4 h-4" />

      </button>


    </form>

  </div>

</motion.div>

            {/* Contact Details */}
            <motion.div
              className="flex flex-col justify-between gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-6 md:mb-8">Direct Contact</h2>

                <div className="space-y-6 md:space-y-8">
                  {[
                    {
                      icon: <Phone className="w-5 h-5" />,
                      label: "Phone",
                      content: (
                        <a href="tel:+918888833359" className="text-base sm:text-lg font-medium text-foreground hover:text-secondary dark:hover:text-accent transition-colors">
                          +91 88888 33359
                        </a>
                      ),
                    },
                    {
                      icon: <Mail className="w-5 h-5" />,
                      label: "Email",
                      content: (
                        <a href="mailto:sunil.kale400@gmail.com" className="text-sm sm:text-base md:text-lg font-medium text-foreground hover:text-secondary dark:hover:text-accent transition-colors break-all">
                          sunil.kale400@gmail.com
                        </a>
                      ),
                    },
                    {
                      icon: <MapPin className="w-5 h-5" />,
                      label: "Office",
                      content: (
                        <address className="not-italic text-base sm:text-lg text-foreground leading-relaxed">
                          Shop No. 4, Behind Vignaharta Medical Shop,<br />
                          Pimpri, Pune - 411017
                        </address>
                      ),
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 sm:gap-6 group items-start">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-secondary/10 dark:bg-accent/10 flex items-center justify-center text-secondary dark:text-accent group-hover:bg-secondary group-hover:text-primary-foreground dark:group-hover:bg-accent transition-colors shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-muted-foreground mb-1">{item.label}</h3>
                        {item.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Confidentiality Card — Forced white text across dark & light modes */}
              <div className="hidden sm:block p-6 sm:p-8 bg-slate-900 text-white dark:bg-slate-900 dark:text-white rounded-lg relative overflow-hidden shadow-md">
                <div className="absolute -right-4 -bottom-4 opacity-15 text-white">
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold mb-2 text-white">Confidentiality Assured</h3>
                <p className="text-slate-200 text-sm leading-relaxed">
                  We maintain strict confidentiality in all our searches and advisory engagements. Your information is secure with us.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Clientele Section */}
      <section className="py-16 md:py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Our Esteemed Clientele</h2>
            <div className="w-16 h-1 bg-secondary dark:bg-accent mx-auto mb-4 md:mb-6" />
            <p className="text-muted-foreground text-base sm:text-lg">Trusted by leading industrial organizations across sectors.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
            {clients.map((client, i) => (
              <motion.div
                key={i}
                className="bg-background group relative flex items-center justify-center p-6 sm:p-7 md:p-8 min-h-[100px] sm:min-h-[120px] border border-border rounded-lg transition-all hover:-translate-y-1 hover:shadow-md hover:border-secondary/50 dark:hover:border-accent/50 overflow-hidden cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent dark:from-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="font-bold text-foreground text-center tracking-wider text-xs sm:text-sm relative z-10 leading-snug">
                  {client}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}