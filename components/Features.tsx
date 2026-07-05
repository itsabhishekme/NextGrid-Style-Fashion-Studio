"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Truck,
  CreditCard,
  Heart,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Premium Collections",
    description:
      "Discover curated fashion for men, women, and children with the latest seasonal trends.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Lightning-fast shipping with real-time order tracking directly inside the app.",
  },
  {
    icon: Heart,
    title: "Wishlist",
    description:
      "Save your favorite outfits and get notified whenever prices drop or products return.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description:
      "Multiple payment options with secure checkout and encrypted transactions.",
  },
  {
    icon: ShieldCheck,
    title: "Easy Returns",
    description:
      "Enjoy hassle-free returns and exchanges with a simple return process.",
  },
  {
    icon: Smartphone,
    title: "Mobile Experience",
    description:
      "Built for speed with a beautiful shopping experience across every device.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#080808] py-28 px-6"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full border border-white/20 px-5 py-2 text-sm text-gray-300">
            Why Choose Us
          </span>

          <h2 className="mt-8 text-4xl font-bold md:text-6xl">
            Premium Shopping Experience
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Designed with simplicity, speed, and elegance to give you a modern
            fashion shopping experience from your phone.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-white/10"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -top-24 right-0 h-40 w-40 rounded-full bg-white/10 blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-white/5 blur-2xl"></div>
                </div>

                {/* Feature Number */}
                <span className="absolute right-6 top-6 text-6xl font-bold text-white/5">
                  {(index + 1).toString().padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 transition duration-300 group-hover:bg-white group-hover:text-black">
                  <Icon className="h-8 w-8" />
                </div>

                {/* Badge */}
                <div className="mt-6 inline-flex rounded-full border border-white/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-gray-300">
                  Premium Feature
                </div>

                {/* Title */}
                <h3 className="relative mt-6 text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="relative mt-4 leading-7 text-gray-400">
                  {feature.description}
                </p>

                {/* Divider */}
                <div className="mt-8 h-[2px] w-0 bg-gradient-to-r from-white via-gray-300 to-white transition-all duration-500 group-hover:w-full" />

                {/* Button */}
                <button className="mt-8 flex items-center gap-2 text-sm font-medium text-white transition duration-300 group-hover:translate-x-2">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}