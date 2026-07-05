import { Link, useLocation } from "wouter";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Leadership", path: "/leadership" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-border shadow-sm py-3"
          : "bg-transparent border-transparent py-4 md:py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2 relative z-50">
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-primary dark:text-foreground">
            AR<span className="text-secondary dark:text-accent">.</span>
          </span>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mt-1 hidden sm:block">
            Enterprises
          </span>
        </Link>

        {/* Desktop Nav — visible on lg+ (laptop and above) */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-medium transition-colors relative py-1 ${
                location === link.path
                  ? "text-primary dark:text-foreground"
                  : "text-muted-foreground hover:text-primary dark:hover:text-foreground"
              }`}
            >
              {link.name}
              {location === link.path && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary dark:bg-accent"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 relative z-50">
          {/* Theme toggle — always visible */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-muted transition-colors text-foreground"
            aria-label="Toggle theme"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </button>

          {/* "Get in Touch" CTA — desktop only */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </Link>

          {/* Hamburger — visible on mobile and tablet (below lg) */}
          <button
            className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-foreground rounded-md hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={mobileMenuOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-xl lg:hidden overflow-hidden"
          >
            <nav className="container mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`flex items-center min-h-[52px] px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    location === link.path
                      ? "bg-muted text-primary dark:text-foreground font-semibold"
                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                  }`}
                >
                  {link.name}
                  {location === link.path && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-secondary dark:bg-accent" />
                  )}
                </Link>
              ))}
              <div className="pt-3 pb-2 border-t border-border mt-2">
                <Link
                  href="/contact"
                  className="flex items-center justify-center min-h-[52px] px-5 py-3 w-full text-sm font-semibold rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
