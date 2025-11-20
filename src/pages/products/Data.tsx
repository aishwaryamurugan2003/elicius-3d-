import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";

// image import
import realtimeDataImg from "@/assets/data/realtime_air_quality.jpg";

const Data = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">

        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Products", path: "/products" },
            { label: "Data Services" },
          ]}
        />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 glow-text">Data Services</h1>
          <p className="text-xl text-muted-foreground">
            We provide air quality & road condition data.
          </p>
        </motion.div>

        {/* ---- EXACT UI AS YOUR SCREENSHOT ---- */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl overflow-hidden relative"
          >
            {/* IMAGE */}
            <div className="h-[420px] w-[320px] overflow-hidden rounded-t-2xl">
              <img
                src={realtimeDataImg}
                alt="Realtime Air Quality Data"
                className="w-full h-full object-cover"
              />
            </div>

            {/* BOTTOM DARK CARD */}
            <div className="p-6 bg-card rounded-b-2xl shadow-lg w-[320px]">
              <h3 className="text-xl font-bold mb-2">Realtime Air Quality Data</h3>
              <p className="text-muted-foreground text-sm">
                We offer real time air quality data using our IoT sensor network 
                and remotely sensed data.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </PageLayout>
  );
};

export default Data;
