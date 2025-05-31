import React, { useState } from "react";
import { X } from "lucide-react";

const foodItems = [
  {
    id: 1,
    name: "Orange Chicken Fried Rice",
    image: "/food/Orange.jpg",
    description:
      "Freshly fried chicken tossed in our homemade orange sauce. Served with our signature fried rice.",
    objectPosition: "center 30%",
  },
  {
    id: 2,
    name: "Chicken Stirfry",
    image: "/food/stirfry.jpg",
    description:
      "Grilled Chicken and veggies tossed in our homemade Ginger Sauce. Served with a choice of rice or fried rice.",
    objectPosition: "center 40%",
  },
  {
    id: 3,
    name: "Egg Rolls",
    image: "/food/eggrolls.jpg",
    description:
      "Crispy Eggs Rolls filled with seasoned vegetables and pork. (Vegan option available!)",
    objectPosition: "center 70%",
  },
  {
    id: 4,
    name: "Crab Rangoons",
    image: "/food/crab.jpg",
    description:
      "Crispy fried wontons stuffed with cream cheese and crab meat.",
    objectPosition: "center 40%",
  },
  {
    id: 5,
    name: "Spring Rolls",
    image: "/food/spring.jpg",
    description:
      "Fresh Spring Rolls with shrimp, lettuce, and vermicelli noodles. (Vegan/Tofu option available!)",
    objectPosition: "center 90%",
  },
  {
    id: 6,
    name: "Pad See Ew",
    image: "/food/pad.jpg",
    description:
      "Stir Fried soy sauce noodles with choice of meat, veggies, and egg.",
  },
];

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const openModal = (id: number) => {
    setSelectedItem(id);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Food Gallery
          </h2>
          <div className="w-24 h-1 bg-[#9D2235] mx-auto mb-8"></div>
          <p className="text-gray-700">Explore our most popular dishes!</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {foodItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
              onClick={() => openModal(item.id)}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  style={{
                    objectPosition: item.objectPosition || "center center",
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedItem !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto">
              <div className="relative">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                >
                  <X size={24} className="text-gray-900" />
                </button>
                <img
                  src={
                    foodItems.find((item) => item.id === selectedItem)?.image
                  }
                  alt={foodItems.find((item) => item.id === selectedItem)?.name}
                  className="w-full h-96 object-cover"
                  style={{
                    objectPosition:
                      foodItems.find((item) => item.id === selectedItem)
                        ?.objectPosition || "center center",
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {foodItems.find((item) => item.id === selectedItem)?.name}
                </h3>
                <p className="text-gray-700 text-lg">
                  {
                    foodItems.find((item) => item.id === selectedItem)
                      ?.description
                  }
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
