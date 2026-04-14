import { Star } from "lucide-react";
import { motion } from "framer-motion";
import useFindProducts from "../../../hooks/useFindProducts";

// ── Animation Variants ──────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between each card
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ── Skeleton Loader Component ─────────────────────────────────────

const SkeletonCard = () => (
  <div className="w-full max-w-55 flex flex-col gap-4 animate-pulse">
    <div className="w-full aspect-square bg-gray-200 rounded-md" />
    <div className="h-4 bg-gray-200 rounded w-3/4" />
    <div className="h-4 bg-gray-200 rounded w-1/2" />
    <div className="h-10 bg-gray-200 rounded-2xl w-full" />
  </div>
);

// ── Main Component ──────────────────────────────────────────────────────────

const LatestArrivels = () => {
  const { data, isPending } = useFindProducts();

  return (
    <section className="w-full min-h-screen py-16 bg-white">
      <div className="container mx-auto flex flex-col gap-10 px-6">
        
        {/* Header Section */}
       

        <main className="w-full">
          {isPending ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
              {[1, 2, 3, 4].map((n) => <SkeletonCard key={n} />)}
            </div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {data?.data?.map((product) => (
                <motion.div
                  key={product.id}
                  variants={cardVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group bg-white w-full max-w-[260px] flex flex-col gap-4"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-xl bg-gray-100 aspect-square">
                    <img
                      src={product.Image}
                      className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-95"
                      alt={product.Title}
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex flex-col gap-2">
                    <div className="flex w-full justify-between items-start">
                      <h6 className="text-lg font-bold text-gray-800 line-clamp-1">{product.Title}</h6>
                      <p className="text-[#0056D2] font-bold">${product.price}</p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={`${i < 4 ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span>4.9 (200 reviews)</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileTap={{ opacity: 0.88 }}
                    className="rounded-xl py-3 w-full bg-[#0056D2] text-white font-semibold hover:bg-[#0056D2] transition-colors duration-300 shadow-md"
                  >
                    Add to Cart
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </main>
      </div>
    </section>
  );
};

export default LatestArrivels;