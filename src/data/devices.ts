import MirrorDevice from "@/assets/kaatru/Mirrordevice.jpg";
import MobileDevice from "@/assets/kaatru/Mobiledevice.jpg";
import StationaryDevice from "@/assets/kaatru/stationarydevice.jpg";

export const devices = [
  {
    id: "air-monitor-mobile",
    name: "Mobile Device",
    category: "Premium",
    price: "Contact for Pricing",
    description:
      "Advanced vehicle-mounted unit engineered for real-time road condition assessment and environmental monitoring.",

    // ✔ FIXED — specs must be key-value object
    specs: {
      Sensors: "Accelerometer, Gyroscope",
      Monitoring: "Road Condition Monitoring",
      Connectivity: "Wi-Fi, LTE",
      Mounting: "Three-wheelers, Four-wheelers",
    },

    // ✔ FIXED — features must exist
    features: [
      "High precision sensing",
      "Real-time connectivity",
      "Cloud-enabled analytics",
      "Rugged automotive-grade build",
    ],

    // ✔ FIXED — DeviceDetail expects an array
    images: [MobileDevice, MobileDevice, MobileDevice],
  },

  {
    id: "air-monitor-mirror",
    name: "Mirror Device",
    category: "Premium",
    price: "Contact for Pricing",
    description:
      "Smart mirror-mounted device designed for real-time environmental and road condition monitoring.",

    specs: {
      Sensors: "Accelerometer, Gyroscope",
      Monitoring: "Road Condition Monitoring",
      Connectivity: "Wi-Fi, LTE",
      Mounting: "Two-wheelers (mirror mount)",
    },

    features: [
      "Lightweight ergonomic design",
      "High vibration resistance",
      "Cloud connectivity",
      "Automotive-grade enclosure",
    ],

    images: [MirrorDevice, MirrorDevice, MirrorDevice],
  },

  {
    id: "stationary-device",
    name: "Stationary Device",
    category: "Enterprise",
    price: "Contact for Pricing",
    description:
      "Stationary environmental device for continuous air quality and atmospheric parameter monitoring.",

    specs: {
      Monitoring: "PM2.5, PM10, Temperature, Humidity, CO₂, SOx, NO₂, UV",
      Connectivity: "Wi-Fi, LTE",
      Mounting: "Rooftops, buildings, industrial premises",
    },

    features: [
      "24/7 real-time monitoring",
      "Weather-resistant design",
      "High sensor accuracy",
    ],

    images: [StationaryDevice, StationaryDevice, StationaryDevice],
  },
];
