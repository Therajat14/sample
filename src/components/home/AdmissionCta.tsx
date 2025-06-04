import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';

const AdmissionCta: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-bermuda text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your Educational Journey With Us</h2>
            <p className="text-lg mb-8 text-white text-opacity-90">
              Our admission process is designed to be straightforward and supportive. 
              We welcome students who are eager to learn and grow in our nurturing environment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/admissions" 
                className="btn bg-white text-primary hover:bg-gray-100"
              >
                <BookOpen size={18} className="mr-2" />
                Admission Process
              </Link>
              <Link 
                to="/contact" 
                className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary"
              >
                Schedule a Visit
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-xl text-gray-800 shadow-xl"
          >
            <h3 className="text-2xl font-semibold text-primary mb-4">Admission Eligibility Quiz</h3>
            <p className="mb-6 text-gray-600">
              Not sure if your child is eligible for admission? Take our quick assessment to find out 
              which class and stream would be most suitable.
            </p>
            <Link 
              to="/admissions#eligibility-quiz" 
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              Take the Quiz Now 
              <ArrowRight size={18} className="ml-1" />
            </Link>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="font-semibold mb-2">Current Admission Status:</h4>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full inline-flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Open for All Classes
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionCta;