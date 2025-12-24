import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default PageLayout;
