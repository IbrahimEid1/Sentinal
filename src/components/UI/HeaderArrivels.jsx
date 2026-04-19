import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
const HeaderArrivels = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col max-w-[91%] mx-auto md:flex-row justify-between items-start md:items-end gap-4">
      <div className="space-y-2">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-gray-900"
        >
          Latest Arrivals
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}
          className="text-gray-500 text-lg"
        >
          Our most advanced protection units just released.
        </motion.p>
      </div>
      <motion.button 
      onClick={()=>navigate("/shop")}
        whileHover={{ x: 5 }}
        className="text-[#0056D2] underline cursor-pointer font-semibold flex items-center gap-1"

      >
        Browse All Products
      </motion.button>
    </div>
  );
};

export default HeaderArrivels;
