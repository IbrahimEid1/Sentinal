import { Search, ChevronDown } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center p-10 bg-gray-100">
      <div
        className="flex items-center w-full  p-4 bg-white shadow-sm 
      rounded-3xl border border-gray-100 gap-3">
      <div className="flex items-center grow bg-gray-50 rounded-lg
         px-4 py-2.5 gap-3 border border-transparent focus-within:border-blue-200
          transition-all"
        >
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search security modules..."
            className="bg-transparent outline-none w-full text-gray-600
             text-sm placeholder:text-gray-400" />
        </div>
        <button className="px-5 py-2.5 bg-gray-50 text-gray-700
         text-sm font-medium rounded-lg hover:bg-gray-100 
         transition-colors">Category</button>

        <button className="flex items-center gap-2 px-5 py-2.5
         bg-gray-50 text-gray-700 text-sm font-medium rounded-lg
          hover:bg-gray-100 transition-colors"> Price Range
          <ChevronDown size={16} className="text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
