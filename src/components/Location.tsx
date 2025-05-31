import React from "react";
import { MapPin, Clock, Phone } from "lucide-react";

const Location: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Us
          </h2>
          <div className="w-24 h-1 bg-[#ffa500] mx-auto mb-8"></div>
          <p className="text-gray-700">
            We're located at the heart of the University of Arkansas and only a
            block away from Dickson Street.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="bg-gray-50 rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Hours & Location
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin
                    className="text-[#ffa500] mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">Address</h4>
                    <p className="text-gray-700">
                      492 W. Lafayette St.
                      <br />
                      Fayetteville, AR 72701
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock
                    className="text-[#ffa500] mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">Hours</h4>
                    <ul className="text-gray-700">
                      <li>
                        Monday - Friday: 10:00 AM - 2:00 PM | 4:00 PM - 8:00 PM
                      </li>
                      <li>Sunday: Closed</li>
                    </ul>
                    <p className="text-sm text-gray-500 mt-1">
                      *Hours may vary during the school year to accommodate
                      family matters.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone
                    className="text-[#ffa500] mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">Contact</h4>
                    <p className="text-gray-700">(479) 466-9060</p>
                    <p className="text-gray-700">
                      beesfoodtruckbusiness@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Campus Landmarks
              </h3>
              <p className="text-gray-700 mb-4">
                We're located near these popular campus spots:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#ffa500] mr-2"></div>
                  Dickston Street
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#ffa500] mr-2"></div>
                  Walton Arts Center
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#ffa500] mr-2"></div>
                  Fayetteville Public Library
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#ffa500] mr-2"></div>
                  Wilson Park
                </li>
              </ul>
            </div>
          </div>

          <div className="h-96 md:h-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Bee's Style Food Truck Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3225.010687370908!2d-94.16772372428414!3d36.068843408584385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c96f243dbcc83f%3A0xb6eb1298ece17511!2sBee%E2%80%99s%20Style%3A%20Egg%20Rolls%20%26%20Fried%20Rice!5e0!3m2!1sen!2sus!4v1719183646755!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
