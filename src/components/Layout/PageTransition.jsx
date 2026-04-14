import { motion } from "framer-motion";

/**
 * Route wrapper: fade only — no scale, preserves layout footprint of children.
 */
export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } }}
      exit={{ opacity: 0, transition: { duration: 0.22, ease: [0.25, 0.1, 0.25, 1] } }}
    >
      {children}
    </motion.div>
  );
}
