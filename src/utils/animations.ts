/**
 * Premium animation utilities and easing curves
 * Inspired by high-end portfolio sites like landonorris.com
 */

// Premium easing curves for luxury feel
export const easings = {
  // Smooth deceleration - great for page transitions and reveals
  smooth: [0.22, 1, 0.36, 1] as const,
  
  // Playful overshoot - for buttons and interactive elements
  bounce: [0.68, -0.6, 0.32, 1.6] as const,
  
  // Quick snap - for micro-interactions
  snappy: [0.16, 1, 0.3, 1] as const,
  
  // Elastic feel - for attention-grabbing elements
  elastic: [0.175, 0.885, 0.32, 1.275] as const,
  
  // Natural movement - for scroll-triggered animations
  natural: [0.25, 0.46, 0.45, 0.94] as const,
  
  // Aggressive deceleration - for dramatic reveals
  expo: [0.19, 1, 0.22, 1] as const,
};

// Standard durations
export const durations = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
  dramatic: 0.8,
  cinematic: 1.2,
};

// Stagger delays for sequential animations
export const stagger = {
  fast: 0.02,
  normal: 0.04,
  slow: 0.08,
  dramatic: 0.12,
};

// Page transition variants
export const pageVariants = {
  initial: { 
    opacity: 0, 
    y: 20,
  },
  enter: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: durations.slow, 
      ease: easings.smooth,
    },
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { 
      duration: durations.fast, 
      ease: easings.snappy,
    },
  },
};

// Fade in from below (common reveal)
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: durations.slow, ease: easings.smooth },
  },
};

// Fade in from left
export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: durations.slow, ease: easings.smooth },
  },
};

// Fade in from right
export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: durations.slow, ease: easings.smooth },
  },
};

// Scale in (for cards, images)
export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: durations.slow, ease: easings.smooth },
  },
};

// Staggered container for lists/grids
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: stagger.normal,
      delayChildren: 0.1,
    },
  },
};

// Child item for staggered animations
export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: durations.normal, ease: easings.smooth },
  },
};

// Reveal with clip-path (for images/sections)
export const clipReveal = {
  initial: { 
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
  },
  animate: { 
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
    transition: { duration: durations.dramatic, ease: easings.expo },
  },
};

// Text character animation helper
export const getCharacterVariants = (prefersReducedMotion: boolean) => ({
  initial: { 
    opacity: 0, 
    y: prefersReducedMotion ? 0 : 50,
    rotateX: prefersReducedMotion ? 0 : -40,
  },
  animate: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
  },
});

// Hover scale effect
export const hoverScale = {
  scale: 1.05,
  transition: { duration: durations.fast, ease: easings.snappy },
};

// Tap effect
export const tapScale = {
  scale: 0.98,
  transition: { duration: durations.fast, ease: easings.snappy },
};

// 3D tilt effect parameters
export const tiltConfig = {
  maxTilt: 15,
  perspective: 1000,
  scale: 1.02,
  speed: 400,
};

// Magnetic effect parameters
export const magneticConfig = {
  strength: 0.3, // How much the element moves (0-1)
  maxDistance: 100, // Max distance for effect activation
  ease: 0.15, // Lerp factor for smooth movement
};

// Linear interpolation helper
export const lerp = (start: number, end: number, factor: number): number => {
  return start + (end - start) * factor;
};

// Get distance between two points
export const getDistance = (x1: number, y1: number, x2: number, y2: number): number => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};
