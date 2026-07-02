"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Phone3D from "./Phone3D";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[170px]" />
        <div className="absolute left-20 bottom-10 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-20 top-32 h-72 w-72 rounded-full bg-pink-500/10 blur-[120px]" />
    </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between gap-16 px-6 pt-32 pb-20 lg:flex-row lg:px-10">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-xl">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            New Summer Collection
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">
            Fashion
            <br />
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Reimagined
            </span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            Shop premium clothing for Men, Women, and Children through a
            beautifully designed mobile experience. Discover curated
            collections, fast delivery, secure checkout, and effortless style.
          </p>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row">
            <button className="group flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105">
              Shop Now
              <ArrowRight className="transition group-hover:translate-x-1" />
            </button>

            <button className="rounded-full border border-white/15 px-8 py-4 font-medium text-white transition hover:border-white hover:bg-white/10">
              View Collection
            </button>
          </div>

          <div className="mt-14 flex gap-12">
            <div>
              <h3 className="text-3xl font-bold text-white">10K+</h3>
              <p className="mt-1 text-gray-400">Products</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">50K+</h3>
              <p className="mt-1 text-gray-400">Customers</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">4.9★</h3>
              <p className="mt-1 text-gray-400">Ratings</p>
            </div>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex w-full justify-center lg:w-auto"
        >
          <Phone3D />
        </motion.div>
      </div>
    </section>
  );
}