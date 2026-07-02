import { Variants } from "framer-motion";

/**
 * Fade Up Animation
 */
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

/**
 * Fade Down Animation
 */
export const fadeDown: Variants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

/**
 * Fade Left Animation
 */
export const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

/**
 * Fade Right Animation
 */
export const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

/**
 * Scale Animation
 */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/**
 * Zoom Animation
 */
export const zoomIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

/**
 * Stagger Parent
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/**
 * Floating Animation
 */
export const floating = {
  y: [0, -12, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut",
  },
};

/**
 * Slow Rotation
 */
export const slowRotate = {
  rotate: [0, 360],
  transition: {
    duration: 25,
    repeat: Infinity,
    ease: "linear",
  },
};

/**
 * Button Hover
 */
export const buttonHover = {
  whileHover: {
    scale: 1.05,
    y: -3,
  },
  whileTap: {
    scale: 0.97,
  },
};

/**
 * Card Hover
 */
export const cardHover = {
  whileHover: {
    y: -10,
    scale: 1.02,
  },
  transition: {
    duration: 0.3,
  },
};

/**
 * Glow Pulse
 */
export const glowPulse = {
  opacity: [0.5, 1, 0.5],
  scale: [1, 1.08, 1],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

/**
 * Page Transition
 */
export const pageTransition = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
  transition: {
    duration: 0.5,
    ease: "easeInOut",
  },
};