import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Dumbbell, Microscope, Library, Music, Bus, Shield, Wifi } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';

const FacilitiesPage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero Banner */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Facilities</h1>
            <div className="w-24 h-1 bg-secondary mb-8"></div>
            <p className="text-xl max-w-3xl">
              We provide state-of-the-art facilities to ensure a conducive learning environment 
              that supports both academic excellence and overall development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="text-primary\" size={36} />,
                title: "Smart Classrooms",
                description: "Interactive digital boards, multimedia equipment, and modern teaching aids in every classroom."
              },
              {
                icon: <Microscope className="text-primary" size={36} />,
                title: "Science Laboratories",
                description: "Well-equipped Physics, Chemistry, and Biology labs with modern apparatus and safety equipment."
              },
              {
                icon: <Library className="text-primary\" size={36} />,
                title: "Library & Resource Center",
                description: "Extensive collection of books, journals, and digital resources with quiet study areas."
              },
              {
                icon: <Dumbbell className="text-primary" size={36} />,
                title: "Sports Facilities",
                description: "Large playground, indoor sports hall, and equipment for various sports activities."
              },
              {
                icon: <Music className="text-primary\" size={36} />,
                title: "Auditorium",
                description: "Modern auditorium for cultural events, seminars, and school functions."
              },
              {
                icon: <Bus className="text-primary" size={36} />,
                title: "Transport",
                description: "Fleet of buses covering major routes with GPS tracking and trained staff."
              },
              {
                icon: <Shield className="text-primary\" size={36} />,
                title: "Safety & Security",
                description: "CCTV surveillance, trained security personnel, and strict safety protocols."
              },
              {
                icon: <Wifi className="text-primary" size={36} />,
                title: "IT Infrastructure",
                description: "High-speed internet, computer labs, and digital learning resources."
              }
            ].map((facility, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <div className="bg-primary-light bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    {facility.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{facility.title}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour */}
      <section id="virtual-tour" className="section-padding bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="Virtual Tour" 
            subtitle="Take a virtual walk through our campus and explore our facilities."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="School Building"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl flex items-center justify-center">
                <button className="btn bg-white text-primary hover:bg-gray-100">
                  Start Virtual Tour
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Explore Our Campus</h3>
              <p className="text-gray-700 mb-6">
                Take an immersive virtual tour of our campus and discover the modern facilities 
                we offer. From smart classrooms to well-equipped laboratories, sports grounds to 
                the library, experience the learning environment that awaits your child.
              </p>
              
              <div className="space-y-4">
                {[
                  "Smart Classrooms with Interactive Boards",
                  "Modern Science Laboratories",
                  "Well-stocked Library",
                  "Spacious Sports Ground",
                  "Auditorium for Cultural Events",
                  "Computer Labs with Latest Equipment"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-padding">
        <div className="container">
          <SectionHeading 
            title="Campus Gallery" 
            subtitle="Visual glimpses of our facilities and infrastructure."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                title: "Science Laboratory"
              },
              {
                image: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                title: "Library"
              },
              {
                image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                title: "Computer Lab"
              },
              {
                image: "https://images.pexels.com/photos/207697/pexels-photo-207697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                title: "Sports Ground"
              },
              {
                image: "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                title: "Auditorium"
              },
              {
                image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                title: "Smart Classroom"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h4 className="text-white font-semibold p-6">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Measures */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="Safety & Security" 
            subtitle="We prioritize the safety and security of our students with comprehensive measures."
          />
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Our Safety Protocols</h3>
                <ul className="space-y-4">
                  {[
                    "24/7 CCTV surveillance throughout the campus",
                    "Trained security personnel at all entry/exit points",
                    "Regular safety drills and emergency preparedness",
                    "First-aid facilities and trained medical staff",
                    "Strict visitor verification system",
                    "Fire safety equipment and evacuation procedures",
                    "Regular maintenance of all facilities",
                    "GPS-enabled school buses with trained staff"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-3">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-6">
                <div className="bg-primary-light bg-opacity-5 rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-3">Emergency Response</h4>
                  <p className="text-gray-700">
                    Our staff is trained in emergency response procedures, and we conduct regular 
                    drills to ensure preparedness for any situation. We maintain close coordination 
                    with local emergency services.
                  </p>
                </div>
                
                <div className="bg-secondary-light bg-opacity-5 rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-3">Health & Hygiene</h4>
                  <p className="text-gray-700">
                    We maintain high standards of cleanliness and hygiene throughout the campus. 
                    Regular sanitization, proper ventilation, and clean drinking water facilities 
                    are ensured.
                  </p>
                </div>
                
                <div className="bg-accent-light bg-opacity-5 rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-3">Transport Safety</h4>
                  <p className="text-gray-700">
                    Our school buses are equipped with GPS tracking, first-aid kits, and fire 
                    extinguishers. Each bus has a trained attendant to ensure student safety 
                    during transit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacilitiesPage;