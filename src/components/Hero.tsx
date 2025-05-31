import React from "react";
import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Honeycomb Pattern Overlay */}
      <div className="absolute inset-0 w-full h-full z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgMGwxNy4zMiAxMHYyMEwyMCA0MEwyLjY4IDMwVjEwTDIwIDB6IiBmaWxsPSJyZ2JhKDI1NSwgMjE1LCAwLCAwLjEpIi8+PC9zdmc+')] opacity-50"></div>

      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <img
          src="/beesstyle2.png"
          alt="Hero Background"
          className="w-full h-full object-cover object-center z-0"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Animated bee trails */}
        <div className="absolute w-full h-full pointer-events-none">
          <div className="absolute left-1/4 top-1/4 w-2 h-2 bg-secondary rounded-full animate-[float_3s_ease-in-out_infinite]"></div>
          <div className="absolute right-1/4 top-1/3 w-2 h-2 bg-secondary rounded-full animate-[float_4s_ease-in-out_infinite_0.5s]"></div>
          <div className="absolute left-1/3 bottom-1/3 w-2 h-2 bg-secondary rounded-full animate-[float_3.5s_ease-in-out_infinite_1s]"></div>
          <div className="absolute right-1/3 bottom-1/4 w-2 h-2 bg-secondary rounded-full animate-[float_4.5s_ease-in-out_infinite_1.5s]"></div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
          Bee's Style
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl">
          Authentic asian flavors in the heart of Northwest Arkansas.
        </p>
        <button
          onClick={scrollToAbout}
          className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          Discover Our Story
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
