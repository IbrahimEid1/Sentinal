import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../src/components/Layout/Navbar";
import SearchBar from "../../src/components/UI/InputSearch";
import LatestArrivels from "../../src/components/LatestArrivals";

const categories = [
  { id: "network", label: "Network Security", count: 12 },
  { id: "surveillance", label: "Surveillance", count: 24 },
  { id: "biometrics", label: "Biometrics", count: 8 },
  { id: "storage", label: "Encrypted Storage", count: 15 },
];

const securityOptions = [
  { id: "standard", label: "Standard Protocol" },
  { id: "enterprise", label: "Enterprise Grade" },
  { id: "military", label: "Military Spec" },
];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("surveillance");
  const [security, setSecurity] = useState({
    standard: false,
    enterprise: true,
    military: false,
  });
  const [priceMax, setPriceMax] = useState(8500);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <Navbar />
      <SearchBar />
      <main className="flex w-full min-h-[128px]">
        <aside className="w-64 shrink-0 border-r border-slate-200/80 mx-18 bg-slate-50 px-5 py-8">
          <div className="flex flex-col gap-8">
            {/* System Categories */}
            <section>
              <h2 className="mb-4 text-sm font-bold
               tracking-tight text-slate-900">
                System Categories
              </h2>
              <ul className="flex flex-col gap-1">
                {categories.map((cat) => {
                  const active = activeCategory === cat.id;
                  return (
                    <li key={cat.id}>
                      <button
                        type="button"
                        onClick={() => setActiveCategory(cat.id)}
                        className={`flex w-full items-center justify-between rounded-lg px-2 py-2.5 text-left text-sm transition-colors ${
                          active
                            ? "text-blue-700"
                            : "text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                        }`}
                      >
                        <span>{cat.label}</span>
                        <span
                          className={`min-w-8 rounded-full px-2 py-0.5 text-center text-xs font-semibold tabular-nums ${
                            active
                              ? "bg-blue-600 text-white"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {cat.count}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>

            {/* Security Level */}
            <section>
              <h2 className="mb-4 text-sm font-bold tracking-tight text-slate-900">
                Security Level
              </h2>
              <ul className="flex flex-col gap-3">
                {securityOptions.map((opt) => (
                  <li key={opt.id}>
                    <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-600 select-none">
                      <input
                        type="checkbox"
                        checked={security[opt.id]}
                        onChange={(e) =>
                          setSecurity((s) => ({
                            ...s,
                            [opt.id]: e.target.checked,
                          }))
                        }
                        className="h-[18px] w-[18px] shrink-0 cursor-pointer rounded accent-blue-600 border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500/40 focus:ring-offset-0"
                      />
                      {opt.label}
                    </label>
                  </li>
                ))}
              </ul>
            </section>

            {/* Price Range */}
            <section className="w-full">
              <h2 className="mb-4 text-sm font-bold tracking-tight text-slate-900">
                Price Range
              </h2>
              <div className="flex flex-col gap-3">
                <input
                  type="range"
                  min={500}
                  max={15000}
                  step={100}
                  value={priceMax}
                  onChange={(e) => setPriceMax(Number(e.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-blue-600 [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-slate-200 [&::-webkit-slider-thumb]:-mt-1 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:shadow"
                  aria-label="Maximum price"
                />
                <div className="flex justify-between text-xs font-semibold text-slate-500">
                  <span>$500</span>
                  <span>$15,000+</span>
                </div>
              </div>
            </section>
          </div>
        </aside>


        {/* Product grid placeholder — extend when ready */}
        <div className="min-h-[400px] flex-1 bg-white p-6" />
        <LatestArrivels/>
        
      </main>
    </motion.div>
  );
};

export default Shop;
