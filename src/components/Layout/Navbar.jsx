import React, { useState } from "react";
import { NavLink } from "react-router"; // Use -dom for web
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/shop" },
  { label: "Features", to: "/features" },
  { label: "Solutions", to: "/solutions" },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const linkVariants = {
  hidden: { opacity: 0, y: -6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

const mobileMenuVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { 
    height: "auto", 
    opacity: 1, 
    transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } 
  },
  exit: { 
    height: 0, 
    opacity: 0, 
    transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] } 
  },
};

const mobileLinkVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.06, duration: 0.28, ease: "easeOut" },
  }),
  exit: { opacity: 0, x: -8, transition: { duration: 0.15 } },
};

// --- Sub-Components ---
const Bar = ({ open, rotation, translateY, opacity = 1 }) => (
  <motion.span
    className="block w-6 h-0.5 bg-gray-700 origin-center"
    animate={{ rotate: open ? rotation : 0, y: open ? translateY : 0, opacity }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  />
);
const CustomNavLink = ({ to, label, onClick, className = "" }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `${isActive ? "text-gray-900" : "text-gray-500 hover:text-gray-800"} transition-colors font-medium ${className}`
    }
  >
    {label}
  </NavLink>
);

// --- Main Component ---
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <section className="w-full mt-5">
      <div className="flex justify-between items-center max-w-[90%] mx-auto h-10">
        {/* Logo */}
        <motion.h1
          className="font-medium text-2xl"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
        >
          Sentinal
        </motion.h1>

        {/* Desktop Nav */}
        <motion.nav
          className="hidden md:flex gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((link) => (
            <motion.div key={link.to} variants={linkVariants} whileHover={{ y: -1 }}>
              <CustomNavLink {...link} />
            </motion.div>
          ))}
        </motion.nav>

        {/* Desktop Auth */}
        <motion.div
          className="hidden md:flex gap-5 items-center"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
        >
          <motion.div whileHover={{ y: -1 }}>
            <CustomNavLink to="/login" label="Login" />
          </motion.div>
          <motion.div whileHover={{ y: -1 }} whileTap={{ opacity: 0.9 }}>
            <NavLink to="/login" className="px-4 py-2 rounded-2xl bg-[#0056D2] text-white block">
              Sign Up
            </NavLink>
          </motion.div>
        </motion.div>

        {/* Mobile Toggle */}
        <motion.button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          whileTap={{ opacity: 0.75 }}
        >
          <Bar open={menuOpen} rotation={45} translateY={8} />
          <Bar open={menuOpen} rotation={0} translateY={0} opacity={menuOpen ? 0 : 1} />
          <Bar open={menuOpen} rotation={-45} translateY={-8} />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden overflow-hidden border-t border-gray-100 mt-2"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <nav className="flex flex-col items-center gap-4 py-6">
              {[navLinks, { label: "Login", to: "/login" }].map((link, i) => (
                <motion.div
                  key={link.to}
                  custom={i}
                  variants={mobileLinkVariants}
                  whileHover={{ x: 4 }}
                >
                  <CustomNavLink {...link} onClick={() => setMenuOpen(false)} />
                </motion.div>
              ))}
              <motion.div
                custom={4}
                variants={mobileLinkVariants}
                whileHover={{ opacity: 0.95 }}
                whileTap={{ opacity: 0.85 }}
              >
                <NavLink
                  to="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="px-6 py-2 rounded-2xl bg-[#0056D2] text-white block"
                >
                  Sign Up
                </NavLink>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Navbar;