import SearchBar from "../UI/InputSearch";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-primary">
      <main className="flex flex-col lg:flex-row
       items-center min-h-screen">

        {/* Text Content */}
        <div className="flex flex-col w-full 
        lg:w-1/2 gap-4 lg:gap-5 justify-center px-6 sm:px-10
         lg:pl-16 xl:pl-24 pt-24 lg:pt-0 pb-8 lg:pb-0">

          <p className="w-fit px-4 py-1 text-[#003580] font-medium
           bg-[#dde5ee] rounded-2xl text-sm 
           sm:text-base">
            Security Redefined
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl
           lg:text-6xl font-bold
            leading-tight">
            The Architectural Glass{" "}
            <br className="hidden sm:block" />
            of Digital Protection.
          </h1>

          <h4 className="w-full sm:w-[85%] lg:w-[80%] text-gray-500 text-base sm:text-lg lg:text-[20px]">
            Secure your infrastructure with Sentinel's next-generation hardware.
            Precision-engineered security layers for the modern enterprise.
          </h4>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
            <button className="px-6 py-3 font-medium text-white bg-linear-to-r from-[#0056D2] to-[#003C9E] rounded-full transition-all hover:from-[#0147a9] hover:to-[#01296a] duration-300 text-sm sm:text-base w-full sm:w-auto text-center">
              Start Your Security Journey
            </button>
            <button className="bg-gray-300 py-2 px-5 rounded-2xl font-medium text-black text-sm sm:text-base w-full sm:w-auto text-center">
              View Demo
            </button>
          </div>
        </div>

        {/* ✅ Fixed Image Div */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end px-6 sm:px-10 lg:pr-16 xl:pr-24 py-10 lg:py-16">
          <div
            className="
              w-full sm:w-[80%] lg:w-[85%]
              h-[280px] sm:h-[380px] lg:h-[500px] xl:h-[560px]
              bg-[url('/unnamed.png')] bg-center bg-no-repeat bg-cover
              rounded-2xl
              grayscale hover:grayscale-0 transition duration-300
            "
          />
        </div>

      </main>

      <SearchBar />
    </section>
  );
};

export default HeroSection;