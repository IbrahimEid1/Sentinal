import { Star } from "lucide-react";
import useFindProducts from "../../../hooks/useFindProducts";

const LatestArrivels = () => {
  const { data, isPending } = useFindProducts();
  console.log(data);

  return (
    <section className="w-full min-h-screen py-10">
      <div className="container mx-auto flex flex-col gap-7 px-4">
        <h1 className="text-2xl font-medium">Latest Arrivals</h1>
        <div className="w-full flex justify-between items-center">
          <h6 className="text-gray-600 text-[18px]">
            Our most advanced protection units just released.
          </h6>
          <button className="text-[#0056D2] underline cursor-pointer font-medium">
            Browse All Products
          </button>
        </div>

        <main className="w-full">
          {/* التعديل هنا: أضفنا justify-items-center لتوسيط الكاردات داخل الأعمدة */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
           
           {isPending ? <h1>LoOOOOading</h1>  : data?.data?.map((product) => {
            
              return <div
                className="Cards bg-white w-full max-w-[260px] font-medium flex flex-col gap-4 items-center text-center"
              >
                <img
                  src={product.Image}
                  className="w-full rounded-md object-cover"
                  alt=""
                />
                <div className="flex w-full justify-between items-center">
                  <h6 className="text-[18px]">{product.Title}</h6>
                  <p className="text-[#0056D2]">{product.price}</p>
                </div>
                <p className="flex text-sm items-center font-medium gap-1">
                  <Star
                    width={20}
                    className="fill-amber-300 text-white hover:text-amber-300"
                  />
                  4.9 (200) review
                </p>
                {/* جعلنا الزرار يأخذ عرض مناسب ويتوسط */}
                <button className="rounded-2xl py-3 w-full bg-gray-300 text-black hover:bg-gray-400 transition-colors">
                  Add to Cart
                </button>
              </div>
            })}
          </div>
        </main>
      </div>
    </section>
  );
};

export default LatestArrivels;
