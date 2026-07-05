import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Search, Target, Cog, Zap, CheckCircle2 } from "lucide-react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
              <pattern id="diagonal" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M-5,5 l10,-10 M0,20 l20,-20 M15,25 l10,-10" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <motion.rect
              width="100%" height="100%" fill="url(#diagonal)"
              style={{ y }}
              className="opacity-50"
            />
          </svg>
        </div>

        {/* Gradients */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-secondary/10 dark:bg-accent/10 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 dark:bg-primary/20 blur-[120px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary dark:bg-accent/10 dark:text-accent font-semibold text-xs tracking-widest uppercase mb-5 md:mb-6 border border-secondary/20 dark:border-accent/20">
                Est. 2026 • Pune, India
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold tracking-tight text-foreground leading-[1.1] mb-6 md:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
              YOUR TRUSTED HR PARTNER FOR{" "}
              <span className="text-secondary dark:text-accent italic">SKILLED</span>{" "}
              INDUSTRIAL TALENT.
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              Delivering focused talent acquisition and HR outsourcing solutions for OEMs and SMEs. Quietly placing leaders across the automotive and manufacturing sectors.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              <Link
                href="/services"
                className="w-full sm:w-auto min-h-[52px] px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-foreground dark:text-background dark:hover:bg-foreground/90 font-medium rounded-sm transition-all flex items-center justify-center gap-2 group text-sm sm:text-base"
              >
                Explore Our Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto min-h-[52px] px-6 sm:px-8 py-3 sm:py-4 border border-input bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent font-medium rounded-sm transition-all flex items-center justify-center text-sm sm:text-base"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-5 md:mb-6 relative pl-5 md:pl-0">
                Who We Are
                <div className="absolute left-0 md:-left-4 top-2 w-1 h-10 md:h-12 bg-secondary dark:bg-accent"></div>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-5 md:mb-6 leading-relaxed">
                Based in Pune, we help organizations hire the right leadership and skilled workforce, implement best-in-class HR practices, and build strong people systems that drive performance and growth — backed by a consultative approach, industry expertise, and transparent business ethics.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Our experienced consultants bring strong domain knowledge, a proprietary search methodology, and a commitment to transparent, ethical, and performance-oriented practices. From recruitment to HR advisory and complete HR outsourcing.
              </p>
            </motion.div>

            <motion.div
              className="relative rounded-lg overflow-hidden border border-border shadow-2xl shadow-primary/5 bg-muted/50 p-6 sm:p-8 min-h-[280px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-between"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent dark:from-accent/10 dark:to-transparent" />
              <div className="relative z-10">
                <Target className="w-10 h-10 sm:w-12 sm:h-12 text-secondary dark:text-accent mb-4 sm:mb-6" />
                <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-3 sm:mb-4 text-foreground">Our Core Purpose</h3>
                <p className="text-muted-foreground text-base sm:text-lg italic">
                  "To be the invisible architecture behind high-performing organizations."
                </p>
              </div>
              <div className="relative z-10 mt-8 sm:mt-12 grid grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1 sm:mb-2">30+</div>
                  <div className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1 sm:mb-2">OEMs</div>
                  <div className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider">Primary Focus</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            className="text-center mb-10 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-3 md:mb-4">Our Approach</h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              A structured methodology to transform your human capital into a strategic advantage.
            </p>
          </motion.div>

          {/*
            Layout:
            Mobile  (default) : 1 column, stacked vertically
            Tablet  (md)      : 2 columns — DEFINE + BUILD in row 1, GROW centred in row 2
            Laptop  (lg)      : 3 columns side-by-side
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">

            {/* Pillar 1: DEFINE */}
            <motion.div
              className="bg-card rounded-2xl border border-border border-t-4 border-t-secondary dark:border-t-accent shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="p-5 sm:p-6 lg:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 dark:bg-accent/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-primary-foreground dark:group-hover:bg-accent transition-colors text-secondary dark:text-accent">
                    <Search className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-secondary dark:text-accent tracking-widest uppercase mb-1">Phase 01</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground font-serif">DEFINE</h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Establish clear HR strategies, structures, and frameworks aligned with business goals. We map the terrain before we build.
                </p>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                  <div className="overflow-hidden">
                    <div className="pt-5 mt-5 border-t border-border border-dashed">
                      <h4 className="font-semibold text-xs text-foreground mb-3 uppercase tracking-wider">Key Activities:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-secondary dark:text-accent shrink-0 mt-0.5" /> Market Intelligence</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-secondary dark:text-accent shrink-0 mt-0.5" /> Org Structuring</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-secondary dark:text-accent shrink-0 mt-0.5" /> Competency Design</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-secondary dark:text-accent shrink-0 mt-0.5" /> Role Clarity</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Pillar 2: BUILD */}
            <motion.div
              className="bg-card rounded-2xl border border-border border-t-4 border-t-primary shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="p-5 sm:p-6 lg:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-primary dark:text-foreground">
                    <Cog className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-primary dark:text-foreground tracking-widest uppercase mb-1">Phase 02</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground font-serif">BUILD</h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Develop systems, capabilities, and processes to enable execution. Creating the infrastructure for sustainable talent management.
                </p>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                  <div className="overflow-hidden">
                    <div className="pt-5 mt-5 border-t border-border border-dashed">
                      <h4 className="font-semibold text-xs text-foreground mb-3 uppercase tracking-wider">Key Activities:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary dark:text-foreground shrink-0 mt-0.5" /> Executive Search</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary dark:text-foreground shrink-0 mt-0.5" /> Compensation Modeling</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary dark:text-foreground shrink-0 mt-0.5" /> Policy Formulation</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary dark:text-foreground shrink-0 mt-0.5" /> HR Technology</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Pillar 3: GROW — spans 2 cols on md to center it, normal on lg */}
            <motion.div
              className="bg-card rounded-2xl border border-border border-t-4 border-t-secondary dark:border-t-accent shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group cursor-default md:col-span-2 lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="p-5 sm:p-6 lg:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 dark:bg-accent/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-primary-foreground dark:group-hover:bg-accent transition-colors text-secondary dark:text-accent">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-secondary dark:text-accent tracking-widest uppercase mb-1">Phase 03</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground font-serif">GROW</h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Strengthen organizational effectiveness through continuous development and transformation. Evolving alongside your business.
                </p>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                  <div className="overflow-hidden">
                    <div className="pt-5 mt-5 border-t border-border border-dashed">
                      <h4 className="font-semibold text-xs text-foreground mb-3 uppercase tracking-wider">Key Activities:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-secondary dark:text-accent shrink-0 mt-0.5" /> Leadership Development</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-secondary dark:text-accent shrink-0 mt-0.5" /> Performance Management</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-secondary dark:text-accent shrink-0 mt-0.5" /> Employee Engagement</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-secondary dark:text-accent shrink-0 mt-0.5" /> Succession Planning</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Connecting arrows between pillars — visible on lg only */}
          <div className="hidden lg:flex items-center justify-center gap-0 mt-8 text-muted-foreground/30">
            <div className="flex-1 h-px bg-secondary/20 dark:bg-accent/20" />
            <svg className="w-4 h-4 text-secondary dark:text-accent mx-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <div className="flex-1 h-px bg-secondary/20 dark:bg-accent/20" />
          </div>
        </div>
      </section>
    </div>
  );
}
