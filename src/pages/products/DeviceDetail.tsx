import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, Download, ShoppingCart } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { devices } from "@/data/devices";
import { Image as AntImage } from "antd";

const DeviceDetail = () => {
  const { deviceId } = useParams();
  const device = devices.find((d) => d.id === deviceId);

  if (!device) {
    return (
      <PageLayout>
        <section className="section text-center">
          <h1 className="heading">Device Not Found</h1>
          <Link to="/products/devices" className="text-primary underline">
            Go back to devices
          </Link>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>

      {/* ================= HEADER ================= */}
      <section className="section">
        <div className="container-wide">
          <Breadcrumb
            items={[
              { label: "Products", path: "/products" },
              { label: "Devices", path: "/products/devices" },
              { label: device.name },
            ]}
          />

          <Link
            to="/products/devices"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mt-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Devices
          </Link>
        </div>
      </section>

      {/* ================= MAIN PRODUCT ================= */}
      <section className="section section-muted">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">

            {/* IMAGE GALLERY */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card>
                <div className="p-6">
                  <AntImage
                    src={device.images[0]}
                    alt={device.name}
                    className="w-full h-[380px] object-contain"
                    preview={{ mask: "Click to zoom" }}
                  />

                  <AntImage.PreviewGroup>
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      {device.images.map((img, i) => (
                        <div
                          key={i}
                          className="border rounded-lg p-2 cursor-pointer hover:shadow-sm"
                        >
                          <AntImage
                            src={img}
                            alt={`${device.name} ${i}`}
                            preview={false}
                            className="h-24 object-contain mx-auto"
                          />
                        </div>
                      ))}
                    </div>
                  </AntImage.PreviewGroup>
                </div>
              </Card>
            </motion.div>

            {/* PRODUCT INFO */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <span className="inline-block text-sm px-3 py-1 rounded-full bg-primary/10 text-primary">
                {device.category}
              </span>

              <h1 className="heading">{device.name}</h1>

              <p className="subtext">{device.description}</p>

              <div className="text-2xl font-semibold text-primary">
                {device.price}
              </div>

              <div className="flex gap-4">
                <Button asChild size="lg" className="flex-1">
                  <Link to="/contact">
                    <ShoppingCart className="mr-2 w-5 h-5" />
                    Request Quote
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={() =>
                    window.open("/Kaatru brochure.pdf", "_blank")
                  }
                >
                  <Download className="w-5 h-5" />
                </Button>
              </div>

              {/* FEATURES */}
              {device.features && (
                <Card>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {device.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <Check className="w-4 h-4 text-primary mr-3 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SPECIFICATIONS ================= */}
      <section className="section">
        <div className="container-wide max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <div className="p-8">
                <h2 className="text-2xl font-semibold mb-6">
                  Technical Specifications
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(device.specs || {}).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between border-b pb-2 text-sm"
                      >
                        <span className="font-medium">{key}</span>
                        <span className="text-muted-foreground">
                          {value as string}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section section-muted">
        <div className="container-wide text-center">
          <h2 className="text-2xl font-semibold mb-6">
            See this device in real-world deployments
          </h2>

          <Button asChild size="lg" variant="outline">
            <Link to="/services/case-studies">
              View Case Studies
            </Link>
          </Button>
        </div>
      </section>

    </PageLayout>
  );
};

export default DeviceDetail;
