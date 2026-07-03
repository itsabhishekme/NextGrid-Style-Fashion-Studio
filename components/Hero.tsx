"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  Sparkles,
  ShieldCheck,
  Truck,
  CreditCard,
  Play,
} from "lucide-react";
import Phone3D from "./Phone3D";

const stats = [
  { value: "10K+", label: "Products" },
  { value: "50K+", label: "Customers" },
  { value: "4.9★", label: "Rating" },
  { value: "120+", label: "Brands" },
];

const features = [
  {
    icon: Truck,
    title: "Free Delivery",
    subtitle: "Worldwide Shipping",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    subtitle: "100% Protected",
  },
  {
    icon: CreditCard,
    title: "Easy Checkout",
    subtitle: "One Click Purchase",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505]">
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Blur Orbs */}
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[180px]" />
      <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[150px]" />
      <div className="absolute right-0 top-20 h-[400px] w-[400px] rounded-full bg-pink-500/10 blur-[150px]" />

      {/* Floating Particles */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-10, 15, -10],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 4 + i * 0.3,
            repeat: Infinity,
          }}
          className="absolute h-1.5 w-1.5 rounded-full bg-white/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between gap-20 px-6 pt-32 pb-24 lg:flex-row">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="max-w-xl"
        >

          {/* Badge */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-white/5 px-5 py-2 backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4 text-violet-400" />
            <span className="text-sm text-white">
              New Summer Collection 2026
            </span>
          </motion.div>

          {/* Heading */}

          <h1 className="mt-8 text-6xl font-black leading-none tracking-tight text-white md:text-8xl">
            Fashion
            <br />

            <span className="bg-gradient-to-r from-white via-violet-300 to-pink-400 bg-clip-text text-transparent">
              Reimagined
            </span>
          </h1>

          {/* Description */}

          <p className="mt-8 text-lg leading-8 text-gray-400">
            Experience the future of fashion shopping through an immersive,
            beautifully crafted mobile experience. Explore premium collections,
            exclusive drops, lightning-fast delivery, and effortless checkout.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-5">

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: .96 }}
              className="group flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-black"
            >
              Shop Now
              <ArrowRight className="transition group-hover:translate-x-1" />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.04,
              }}
              className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-white backdrop-blur-xl"
            >
              <Play size={18} />
              Watch Demo
            </motion.button>

          </div>

          {/* Social Proof */}

          <div className="mt-12 flex items-center gap-5">

            <div className="flex -space-x-3">
              {[1,2,3,4].map((item)=>(
                <div
                  key={item}
                  className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#050505] bg-gradient-to-br from-violet-500 to-pink-500 font-bold text-white"
                >
                  {item}
                </div>
              ))}
            </div>

            <div>
              <p className="font-semibold text-white">
                Trusted by 50,000+ Customers
              </p>

              <div className="mt-1 flex items-center gap-1">
                {[1,2,3,4,5].map((i)=>(
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}

                <span className="ml-2 text-gray-400">
                  4.9/5 Reviews
                </span>
              </div>

            </div>

          </div>

          {/* Stats */}

          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">

            {stats.map((item)=>(
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
              >
                <h3 className="text-3xl font-bold text-white">
                  {item.value}
                </h3>

                <p className="mt-2 text-gray-400">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

          {/* Features */}

          <div className="mt-16 grid gap-5 sm:grid-cols-3">

            {features.map((feature)=>(
              <motion.div
                whileHover={{
                  y:-5,
                }}
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
              >
                <feature.icon className="mb-4 h-9 w-9 text-violet-400"/>

                <h4 className="font-semibold text-white">
                  {feature.title}
                </h4>

                <p className="mt-2 text-sm text-gray-400">
                  {feature.subtitle}
                </p>

              </motion.div>
            ))}

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{
            opacity:0,
            x:80
          }}
          animate={{
            opacity:1,
            x:0
          }}
          transition={{
            duration:.9
          }}
          className="relative flex w-full justify-center lg:w-auto"
        >

          {/* Floating Cards */}

          <motion.div
            animate={{
              y:[-8,8,-8]
            }}
            transition={{
              repeat:Infinity,
              duration:4
            }}
            className="absolute left-0 top-16 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
          >
            <p className="text-sm text-gray-400">
              Weekly Sales
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              +124%
            </h3>
          </motion.div>

          <motion.div
            animate={{
              y:[8,-8,8]
            }}
            transition={{
              repeat:Infinity,
              duration:5
            }}
            className="absolute right-0 bottom-16 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
          >
            <p className="text-sm text-gray-400">
              Active Users
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              50K+
            </h3>
          </motion.div>

          <Phone3D />

        </motion.div>

      </div>
    </section>
  );
}