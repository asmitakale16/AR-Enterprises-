import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-secondary/30 selection:text-primary dark:selection:bg-accent/30 dark:selection:text-foreground">
      <Navbar />
      <motion.main 
        key={location}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex-grow pt-[88px]" // Account for fixed navbar height
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
