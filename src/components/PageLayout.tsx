import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <Navigation />

      {/* Page Content */}
      <main className="pt-24 flex-1">
        {/* Soft background layer for depth */}
        <div className="relative">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          
          <div className="relative">
            {children}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PageLayout;
