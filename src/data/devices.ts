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
      "Vehicle-mounted smart unit engineered for real-time air quality, toxic gas detection, and road condition scoring using IMU and environmental sensors.",

    specs: {
      "PM Sensors": "PM2.5, PM10 (0–1000 µg/m³)",
      VOC: "0–1000 ppm (< 10s response)",
      "Toxic Gas": "SOx, NO₂, CO₂ (0–10,000 ppm)",
      Temperature: "10–50°C (20ms)",
      Humidity: "0–90% RH (20ms)",
      "Ambient Light": "UV, IR, Visible",

      
      IMU: "Accelerometer, Gyroscope, Magnetometer",

      Connectivity: "Wi-Fi, LTE",
      GPS: "Accuracy up to 2 meters",
      Power: "12V input, 4hr battery backup",
      Mounting: "Three-wheelers, Four-wheelers",
    },

    features: [
      "Real-time PM2.5, PM10, CO₂, VOC monitoring",
      "Advanced IMU for road quality & bumpiness scoring",
      "Cleanest route and least bumpy route computation",
      "Exposure assessment for drivers & passengers",
      "Geo-fencing, anti-theft alarm & push notifications",
      "LTE + Wi-Fi provisioning",
      "Cloud-based analytics dashboard",
      "Automotive-grade rugged enclosure",
    ],

    images: [MobileDevice, MobileDevice, MobileDevice],
  },
  {
    id: "air-monitor-mirror",
    name: "Mirror Device",
    category: "Premium",
    price: "Contact for Pricing",
    description:
      "Lightweight mirror-mounted environmental monitoring device optimized for two-wheelers. Tracks pollution exposure and road vibration levels.",

    specs: {
      "PM Sensors": "PM2.5, PM10",
      VOC: "0–1000 ppm",
      Temperature: "10–50°C",
      Humidity: "0–90% RH",

      // Motion sensor
      IMU: "Accelerometer, Gyroscope",

      // Connectivity + Mount
      Connectivity: "Wi-Fi, LTE",
      Mounting: "Two-wheelers (mirror mount)",
      GPS: "Accuracy 2–5 meters",
    },

    features: [
      "Compact and lightweight design",
      "Real-time PM and VOC monitoring",
      "Road vibration detection via IMU",
      "Exposure monitoring for riders",
      "Cloud connectivity",
      "High vibration resistance (two-wheeler optimized)",
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
      "Fixed-position ambient air quality station for continuous monitoring of pollutants, gases, and atmospheric conditions in urban or industrial locations.",

    specs: {
      Monitoring:
        "PM2.5, PM10, CO₂, NO₂, SOx, Temperature, Humidity, UV, VOC",
      Temperature: "10–50°C",
      Humidity: "0–90% RH",
      "Toxic Gas": "CO₂ up to 10,000 ppm",
      UV: "UV index & spectral measurement",
      Connectivity: "Wi-Fi, LTE",
      Mounting: "Rooftops, buildings, industrial premises",
      Power: "External AC + backup battery",
    },

    features: [
      "24/7 continuous environmental monitoring",
      "High-accuracy multi-pollutant sensors",
      "Weather-resistant industrial design",
      "Real-time AQI & emissions reporting",
      "Cloud dashboard + fleet management",
      "Supports policy & mitigation analytics",
    ],

    images: [StationaryDevice, StationaryDevice, StationaryDevice],
  },
];
