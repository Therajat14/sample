import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, BookOpen, HelpCircle, FileText } from 'lucide-react';

const QuickLinks: React.FC = () => {
  return (
    <section className="bg-primary text-white py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            to="/events"
            className="flex flex-col items-center p-6 bg-primary-dark rounded-lg hover:bg-opacity-90 transition-colors text-center"
          >
            <CalendarDays size={40} className="mb-3" />
            <h3 className="text-xl font-semibold mb-2">Events Calendar</h3>
            <p className="text-sm text-gray-200">View upcoming school events, holidays, and exam schedules</p>
          </Link>
          
          <Link
            to="/academics"
            className="flex flex-col items-center p-6 bg-primary-dark rounded-lg hover:bg-opacity-90 transition-colors text-center"
          >
            <BookOpen size={40} className="mb-3" />
            <h3 className="text-xl font-semibold mb-2">Academic Programs</h3>
            <p className="text-sm text-gray-200">Explore our curriculum and educational offerings</p>
          </Link>
          
          <Link
            to="/admissions#eligibility-quiz"
            className="flex flex-col items-center p-6 bg-primary-dark rounded-lg hover:bg-opacity-90 transition-colors text-center"
          >
            <HelpCircle size={40} className="mb-3" />
            <h3 className="text-xl font-semibold mb-2">Eligibility Quiz</h3>
            <p className="text-sm text-gray-200">Find out which class and stream is right for your child</p>
          </Link>
          
          <Link
            to="/parents-students#notices"
            className="flex flex-col items-center p-6 bg-primary-dark rounded-lg hover:bg-opacity-90 transition-colors text-center"
          >
            <FileText size={40} className="mb-3" />
            <h3 className="text-xl font-semibold mb-2">Latest Notices</h3>
            <p className="text-sm text-gray-200">Access important announcements and circulars</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;