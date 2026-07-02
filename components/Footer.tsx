"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  ShoppingBag,
  ShieldCheck,
  Truck,
  CreditCard,
  Clock,
} from "lucide-react";

const companyLinks = [
  { name: "Home", href: "#" },
  { name: "Collections", href: "#categories" },
  { name: "Features", href: "#features" },
  { name: "Download App", href: "#download" },
  { name: "New Arrivals", href: "#" },
  { name: "Trending", href: "#" },
];

const collectionLinks = [
  { name: "Men Fashion", href: "#" },
  { name: "Women Fashion", href: "#" },
  { name: "Kids Collection", href: "#" },
  { name: "Accessories", href: "#" },
  { name: "Footwear", href: "#" },
  { name: "Luxury Collection", href: "#" },
];

const supportLinks = [
  { name: "Help Center", href: "#" },
  { name: "Shipping", href: "#" },
  { name: "Returns", href: "#" },
  { name: "Track Order", href: "#" },
  { name: "FAQs", href: "#" },
  { name: "Contact Us", href: "#" },
];

const trustItems = [
  {
    icon: ShieldCheck,
    title: "100% Secure",
    subtitle: "Protected Payments",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    subtitle: "Worldwide Shipping",
  },
  {
    icon: CreditCard,
    title: "Easy Checkout",
    subtitle: "Multiple Payment Options",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    subtitle: "Always Available",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-40 h-80 w-80 rounded-full bg-violet-600/10 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        {/* Top Trust Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                  <Icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-400">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Footer */}
        <div className="mt-20 grid gap-14 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black">
                <ShoppingBag size={24} />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  NextGrid Fashion
                </h2>

                <p className="text-sm text-gray-400">
                  Premium Fashion Store
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-lg leading-8 text-gray-400">
              Discover a premium shopping experience with carefully curated
              collections for men, women, and children. Built for modern
              lifestyles with elegant design, secure payments, and lightning
              fast delivery.
            </p>

            <div className="mt-10 space-y-5 text-gray-300">
              <div className="flex items-center gap-3">
                <Mail size={18} />
                support@nextgridfashion.com
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                +91 98765 43210
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                Bengaluru, Karnataka, India
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-gray-400 transition hover:text-white"
                  >
                    {link.name}

                    <ArrowUpRight
                      size={16}
                      className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Collections
            </h3>

            <ul className="space-y-4">
              {collectionLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Support
            </h3>

            <ul className="space-y-4">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-20 rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div>
              <h2 className="text-3xl font-bold text-white">
                Stay Updated
              </h2>

              <p className="mt-3 text-gray-400">
                Get exclusive offers, new arrivals, and seasonal fashion
                updates delivered to your inbox.
              </p>
            </div>

            <div className="flex w-full max-w-xl gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-white/10 bg-black/40 px-6 py-4 text-white outline-none placeholder:text-gray-500"
              />

              <button className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-5 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} NextGrid Fashion. All rights
              reserved.
            </p>

            <div className="flex flex-wrap gap-6">
              <Link href="#" className="hover:text-white transition">
                Privacy Policy
              </Link>

              <Link href="#" className="hover:text-white transition">
                Terms & Conditions
              </Link>

              <Link href="#" className="hover:text-white transition">
                Cookie Policy
              </Link>

              <Link href="#" className="hover:text-white transition">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}