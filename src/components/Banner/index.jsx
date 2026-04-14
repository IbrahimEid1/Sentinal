import React from "react";
import { motion } from "framer-motion";

const NewsletterBanner = () => {
  return (
    <div className="w-full p-4">
      <motion.div
        className="bg-[#0052cc] rounded-2xl p-8 md:p-16 text-center text-white flex flex-col items-center justify-center gap-6"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* العناوين */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Ready to secure your future?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Join 10,000+ enterprises who trust Sentinel for their architectural security needs.
          </p>
        </div>

        {/* نموذج الاشتراك */}
        <form 
          className="flex flex-col sm:flex-row gap-4 w-full max-w-lg mt-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 rounded-xl bg-white  text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
          <button
            type="submit"
            className="bg-white text-[#0052cc] font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors duration-200"
          >
            Subscribe
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default NewsletterBanner;