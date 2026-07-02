"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    title: "Men",
    subtitle: "Streetwear • Formal • Casual",
    image: "/images/men.webp",
  },
  {
    title: "Women",
    subtitle: "Luxury • Ethnic • Everyday",
    image: "/images/women.webp",
  },
  {
    title: "Children",
    subtitle: "Comfort • Play • School",
    image: "/images/kids.webp",
  },
];

export default function Categories() {
  return (
    <section
      id="categories"
      className="relative py-28 px-6 lg:px-16 bg-gradient-to-b from-[#050505] via-[#0c0c0c] to-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full border border-white/20 px-4 py-2 text-sm text-gray-300 backdrop-blur-md">
            Collections
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold">
            Shop By Category
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-400 text-lg">
            Curated collections crafted for every lifestyle—from timeless
            essentials to modern fashion trends.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              {/* Image */}
              <div className="relative h-[460px] overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  priority
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-gray-300">
                  Fashion
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <h3 className="text-3xl font-bold">
                      {category.title}
                    </h3>

                    <p className="mt-2 text-gray-300">
                      {category.subtitle}
                    </p>
                  </div>

                  <button
                    type="button"
                    aria-label={`Explore ${category.title}`}
                    className="rounded-full bg-white p-3 text-black transition group-hover:rotate-45"
                  >
                    <ArrowUpRight size={22} />
                  </button>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -top-20 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}