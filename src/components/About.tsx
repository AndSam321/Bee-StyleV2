import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-[#ffa500] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              How It All Began
            </h3>
            <p className="font-inter text-gray-700 leading-relaxed text-lg">
              Bee's Style started as a dream to bring authentic, homemade
              flavors to the vibrant community of the University of Arkansas and
              the greater NWA area. Founded in 2018, our food truck quickly
              became a favorite spot for everyone of all backgrounds.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              What began as a small operation with just a handful of family
              recipes has grown into a beloved Fayetteville hot-spot, serving
              thousands of hungry Razorback fans and local visitors each year.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Whether you're a stressed college student grabbing a quick bite
              between classes, a family celebrating after a Razorback victory,
              or even just friends hanging out, Bee's Style is here to fuel
              those important moments with food made from the heart.
            </p>
          </div>

          <div className="rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105">
            <img
              src="/about.jpg"
              alt="Bee's Style Food Truck"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <div className="w-24 h-1 bg-[#ffa500] mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Ingredients",
                description:
                  "We source the freshest ingredients from local suppliers to ensure every dish exceeds expectations.",
              },
              {
                title: "Community First",
                description:
                  "We proudly support the University of Arkansas community and and the greater NWA area!",
              },
              {
                title: "Family Recipes",
                description:
                  "Every item on our menu is crafted by Bee herself. From our family to yours, we bring you the flavors of home.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
