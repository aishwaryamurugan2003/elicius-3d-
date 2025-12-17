import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, Download, ShoppingCart } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { devices } from "@/data/devices";
import { Image as AntImage } from "antd";


const DeviceDetail = () => {
  const { deviceId } = useParams();

  const device = devices.find((d) => d.id === deviceId);

  if (!device) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-bold glow-text mb-4">
            Device Not Found
          </h1>
          <Link to="/products/devices" className="text-primary underline">
            Go Back
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Products", path: "/products" },
            { label: "Devices", path: "/products/devices" },
            { label: device.name },
          ]}
        />

        {/* Back Button */}
        <Link
          to="/products/devices"
          className="inline-flex items-center text-primary hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Devices
        </Link>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
       {/* Image Gallery */}
<motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  className="space-y-4"
>
  {/* MAIN IMAGE */}
  <div className="glass-glow rounded-2xl overflow-hidden">
    <AntImage
      src={device.images[0]}
      alt={device.name}
      className="w-full h-96 object-contain"
      preview={{
        mask: "Zoom Image",
      }}
      placeholder={
        <AntImage
          preview={false}
          src={device.images[0]}
          className="w-full h-96 object-contain blur-md scale-105"
        />
      }
    />
  </div>

  {/* THUMBNAILS (Gallery Preview) */}
  <AntImage.PreviewGroup>
    <div className="grid grid-cols-3 gap-4">
      {device.images.map((img, i) => (
        <div
          key={i}
          className="glass-glow rounded-xl overflow-hidden hover-scale cursor-pointer h-24"
        >
          <AntImage
            src={img}
            alt={`${device.name} ${i + 1}`}
            preview={false}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  </AntImage.PreviewGroup>
</motion.div>


          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Category */}
            <div className="inline-block px-4 py-2 glass-glow rounded-full text-sm font-medium mb-4">
              {device.category}
            </div>

            {/* Name */}
            <h1 className="text-4xl md:text-5xl font-bold glow-text">
              {device.name}
            </h1>

            {/* Price */}
            <div className="text-3xl font-bold text-primary">
              {device.price}
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground">
              {device.description}
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              <Button
              asChild
              size="lg"
              className="flex-1 bg-gradient-to-r from-primary to-secondary text-background hover:shadow-glow transition-all duration-300">
                <Link to="/contact">
                <ShoppingCart className="mr-2 w-5 h-5" />
                Request Quote
                </Link>
              </Button>
                        <Button
            size="lg"
            onClick={() => {
              const brochureUrl = "/Kaatru brochure.pdf";
              window.open(brochureUrl, "_blank");
            }}
            className="bg-gradient-to-r from-primary to-secondary text-background hover:shadow-glow transition-all duration-300"
          >
            <Download className="mr-1 w-1 h-4" />
          </Button>
            </div>

            {/* Features */}
            <div className="glass-glow rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-3">
                {device.features?.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-glow rounded-2xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 glow-text">
            Technical Specifications
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(device.specs || {}).map(([key, value]) => (
              <div
                key={key}
                className="flex justify-between py-3 border-b border-border/50"
              >
                <span className="font-medium">{key}</span>
                <span className="text-muted-foreground">{value as string}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 glow-text text-center">
            See This Device in Action
          </h2>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="glass-glow hover:bg-primary"
            >
              <Link to="/services/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default DeviceDetail;
