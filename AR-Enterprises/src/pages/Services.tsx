import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Globe,
  Building2,
  ShoppingCart,
  Laptop,
  BadgeDollarSign,
  Wrench,
  CheckCircle2,
  TrendingUp,
  Award,
} from "lucide-react";

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <div className="flex flex-col w-full pb-16 md:pb-24">
      {/* Page Header */}
      <section className="bg-muted/30 pt-16 md:pt-20 pb-12 md:pb-16 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Expertise & Services
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Two distinct business pillars designed to solve your most critical people challenges.
          </motion.p>
        </div>
      </section>

      {/* Main Services Pillars */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16">

            {/* Pillar A */}
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 md:mb-8 flex items-start sm:items-center gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-sm bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-secondary dark:text-accent tracking-widest uppercase mb-1">Pillar A</div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground leading-tight">
                    Candidate Search & Recruitment
                  </h2>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6 flex-grow">
                {[
                  {
                    title: "Executive Search",
                    desc: "Senior & mid-level hiring, culture fit, role matching, and rigorous screening to find leaders who drive impact.",
                    icon: <Users className="w-5 h-5" />,
                  },
                  {
                    title: "Board Services",
                    desc: "Identifying experienced industry leaders for strategic governance and board-level positions.",
                    icon: <Award className="w-5 h-5" />,
                  },
                  {
                    title: "Global Talent Sourcing",
                    desc: "Helping international companies tap into highly skilled Indian and global talent pools.",
                    icon: <Globe className="w-5 h-5" />,
                  },
                  {
                    title: "Core Offerings",
                    desc: "Low-Cost Manpower Hiring, Market Mapping, and Diversity Hiring initiatives tailored to your scale.",
                    icon: <CheckCircle2 className="w-5 h-5" />,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-card p-4 sm:p-6 rounded-lg border border-border shadow-sm hover:shadow-md hover:border-secondary/30 dark:hover:border-accent/30 transition-all group"
                  >
                    <div className="flex gap-3 sm:gap-4">
                      <div className="mt-1 text-secondary dark:text-accent group-hover:scale-110 transition-transform shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-foreground mb-1 sm:mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Pillar B */}
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="mb-6 md:mb-8 flex items-start sm:items-center gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-sm bg-secondary dark:bg-accent text-primary-foreground flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-secondary dark:text-accent tracking-widest uppercase mb-1">Pillar B</div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground leading-tight">
                    HR Advisory Services
                  </h2>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6 flex-grow">
                {[
                  {
                    title: "Organizational Structure & Culture",
                    desc: "Designing operational efficiency frameworks and embedding core purpose-driven values into the daily workflow.",
                    icon: <Building2 className="w-5 h-5" />,
                  },
                  {
                    title: "Competency & Talent Management",
                    desc: "Establishing performance standards, learning initiatives, and capability-building programs across levels.",
                    icon: <CheckCircle2 className="w-5 h-5" />,
                  },
                  {
                    title: "Leadership Development",
                    desc: "Succession planning, managerial capability enhancement, and tailored blended learning journeys.",
                    icon: <Users className="w-5 h-5" />,
                  },
                  {
                    title: "Compensation & Rewards",
                    desc: "Structuring performance-driven compensation models with accurate market alignment and benchmarking.",
                    icon: <BadgeDollarSign className="w-5 h-5" />,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-card p-4 sm:p-6 rounded-lg border border-border shadow-sm hover:shadow-md hover:border-secondary/30 dark:hover:border-accent/30 transition-all group"
                  >
                    <div className="flex gap-3 sm:gap-4">
                      <div className="mt-1 text-secondary dark:text-accent group-hover:scale-110 transition-transform shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-foreground mb-1 sm:mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-14 md:py-20 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Industries Served
            </h2>
            <div className="w-16 h-1 bg-secondary dark:bg-accent mx-auto"></div>
          </div>

          {/*
            Grid:
            Mobile  (default)  : 1 column
            Tablet  (sm)       : 2 columns
            Tablet+ (md)       : 3 columns
            Laptop  (lg)       : 5 columns (one per industry)
          */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { name: "Manufacturing", icon: <Wrench className="w-7 h-7 sm:w-8 sm:h-8" /> },
              { name: "Retail & E-commerce", icon: <ShoppingCart className="w-7 h-7 sm:w-8 sm:h-8" /> },
              { name: "Internet & Start-up", icon: <Laptop className="w-7 h-7 sm:w-8 sm:h-8" /> },
              { name: "Financial Services", icon: <BadgeDollarSign className="w-7 h-7 sm:w-8 sm:h-8" /> },
              { name: "Engineering Services", icon: <Building2 className="w-7 h-7 sm:w-8 sm:h-8" /> },
            ].map((ind, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative bg-card flex flex-col items-center text-center p-5 sm:p-6 lg:p-7 rounded-xl border border-border hover:border-secondary/50 dark:hover:border-accent/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-default overflow-hidden min-h-[120px] justify-center"
              >
                <div className="text-muted-foreground group-hover:text-secondary dark:group-hover:text-accent mb-3 transition-colors">
                  {ind.icon}
                </div>
                <h3 className="font-semibold text-foreground text-sm leading-tight">{ind.name}</h3>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-secondary/5 dark:bg-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
