import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Bee's Style</h3>
            <p className="text-gray-300 mb-6">
              Follow us on social media and use #beesstyle to share your
              experiences with us!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/beesstylefoodtruck/"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/beesstylear/"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", id: "home" },
                { name: "About Us", id: "about" },
                { name: "Food Gallery", id: "gallery" },
                { name: "Menu", id: "menu" },
                { name: "Testimonials", id: "testimonials" },
                { name: "Location", id: "location" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Find us at:</h3>
            <address className="not-italic text-gray-300 space-y-3">
              <p>492 W Lafayette St.</p>
              <p>Fayetteville, AR 72701</p>
              <p>Phone: (479) 466-9060</p>
              <p>Email: beesfoodtruckbusiness@gmail.com</p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} Created by Andrew Samountry</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
