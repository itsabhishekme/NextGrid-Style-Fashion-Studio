import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const SITE_NAME = "NextGrid Fashion";
const SITE_URL = "https://nextgridstyle-app.vercel.app/";
const SITE_TITLE =
  "NextGrid Fashion | Premium Clothing for Men, Women & Kids";
const SITE_DESCRIPTION =
  "Shop premium fashion for Men, Women, and Children. Discover luxury clothing, streetwear, casual wear, ethnic collections, footwear, accessories, and exclusive seasonal styles with the NextGrid Fashion app.";

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },

  description: SITE_DESCRIPTION,

  applicationName: SITE_NAME,

  generator: "Next.js 15",

  referrer: "origin-when-cross-origin",

  creator: SITE_NAME,

  publisher: SITE_NAME,

  category: "Fashion",

  classification: "E-Commerce",

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  keywords: [
    "NextGrid Fashion",
    "Fashion Store",
    "Online Shopping",
    "Online Clothing",
    "Fashion Marketplace",
    "Luxury Fashion",
    "Premium Fashion",
    "Designer Clothing",
    "Modern Fashion",
    "Fashion Trends",
    "Trending Clothes",
    "Latest Fashion",
    "Streetwear",
    "Urban Fashion",
    "Casual Wear",
    "Formal Wear",
    "Luxury Clothing",
    "Affordable Fashion",
    "Seasonal Fashion",
    "Summer Collection",
    "Winter Collection",
    "Autumn Collection",
    "Spring Collection",
    "Men Fashion",
    "Men Clothing",
    "Men Shirts",
    "Men T-Shirts",
    "Men Jeans",
    "Men Jackets",
    "Men Hoodies",
    "Men Blazers",
    "Men Suits",
    "Men Sneakers",
    "Women Fashion",
    "Women Clothing",
    "Women Dresses",
    "Women Sarees",
    "Women Kurtis",
    "Women Tops",
    "Women Jeans",
    "Women Handbags",
    "Women Footwear",
    "Kids Fashion",
    "Kids Clothing",
    "Children Clothing",
    "Kids Wear",
    "Baby Clothing",
    "Boys Clothing",
    "Girls Clothing",
    "Fashion Accessories",
    "Luxury Accessories",
    "Fashion App",
    "Shopping App",
    "Mobile Shopping",
    "Ecommerce",
    "Fashion Ecommerce",
    "Secure Shopping",
    "Fast Delivery",
    "Exclusive Deals",
    "Premium Collections",
    "Online Boutique",
    "Lifestyle Fashion",
    "Fashion Brand",
    "Fashion Website",
    "Next.js Fashion",
    "Tailwind CSS",
    "Fashion Landing Page",
  ],

  authors: [
    {
      name: SITE_NAME,
      url: SITE_URL,
    },
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NextGrid Fashion",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: "@nextgridfashion",
    images: ["/og-image.jpg"],
  },

  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "black-translucent",
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
    ],

    apple: [
      {
        url: "/apple-touch-icon.png",
      },
    ],

    shortcut: ["/favicon.ico"],
  },

  manifest: "/site.webmanifest",

  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
    yandex: "YOUR_YANDEX_CODE",
    yahoo: "YOUR_YAHOO_CODE",
  },

  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#050505",
    "msapplication-navbutton-color": "#050505",
    "theme-color": "#050505",
    "color-scheme": "dark",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className="bg-[#050505] text-white antialiased selection:bg-violet-600 selection:text-white">
        {children}
      </body>
      <Analytics />
      <SpeedInsights />
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  );
}