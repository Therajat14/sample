import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, Video, Phone } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-gradient-to-r from-primary to-bermuda min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/8471903/pexels-photo-8471903.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary bg-opacity-70"></div>

      <div className="container relative z-10 py-20 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-white bg-opacity-20 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                CBSE AFFILIATED SINCE 2003
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Rooted in Values, <br />
                <span className="text-accent-light">
                  Empowering Through Education
                </span>
              </h1>
              <p className="text-white text-lg md:text-xl mb-8 max-w-2xl">
                ST. J.P. Convent Public School provides quality education with a
                focus on academic excellence, moral foundation, and holistic
                development in Haridwar, Uttarakhand.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/admissions"
                  className="btn bg-white text-primary hover:bg-gray-100"
                >
                  <BookOpen size={18} className="mr-2" />
                  Apply Now
                </Link>
                <Link
                  to="/facilities#virtual-tour"
                  className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary"
                >
                  <Video size={18} className="mr-2" />
                  Virtual Tour
                </Link>
                <Link
                  to="/contact"
                  className="btn bg-secondary text-white hover:bg-secondary-dark"
                >
                  <Phone size={18} className="mr-2" />
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-5 bg-white bg-opacity-95 rounded-xl shadow-xl p-6 md:p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-4">
              School Highlights
            </h3>
            <ul className="space-y-3">
              {[
                "CBSE affiliation since 2003",
                "Regular educational visits from IIT Roorkee",
                "NSS and NCC programs for students",
                "Highly qualified faculty with extensive experience",
                "State-of-the-art facilities and infrastructure",
                "Comprehensive safety measures for student wellbeing",
                "Balanced focus on academics and extracurricular activities",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-accent rounded-full p-1 mr-3 mt-1">
                    <svg
                      className="w-3 h-3 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
