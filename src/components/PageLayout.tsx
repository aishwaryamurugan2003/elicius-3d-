import { ReactNode } from "react";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col overflow-hidden">
      
      {/* Animated Floating Background Glow */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[15%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-15%] right-[10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Header */}
      <Navigation />

      {/* Page Content */}
      <motion.main
        className="pt-20 flex-1 relative"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -40, scale: 0.98 }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
      >
        {/* Soft gradient depth layer */}
        <div className="relative">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

          <div className="relative">
            {children}
          </div>
        </div>
      </motion.main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PageLayout;