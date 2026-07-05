"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Smartphone,
  Star,
  ShieldCheck,
  Truck,
  CreditCard,
  Apple,
  Play,
  Sparkles,
  CheckCircle2,
  Info,
} from "lucide-react";

const stats = [
  { value: "50K+", label: "Downloads" },
  { value: "10K+", label: "Products" },
  { value: "4.9★", label: "Rating" },
  { value: "120+", label: "Brands" },
];

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
  },
  {
    icon: ShieldCheck,
    title: "Secure Checkout",
  },
  {
    icon: CreditCard,
    title: "Easy Payments",
  },
];

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-black py-36">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[180px]" />

        <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[150px]" />

        <div className="absolute right-0 top-20 h-[350px] w-[350px] rounded-full bg-pink-500/10 blur-[150px]" />

        {/* Grid */}

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      </div>

      {/* Floating Particles */}

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-15, 15, -15],
            opacity: [.2, 1, .2],
          }}
          transition={{
            duration: 4 + i * .4,
            repeat: Infinity,
          }}
          className="absolute h-2 w-2 rounded-full bg-white/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .8,
          }}
          className="relative overflow-hidden rounded-[42px] border border-white/10 bg-white/[0.05] px-8 py-20 backdrop-blur-3xl md:px-20"
        >

          {/* Decorative Border */}

          <div className="absolute inset-0 rounded-[42px] border border-violet-500/20" />

          {/* Floating Cards */}

          <motion.div
            animate={{
              y: [-8, 8, -8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute left-10 top-10 hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl lg:block"
          >
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-green-400" />
              <span className="text-white">
                100% Secure
              </span>
            </div>
          </motion.div>

          <motion.div
            animate={{
              y: [8, -8, 8],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute bottom-10 right-10 hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl lg:block"
          >
            <p className="text-gray-400">
              Downloads
            </p>

            <h3 className="text-2xl font-bold text-white">
              +50K
            </h3>
          </motion.div>

          {/* Icon */}

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-pink-500 shadow-2xl shadow-violet-500/30">
            <Smartphone className="h-12 w-12 text-white" />
          </div>

          {/* Badge */}

          <div className="mt-8 flex justify-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-white/5 px-5 py-2 text-sm text-white backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-violet-400" />
              Fashion App 2026
            </span>

          </div>

          {/* Heading */}

          <h2 className="mx-auto mt-10 max-w-4xl text-center text-5xl font-black leading-tight text-white md:text-7xl">
            Fashion
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              {" "}In Your Pocket
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-gray-400">
            Discover premium fashion through a beautifully crafted mobile
            shopping experience. Personalized recommendations, lightning-fast
            checkout, secure payments, exclusive collections, and worldwide
            delivery — all in one app.
          </p>

          {/* Trust Badges */}

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            {features.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3"
              >
                <item.icon className="h-5 w-5 text-violet-400" />

                <span className="text-white">
                  {item.title}
                </span>
              </div>
            ))}

          </div>

          {/* CTA Section */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6">
            {/* Main CTA */}
            <button className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-black shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-white/20">
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gray-200/50 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative flex items-center gap-3 font-semibold">
                <Download className="h-5 w-5" />
                Download App
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>

            {/* App Store */}
            <button className="group flex min-w-[220px] items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/10">
              <div className="rounded-xl bg-white/10 p-3 transition group-hover:bg-white/20">
                <Apple className="h-7 w-7 text-white" />
              </div>

              <div className="text-left">
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  Download on the
                </p>
                <h3 className="text-lg font-semibold text-white">
                  App Store
                </h3>
              </div>
            </button>

            {/* Google Play */}
            <button className="group flex min-w-[220px] items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/10">
              <div className="rounded-xl bg-white/10 p-3 transition group-hover:bg-white/20">
                <Play className="h-7 w-7 text-white" />
              </div>

              <div className="text-left">
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  Get it on
                </p>
                <h3 className="text-lg font-semibold text-white">
                  Google Play
                </h3>
              </div>
            </button>

            {/* Learn More */}
            <button className="group flex min-w-[220px] items-center gap-4 rounded-2xl border border-indigo-500/30 bg-indigo-500/10 px-6 py-4 text-white transition-all duration-300 hover:bg-indigo-500/20">
              <div className="rounded-xl bg-indigo-500/20 p-3">
                <Info className="h-6 w-6" />
              </div>

              <div className="text-left">
                <p className="text-xs uppercase tracking-wider text-indigo-300">
                  Learn More
                </p>
                <h3 className="font-semibold">
                  Explore Features
                </h3>
              </div>

              <ArrowRight className="ml-auto transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Stats */}

          <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">

            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-center"
              >
                <h3 className="text-4xl font-bold text-white">
                  {item.value}
                </h3>

                <p className="mt-2 text-gray-400">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

          {/* Reviews */}

          <div className="mt-20 flex flex-col items-center">

            <div className="flex -space-x-3">

              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-gradient-to-br from-violet-500 to-pink-500 font-bold text-white"
                >
                  {item}
                </div>
              ))}

            </div>

            <div className="mt-6 flex">

              {[1, 2, 3, 4, 5].map((item) => (
                <Star
                  key={item}
                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                />
              ))}

            </div>

            <p className="mt-4 text-center text-gray-300">
              Trusted by over <span className="font-semibold text-white">50,000+</span> fashion lovers worldwide.
            </p>

          </div>

          {/* Bottom Trust */}

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-gray-400">

            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-green-400" />
              Secure Payments
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-green-400" />
              24/7 Support
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-green-400" />
              Free Returns
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-green-400" />
              Fast Delivery
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}