import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ethan Shoe",
    role: "Local Guide",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjXVKA2-1MD9ywFq8PDmFedOMHGl1iXFZ4JZGzEny9BZzpr-JTjQJA=w72-h72-p-rp-mo-ba7-br100",
    content:
      "One of the best food trucks I've ever been to. I got the orange chicken and fried rice. The chicken was pretty unique but in a good way, I loved it. I also tried the crab rangoons and they were also great, and fairly priced.",
    rating: 5,
  },
  {
    id: 2,
    name: "Max Emerson",
    role: "Local Guide",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjX-RVVov1oddUcRu4CN5FuwckdT17U0OSRN10SpKwSnAa9QyWI=w72-h72-p-rp-mo-ba2-br100",
    content:
      "The quality of food and service at Bee's Style is exceptional. I bring colleagues from other universities here Bees has been a long time favorite spot to grab food at for me, I have been going since at least 2021. The food is excellent, and they have some of the best crab rang goons in Fayetteville. I usually get some boba and either the pad Thai or pad see ew, both are great. Prices are easy on the wallet and you get extensive portions. Service is quick and there is seating and parking there. I would highly recommend this if you are looking for a place to grab dinner to bring home. they visit campus.",
    rating: 5,
  },
  {
    id: 3,
    name: "Kiera Michailoff",
    role: "Localompson Resident",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjXlJ8FcnRDYmFHC_QBj9tktf6jX6VZgLiAdG14OF6zQM-sj6yzr=w72-h72-p-rp-mo-br100",
    content:
      "Delicious, fresh food and great prices! Ordered several dishes this evening for take out and they were all ready within 15 minutes. The food was still warm and fresh when we got home, and plenty of leftovers for tomorrow. We will definitely be back!",
    rating: 5,
  },
  {
    id: 4,
    name: "Worth Sparkman",
    role: "Reporter for Axios' Northwest Arkansas daily newsletter",
    avatar:
      "https://www.axios.com/_next/image?url=https%3A%2F%2Fimages.axios.com%2F0GHFbtgs4sjXr7iZ5KQ2OApBZEg%3D%2F328x0%2Fsmart%2F2021%2F10%2F13%2F1634135104093.png&w=256&q=75",
    content:
      "Bee's Style in Fayetteville serves up irresistible chicken fried rice.",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
  };

  const goToPrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + testimonials.length) % testimonials.length
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section id="testimonials" className="py-20 bg-secondary-light/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            What People Say
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-accent">
            Hear from our satisfied customers in the community
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-center mb-6">
                      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-accent">
                          {testimonial.name}
                        </h3>
                        <p className="text-accent-light">{testimonial.role}</p>
                        <div className="flex mt-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              size={18}
                              className="text-secondary fill-current"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-accent text-lg italic">
                      "{testimonial.content}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3 md:-translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
          >
            <ChevronLeft size={24} className="text-accent" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-3 md:translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
          >
            <ChevronRight size={24} className="text-accent" />
          </button>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full focus:outline-none transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
