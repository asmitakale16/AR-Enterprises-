import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Leadership() {
  const timelineEvents = [
    { year: "1992", title: "Senior Officer (Personnel & HR)", company: "Sudarshan Chemical Industries Ltd" },
    { year: "1999", title: "Corporate Manager (HR & Administration)", company: "Ajay Syscon Pvt Ltd" },
    { year: "2005", title: "Manager (HR & Administration)", company: "Behr India Ltd (MAHLE)" },
    { year: "2015", title: "AGM (HR / IR & Administration)", company: "LG Electronics India Pvt Ltd" },
    { year: "2018", title: "Head (HR / IR & Administration)", company: "Magna Automotive (I) Pvt Ltd" },
    { year: "2021", title: "Head (HR / IR & Administration)", company: "Draexlmaier India Pvt Ltd" },
    { year: "2022", title: "Head (HR & Administration)", company: "Eberspaecher India Pvt Ltd" },
  ];

  return (
    <div className="flex flex-col w-full pb-16 md:pb-24">

      {/* Profile Section */}
      <section className="pt-16 md:pt-20 pb-12 md:pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-20 items-center">

            {/* Avatar card */}
            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <div className="aspect-[4/5] max-h-[420px] lg:max-h-none bg-muted/40 rounded-sm border border-border relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/10 via-background to-background" />
                <div className="text-6xl sm:text-8xl font-serif font-bold text-muted-foreground/20 absolute bottom-4 right-4 leading-none select-none">
                  SK
                </div>
                <div className="absolute top-8 -left-4 w-16 sm:w-20 h-1 bg-secondary dark:bg-accent" />
                <div className="absolute -bottom-4 right-8 w-1 h-24 sm:h-32 bg-primary/20 dark:bg-primary/50" />
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="text-xs font-bold text-secondary dark:text-accent tracking-widest uppercase mb-3 md:mb-4">Our Leadership</div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">
                Mr. Sunil Kale
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium mb-6 md:mb-8 pb-6 md:pb-8 border-b border-border">
                Founder & Seasoned HR/Administration Leader
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-foreground/80 mb-8 md:mb-10">
                A seasoned HR & Administration leader with over 30+ years of experience in driving organizational excellence, industrial relations, and strategic workforce management across leading multinational and Indian manufacturing organizations in Pune.
              </p>

              <div className="space-y-4 md:space-y-6">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-muted-foreground">Strategic Value Additions</h3>

                {[
                  {
                    title: "HR Transformation & IR Expertise",
                    desc: "Proven expertise in HR transformation, Industrial Relations (IR), and large-scale workforce management.",
                  },
                  {
                    title: "Global Compliance & Administration",
                    desc: "Extensive experience with globally recognized organizations and international business environments.",
                  },
                  {
                    title: "Multi-location High-Growth Leadership",
                    desc: "Successfully led HR functions in high-growth, multi-location manufacturing setups.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 sm:gap-4 items-start group">
                    <div className="mt-1 bg-secondary/10 dark:bg-accent/10 p-1 rounded-full group-hover:bg-secondary group-hover:text-primary-foreground dark:group-hover:bg-accent transition-colors text-secondary dark:text-accent shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm sm:text-base">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-14 md:py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Career Progression</h2>
            <div className="w-16 h-1 bg-secondary dark:bg-accent mx-auto mb-4 md:mb-6" />
            <p className="text-muted-foreground text-sm sm:text-base">Three decades of proven leadership across premier organizations.</p>
          </div>

          <div className="relative">
            {/* Center line — desktop alternating layout */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
            {/* Left line — mobile/tablet single-column */}
            <div className="md:hidden absolute left-5 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8 md:space-y-0 relative">
              {timelineEvents.map((event, index) => {
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    className={`relative flex flex-col md:flex-row items-start md:items-center md:mb-10 ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-5 md:left-1/2 w-3 h-3 bg-secondary dark:bg-accent rounded-full -translate-x-1/2 translate-y-1.5 md:translate-y-0 ring-4 ring-background z-10 shrink-0" />

                    {/* Content Box */}
                    <div
                      className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                        isEven ? "md:ml-8" : "md:mr-8 md:text-right"
                      }`}
                    >
                      <div className="bg-background p-4 sm:p-5 md:p-6 rounded-lg border border-border shadow-sm hover:shadow-md hover:border-secondary/30 dark:hover:border-accent/30 transition-all group">
                        <span className="inline-block px-2.5 py-1 bg-primary/5 dark:bg-primary/20 text-primary dark:text-foreground text-xs font-bold rounded-full mb-2 md:mb-3 group-hover:bg-secondary group-hover:text-primary-foreground dark:group-hover:bg-accent transition-colors">
                          {event.year}
                        </span>
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-1 leading-snug">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground text-xs sm:text-sm font-medium">{event.company}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
