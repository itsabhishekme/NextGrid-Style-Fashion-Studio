"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Smartphone } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-black py-28 px-6">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-pink-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center overflow-hidden rounded-[40px] border border-white/10 bg-white/5 px-8 py-20 text-center backdrop-blur-xl md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
            <Smartphone className="h-10 w-10 text-white" />
          </div>

          <span className="rounded-full border border-white/20 px-5 py-2 text-sm text-gray-300">
            Fashion App
          </span>

          <h2 className="mt-8 text-4xl font-bold leading-tight md:text-6xl">
            Fashion In Your Pocket
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Discover thousands of premium styles for men, women, and children.
            Shop faster, receive personalized recommendations, save your
            favourites, and enjoy a seamless mobile shopping experience.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <button className="group flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
              <Download className="h-5 w-5" />
              Download App
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>

            <button className="rounded-full border border-white/20 px-8 py-4 font-medium text-white transition hover:border-white hover:bg-white/10">
              Explore Collection
            </button>
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <div>
              <p className="text-3xl font-bold text-white">50K+</p>
              <p>Downloads</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-white">10K+</p>
              <p>Products</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-white">4.9★</p>
              <p>User Rating</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}