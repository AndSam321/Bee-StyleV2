import React from "react";
import { FileText, Download } from "lucide-react";

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Menu
          </h2>
          <div className="w-24 h-1 bg-[#ffa500] mx-auto mb-8"></div>
          <p className="text-gray-700">
            Check out our full menu with prices and options. We update our
            specials regularly and prices when needed, so be sure to check back
            often!
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-gray-50 rounded-lg shadow-lg p-8 max-w-2xl w-full mb-8">
            <div className="flex items-center justify-center flex-col text-center mb-6">
              <FileText size={48} className="text-[#ffa500] mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900">Menu PDF</h3>
              <p className="text-gray-700 mt-2">
                Download our complete menu with all options and prices
              </p>
            </div>

            <div className="flex justify-center">
              <a
                href="/Main_Menu_01-15-25.pdf" // In a real implementation, this would link to an actual PDF
                className="flex items-center bg-[#9D2235] hover:bg-[#8a1e2f] text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                <Download size={20} className="mr-2" />
                Download Menu PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
