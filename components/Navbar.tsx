"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, ShoppingBag } from "lucide-react";

const navLinks = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "Categories",
    href: "#categories",
  },
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Download",
    href: "#download",
  },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-6 pt-6">
        <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-2xl">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-lg">
              <ShoppingBag className="h-5 w-5" />
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-wide text-white">
                NextGrid Style
              </h1>

              <p className="-mt-1 text-xs text-gray-400">
                Fashion Studio
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-300 transition duration-300 hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-105 lg:block">
              Download App
            </button>

            {/* Mobile Menu */}
            <button type="button" aria-label="Open navigation menu" className="rounded-full border border-white/10 p-3 text-white transition hover:bg-white/10 lg:hidden">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}