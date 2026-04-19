import { useQuery } from "@tanstack/react-query";
import FindData from "../Services/FindData";
import ProductsSurv from "../Services/Productssurv";

const useProducts = (activeCategory) => {
  
  return useQuery({
    
      queryKey: ["products" ,activeCategory],

    queryFn: async () => {
      if (activeCategory === "network") {
        console.log(activeCategory);
        return await FindData();

      }

      if (activeCategory === "surveillance") {
        console.log(activeCategory);

        return await ProductsSurv();
      }
    },

    enabled: !!activeCategory,
    staleTime: 0 
    
  }
);
};

export default useProducts;