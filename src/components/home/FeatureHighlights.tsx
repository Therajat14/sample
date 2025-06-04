import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, ShieldCheck, HeartPulse, Star, Users } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <BookOpen size={36} className="text-primary" />,
    title: 'Academic Excellence',
    description: 'Our CBSE-aligned curriculum focuses on conceptual clarity and practical knowledge application.'
  },
  {
    icon: <Award size={36} className="text-primary" />,
    title: 'Moral Foundation',
    description: 'We instill ethical values and character development alongside academic education.'
  },
  {
    icon: <ShieldCheck size={36} className="text-primary" />,
    title: 'Safety First',
    description: 'Comprehensive safety measures ensure a secure environment for all students.'
  },
  {
    icon: <Star size={36} className="text-primary" />,
    title: 'Innovation in Learning',
    description: 'Modern teaching methodologies and digital learning tools enhance educational experiences.'
  },
  {
    icon: <Users size={36} className="text-primary" />,
    title: 'Holistic Growth',
    description: 'Beyond academics, we focus on co-curricular activities and overall personality development.'
  },
  {
    icon: <HeartPulse size={36} className="text-primary" />,
    title: 'Qualified Faculty',
    description: 'Experienced educators dedicated to bringing out the best in every student.'
  }
];

const FeatureHighlights: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <SectionHeading 
          title="Why Choose Us" 
          subtitle="At ST. J.P. Convent Public School, we are committed to excellence in every aspect of education."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card p-6 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-accent-light rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;