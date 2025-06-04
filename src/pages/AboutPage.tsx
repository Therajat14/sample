import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Users, History } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';

const AboutPage: React.FC = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our School</h1>
            <div className="w-24 h-1 bg-secondary mb-8"></div>
            <p className="text-xl max-w-3xl">
              ST. J.P. Convent Public School has been a leading educational institution in Haridwar since 2003, 
              dedicated to nurturing young minds and building future leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="School building" 
                  className="rounded-xl shadow-lg w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg">
                  <p className="font-bold text-3xl">Since</p>
                  <p className="font-bold text-4xl">2003</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <History size={28} className="text-primary mr-3" />
                Our History
              </h2>
              <p className="text-gray-700 mb-4">
                ST. J.P. Convent Public School was established in 2003 with a vision to provide quality education 
                in the Haridwar region of Uttarakhand. Starting with a modest campus and limited enrollment, the 
                school has grown significantly over the years.
              </p>
              <p className="text-gray-700 mb-4">
                In 2003, we received our CBSE affiliation, marking a significant milestone in our journey. Since then,
                we have continuously evolved our teaching methodologies and infrastructure to meet the changing needs 
                of education while preserving our core values.
              </p>
              <p className="text-gray-700">
                Today, ST. J.P. Convent Public School stands as one of the premier educational institutions in the 
                region, known for its academic excellence, value-based education, and nurturing environment that 
                helps students realize their full potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="Our Mission & Core Values" 
            subtitle="Guiding principles that shape our approach to education and student development."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                <Award size={24} className="mr-3" />
                Our Mission
              </h3>
              <p className="text-gray-700">
                At ST. J.P. Convent Public School, our mission is to provide a holistic education that balances 
                academic excellence with character development. We strive to create an environment that fosters 
                intellectual curiosity, personal growth, and social responsibility, empowering our students to 
                become lifelong learners and responsible citizens who contribute positively to society.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                <BookOpen size={24} className="mr-3" />
                Our Vision
              </h3>
              <p className="text-gray-700">
                We envision ST. J.P. Convent Public School as a center of educational excellence that nurtures 
                future leaders equipped with knowledge, skills, values, and the confidence to excel in a rapidly 
                changing global society. We aspire to be recognized not only for our academic achievements but 
                also for our commitment to developing well-rounded individuals.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Academic Excellence',
                description: 'We are committed to providing high-quality education that emphasizes conceptual understanding and practical application of knowledge.'
              },
              {
                title: 'Moral Foundation',
                description: 'We instill ethical values and principles that guide students to make responsible choices throughout their lives.'
              },
              {
                title: 'Safety First',
                description: 'We maintain a secure environment where students can learn and grow without compromising their well-being.'
              },
              {
                title: 'Innovation in Learning',
                description: 'We embrace modern teaching methodologies and technologies to enhance the educational experience.'
              },
              {
                title: 'Holistic Growth',
                description: 'We focus on developing all aspects of a student\'s personality, including academic, physical, social, and emotional domains.'
              },
              {
                title: 'Qualified Faculty',
                description: 'We take pride in our team of experienced and dedicated educators who are committed to bringing out the best in every student.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h4 className="text-lg font-semibold text-primary mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="section-padding">
        <div className="container">
          <SectionHeading 
            title="Principal's Message" 
            subtitle="A word from our educational leader on our philosophy and approach."
          />
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-4 lg:col-span-3">
                <img
                  src="https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="School Principal"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="md:col-span-8 lg:col-span-9 p-6 md:p-8">
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-semibold">Mrs. Anita Sharma</h3>
                  <span className="ml-3 px-3 py-1 bg-primary-light bg-opacity-10 text-primary text-sm rounded-full">
                    Principal
                  </span>
                </div>
                <p className="text-gray-500 mb-2">M.Sc., B.Ed. with 25 years of teaching experience</p>
                <div className="border-l-4 border-primary pl-4 italic text-gray-600 my-4">
                  "Education is not just about academic achievements; it's about nurturing young minds to become 
                  responsible, confident, and compassionate individuals who can make a positive difference in the world."
                </div>
                <p className="text-gray-700 mb-4">
                  Dear Parents and Students,
                </p>
                <p className="text-gray-700 mb-4">
                  It gives me immense pleasure to welcome you to ST. J.P. Convent Public School. Our school stands 
                  as a beacon of learning and character development in the Haridwar region. We believe that every 
                  child is unique and has the potential to excel in their own way.
                </p>
                <p className="text-gray-700">
                  At ST. J.P. Convent, we strive to create an environment where learning is enjoyable and meaningful, 
                  where students are encouraged to ask questions and explore ideas, and where their talents and 
                  abilities are recognized and nurtured. Our dedicated team of educators works tirelessly to ensure 
                  that each student receives personalized attention and guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Committee */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="Our Management Committee" 
            subtitle="Meet the dedicated team guiding our institution towards excellence."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Mr. Rajendra Prasad",
                position: "Chairman",
                image: "https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                description: "Founder of the school with over 30 years of experience in educational administration."
              },
              {
                name: "Dr. Vijay Kumar",
                position: "Vice Chairman",
                image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                description: "Former professor at IIT Roorkee with a passion for improving education in the region."
              },
              {
                name: "Mrs. Sunita Devi",
                position: "Secretary",
                image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                description: "Educational consultant with expertise in CBSE curriculum and policy implementation."
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover object-center"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
                  <p className="text-primary mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;