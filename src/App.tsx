import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/products/Products";
import Devices from "./pages/products/Devices";
import DeviceDetail from "./pages/products/DeviceDetail";
import Software from "./pages/products/Software";
import Data from "./pages/services/Data";
import Service from "./pages/services/Service";
import Services from "./pages/services/Services";
import Volunteering from "./pages/services/Volunteering";
import CaseStudies from "./pages/services/CaseStudies";
import CaseStudyDetail from "./pages/services/CaseStudyDetail";
import Technology from "./pages/Technology";
import Research from "./pages/research/Research";
import FuelCell from "./pages/research/FuelCell";
import AirQualityData from "./pages/research/AirQualityData";
import Clients from "./pages/Clients";
import Team from "./pages/Team";
import Blog from "./pages/blog/Blog";
import Media from "./pages/blog/Media";
import ArticleDetail from "./pages/blog/ArticleDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ElectrochemicalModelling from "./pages/research/Simulations";

const queryClient = new QueryClient();

/* 🔥 Animated Routes Wrapper */
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />

        {/* Products Routes */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/devices" element={<Devices />} />
        <Route
          path="/products/devices/:deviceId"
          element={<DeviceDetail />}
        />
        <Route path="/products/software" element={<Software />} />
        <Route path="/products/data" element={<Data />} />
        <Route path="/products/service" element={<Service />} />

        {/* Services Routes */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/data" element={<Data />} />
        <Route path="/service/service" element={<Service />} />
        <Route
          path="/services/volunteering"
          element={<Volunteering />}
        />
        <Route
          path="/services/case-studies"
          element={<CaseStudies />}
        />
        <Route
          path="/services/case-studies/:caseStudyId"
          element={<CaseStudyDetail />}
        />

        {/* Other Routes */}
        <Route path="/technology" element={<Technology />} />

        {/* Research Routes */}
        <Route path="/research" element={<Research />} />
        <Route path="/research/fuel-cell" element={<FuelCell />} />
        <Route
          path="/research/air-quality-data"
          element={<AirQualityData />}
        />
        <Route
          path="/research/simulations"
          element={<ElectrochemicalModelling />}
        />

        <Route path="/clients" element={<Clients />} />
        <Route path="/team" element={<Team />} />

        {/* Blog Routes */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/media" element={<Media />} />
        <Route
          path="/blog/articles/:slug"
          element={<ArticleDetail />}
        />

        <Route path="/contact" element={<Contact />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;