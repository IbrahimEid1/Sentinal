import { motion } from "framer-motion";
import SearchBar from "../UI/InputSearch";

// ── Animation Configuration ──────────────────────────────────────────────────

const animations = {
  container: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.12, delayChildren: 0.15 } 
    },
  },
  fadeUp: (delay = 0) => ({
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
    },
  }),
  badge: {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
  image: {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 },
    },
  },
  button: {
    primary: {
      whileHover: { opacity: 0.92, transition: { duration: 0.2 } },
      whileTap: { opacity: 0.85 },
    },
    secondary: {
      whileHover: { opacity: 0.95, backgroundColor: "#e5e7eb" },
      whileTap: { opacity: 0.88 },
    },
  },
};

// ── Component ────────────────────────────────────────────────────────────────

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-primary overflow-hidden">
      <main className="flex flex-col lg:flex-row items-center min-h-screen max-w-full mx-auto">
        
        {/* ── Text Content ── */}
        <motion.div
          className="flex flex-col w-full lg:w-1/2 gap-6 justify-center px-6 sm:px-10 lg:pl-16 xl:pl-24 pt-32 lg:pt-0"
          variants={animations.container}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={animations.badge}
            className="w-fit px-4 py-1.5 text-[#003580] 
            font-semibold bg-[#dde5ee] rounded-full text-xs uppercase tracking-wider"
          >
            Security Redefined
          </motion.span>

          <motion.h1
            variants={animations.fadeUp(0)}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-gray-900"
          >
            The Architectural Glass <br className="hidden md:block" />
            of <span className="text-[#0056D2]">Digital Protection.</span>
          </motion.h1>

          <motion.p
            variants={animations.fadeUp(0.1)}
            className="max-w-xl text-gray-500 text-lg sm:text-xl leading-relaxed"
          >
            Secure your infrastructure with Sentinel's next-generation hardware. 
            Precision-engineered security layers for the modern enterprise.
          </motion.p>

          <motion.div
            variants={animations.fadeUp(0.2)}
            className="flex flex-col sm:flex-row gap-4 mt-2"
          >
            <motion.button
              {...animations.button.primary}
              className="px-8 py-4 font-bold text-white
               bg-linear-to-r from-[#0056D2] to-[#003C9E] 
               rounded-full shadow-lg shadow-blue-200
                text-center"
            >
              Start Your Journey
            </motion.button>

            <motion.button
              {...animations.button.secondary}
              className="px-8 py-4 rounded-full font-bold text-gray-700 bg-gray-200 text-center transition-colors"
            >
              View Demo
            </motion.button>
          </motion.div>
        </motion.div>

        {/* ── Visual Content ── */}
        <motion.div
          className="w-full lg:w-[40%] flex items-center justify-center p-6 lg:p-12 xl:p-20"
          variants={animations.image}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="relative w-full aspect-square sm:aspect-video lg:aspect-4/5 xl:aspect-square 
                       bg-[url('/unnamed.png')] bg-center bg-cover rounded-3xl shadow-2xl
                       grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            whileHover={{ opacity: 0.98 }}
          >
            {/* Subtle Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent rounded-3xl pointer-events-none" />
          </motion.div>
        </motion.div>
      </main>

      {/* ── Floating Search Bar ── */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-2xl px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
      </motion.div>
        <SearchBar />
    </section>
  );
};

export default HeroSection;