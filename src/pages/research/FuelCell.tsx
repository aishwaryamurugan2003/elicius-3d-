import { motion } from "framer-motion"; 
import { Battery, Zap, Droplets, Target } from "lucide-react";
import PageLayout from "@/components/PageLayout"; 
import Breadcrumb from "@/components/Breadcrumb";
import { devices } from "@/data/devices"; 
import { Button } from "@/components/ui/button"; 
import { ArrowRight } from "lucide-react"; 
import { useNavigate } from "react-router-dom"; 
import Planar from "@/assets/fuel cell/Planar.jpg"; 
import tubular from "@/assets/fuel cell/tubular.jpg"; 
import inhouse from "@/assets/fuel cell/inhouse.jpg";
import modifiedcylindrical from "@/assets/fuel cell/modifiedcylindrical.jpg";
import pemcylindrical from "@/assets/fuel cell/pemcylindrical.jpg";
import cylindrical from "@/assets/fuel cell/cylindrical.jpg";
const FuelCell = () => {

  const fuelCellProducts = [
    {
      ...devices[0],
      name: "PLANAR PEM FUEL CELL",
      image: Planar,
    },
    {
      ...devices[1],
      name: "CYLINDRICAL PEMFC STACK",
      image: cylindrical,
    },
    {
      ...devices[2],
      name: "IN-HOUSE FABRICATED MEMBRANE ELECTRODE ASSEMBLY",
      image: inhouse,
    },
    {
      ...devices[0],
      name: "TUBULAR PEM FUEL CELL",
      image: tubular,
    },
    {
      ...devices[1],
      name: "CYLINDRICAL PEM FUEL CELL",
      image: pemcylindrical,
    },
    {
      ...devices[2],
      name: "MODIFIED CYLINDRICAL PEMFC",
      image: modifiedcylindrical,
    },
  ];

  const features = [
    {
      icon: Battery,
      title: "Indigenous MEA Fabrication & Performance Optimization",
      description:
        "Driven by our commitment to self-reliance and innovation, we manufacture MEAs entirely in-house.",
    },
    {
      icon: Zap,
      title: "Pioneering Hybrid Fuel Cell Designs",
      description:
        "We are developing a hybrid architecture combining planar and tubular fuel cell advantages.",
    },
    {
      icon: Droplets,
      title: "Performance Optimization Through Experimental Testing",
      description:
        "Experiments on humidity, temperature, and gas flow help maximize current density.",
    },
    {
      icon: Target,
      title: "Advancing Catalyst Coating Techniques",
      description:
        "We compare Doctor Blade & Air-Spray coating methods to improve performance.",
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb
          items={[
            { label: "Research", path: "/research" },
            { label: "Fuel Cell Technology" },
          ]}
        />

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            Fuel Cell Technology
          </h1>
          <p className="text-xl text-muted-foreground">
            Fuel Cell Research at Elicius Energy
          </p>
        </motion.div>

        {/* RESEARCH FOCUS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-glow rounded-2xl p-8 max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 glow-text">Research Focus</h2>
          <p className="text-muted-foreground text-justify">
            At Elicius Energy, we innovate in PEM fuel cell development and MEA
            fabrication.
          </p>
        </motion.div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-glow rounded-2xl p-8 hover-scale text-center"
            >
              <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* PRODUCTS - IMAGE + NAME ONLY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-center mb-12 glow-text">
            Related Products
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {fuelCellProducts.map((device, index) => (
              <motion.div
                key={device.id + "-" + index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-glow rounded-2xl overflow-hidden group hover-scale"
              >
                {/* IMAGE */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={device.image}
                    alt={device.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* NAME ONLY */}
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {device.name}
                  </h3>
                </div>

              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default FuelCell;