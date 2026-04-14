import React from "react";
import { Globe, Mail } from "lucide-react";
import { motion } from "framer-motion";

const footerViewport = { once: true, amount: 0.15 };

const Footer = () => {
  const footerSections = [
    {
      title: 'PRODUCT',
      links: ['Hardware', 'Software', 'Services', 'Pricing'],
    },
    {
      title: 'COMPANY',
      links: ['About Us', 'Careers', 'Press', 'Contact'],
    },
    {
      title: 'RESOURCES',
      links: ['Documentation', 'Help Center', 'Community'],
    },
    {
      title: 'LEGAL',
      links: ['Privacy', 'Terms', 'Cookie Policy'],
    },
  ];

  return (
    <footer className="w-full bg-white pt-16 pb-8 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
        <motion.div
          className="lg:col-span-2 space-y-6"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={footerViewport}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">Sentinel</h2>
          <p className="text-gray-500 leading-relaxed max-w-sm">
            Building the foundation of a safer digital world through architectural precision and hardware excellence.
          </p>
          <div className="flex gap-3">
            <div className="p-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200 cursor-pointer transition-colors">
              <Globe size={20} />
            </div>
            <div className="p-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200 cursor-pointer transition-colors">
              <Mail size={20} />
            </div>
          </div>
        </motion.div>

        {footerSections.map((section, i) => (
          <motion.div
            key={section.title}
            className="space-y-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={footerViewport}
            transition={{ duration: 0.4, delay: 0.05 * (i + 1), ease: "easeOut" }}
          >
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest">
              {section.title}
            </h3>
            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link}>
                  <a href='#'
                    className="text-gray-500 hover:text-blue-600 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-50 text-center text-gray-400 text-xs"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={footerViewport}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        © {new Date().getFullYear()} Sentinel. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;