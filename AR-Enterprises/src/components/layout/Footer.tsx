import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground dark:bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2">
           <Link href="/" className="inline-block mb-4">
           <span className="font-serif text-2xl font-bold tracking-tight text-white">
            AR<span className="text-secondary">.</span>
           </span>

           <span className="block text-xs font-semibold tracking-[0.2em] uppercase text-white">
            Enterprises
           </span>
           </Link>
            <p className="text-primary-foreground/80 dark:text-muted-foreground text-sm max-w-sm leading-relaxed mb-6">
              Your Trusted HR Partner for Skilled Industrial Talent. Delivering focused talent acquisition and HR outsourcing solutions for OEMs and SMEs since 2026.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-secondary dark:text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-primary-foreground/80 dark:text-muted-foreground hover:text-white dark:hover:text-foreground transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-sm text-primary-foreground/80 dark:text-muted-foreground hover:text-white dark:hover:text-foreground transition-colors">Services</Link></li>
              <li><Link href="/leadership" className="text-sm text-primary-foreground/80 dark:text-muted-foreground hover:text-white dark:hover:text-foreground transition-colors">Leadership</Link></li>
              <li><Link href="/contact" className="text-sm text-primary-foreground/80 dark:text-muted-foreground hover:text-white dark:hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-secondary dark:text-foreground">Contact</h4>
            <address className="not-italic space-y-3 text-sm text-primary-foreground/80 dark:text-muted-foreground">
              <p>Shop No. 4, Behind Vignaharta Medical Shop,<br />Pimpri, Pune - 411017</p>
              <p>
                <a href="mailto:sunil.kale400@gmail.com" className="hover:text-white dark:hover:text-foreground transition-colors">
                  sunil.kale400@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+918888833359" className="hover:text-white dark:hover:text-foreground transition-colors">
                  +91 88888 33359
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 dark:border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/60 dark:text-muted-foreground">
            &copy; {new Date().getFullYear()} AR Enterprises. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-xs text-primary-foreground/60 dark:text-muted-foreground hover:text-white dark:hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs text-primary-foreground/60 dark:text-muted-foreground hover:text-white dark:hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
