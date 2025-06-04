import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Star, Users, Microscope, Code } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';

const AcademicsPage: React.FC = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Academics</h1>
            <div className="w-24 h-1 bg-secondary mb-8"></div>
            <p className="text-xl max-w-3xl">
              Our CBSE-aligned curriculum focuses on conceptual understanding, practical knowledge, 
              and holistic development of students.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="section-padding">
        <div className="container">
          <SectionHeading 
            title="Curriculum Overview" 
            subtitle="Our comprehensive curriculum is designed to nurture academic excellence and develop well-rounded personalities."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="text-primary\" size={36} />,
                title: "Primary Section (I-V)",
                description: "Foundation years focusing on basic concepts, language skills, and creative expression through activity-based learning."
              },
              {
                icon: <Users className="text-primary" size={36} />,
                title: "Middle Section (VI-VIII)",
                description: "Building on fundamentals while introducing specialized subjects and encouraging critical thinking."
              },
              {
                icon: <Star className="text-primary\" size={36} />,
                title: "Secondary (IX-X)",
                description: "Preparation for board examinations with emphasis on core subjects and practical applications."
              },
              {
                icon: <Microscope className="text-primary" size={36} />,
                title: "Science Stream (XI-XII)",
                description: "Advanced studies in Physics, Chemistry, Biology/Mathematics for aspiring scientists and engineers."
              },
              {
                icon: <Code className="text-primary\" size={36} />,
                title: "Commerce Stream (XI-XII)",
                description: "Comprehensive business education including Accountancy, Business Studies, and Economics."
              },
              {
                icon: <Award className="text-primary" size={36} />,
                title: "Arts Stream (XI-XII)",
                description: "Diverse humanities subjects including History, Political Science, Geography, and Literature."
              }
            ].map((section, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-primary-light bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  {section.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
                <p className="text-gray-600">{section.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="Special Programs" 
            subtitle="Enriching educational experiences beyond the standard curriculum."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="IIT Roorkee Visit" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">IIT Roorkee Collaboration</h3>
                <p className="text-gray-600 mb-4">
                  Regular educational visits and workshops conducted by IIT Roorkee faculty members, 
                  providing students with exposure to advanced concepts and research opportunities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Interactive sessions with professors
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Laboratory visits and demonstrations
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Career guidance workshops
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/8617769/pexels-photo-8617769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Digital Learning" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Digital Learning Initiative</h3>
                <p className="text-gray-600 mb-4">
                  Integration of modern technology in education through smart classrooms, digital 
                  resources, and interactive learning platforms.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Smart classrooms with interactive boards
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Online learning resources and assessments
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Computer literacy programs
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Co-Curricular Activities */}
      <section className="section-padding">
        <div className="container">
          <SectionHeading 
            title="Co-Curricular Activities" 
            subtitle="Developing leadership, discipline, and social responsibility through various programs."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h3 className="text-2xl font-semibold mb-4">NCC (National Cadet Corps)</h3>
              <p className="text-gray-600 mb-4">
                Character building program focusing on leadership, discipline, and patriotism through:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Regular drills and physical training
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Camps and adventure activities
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Community service projects
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  National integration camps
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h3 className="text-2xl font-semibold mb-4">NSS (National Service Scheme)</h3>
              <p className="text-gray-600 mb-4">
                Social service program developing community awareness and responsibility through:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Community outreach programs
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Environmental awareness campaigns
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Health and hygiene workshops
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Disaster management training
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicsPage;