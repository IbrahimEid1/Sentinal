import React from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const NavbarAuth = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-10 flex justify-between items-center mt-5">
      <motion.h1
        className="font-medium text-2xl"
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        Sentinal
      </motion.h1>
      <motion.button
        type="button"
        className="text-[#0056D2] underline font-medium cursor-pointer"
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        whileHover={{ opacity: 0.85 }}
        whileTap={{ opacity: 0.75 }}
        onClick={() => navigate("/")}
      >
        Back To website
      </motion.button>
    </div>
  );
};

export default NavbarAuth