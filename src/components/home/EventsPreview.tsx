import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

interface Event {
  id: number;
  title: string;
  date: string;
  time?: string;
  description: string;
  category: 'academic' | 'cultural' | 'sports' | 'other';
}

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: 'Annual Science Exhibition',
    date: 'March 15, 2025',
    time: '10:00 AM - 4:00 PM',
    description: 'Students will showcase their innovative science projects with special judges from IIT Roorkee.',
    category: 'academic'
  },
  {
    id: 2,
    title: 'Parent-Teacher Meeting',
    date: 'March 25, 2025',
    time: '9:00 AM - 1:00 PM',
    description: 'Quarterly PTM to discuss student progress and address parent concerns.',
    category: 'academic'
  },
  {
    id: 3,
    title: 'Inter-School Sports Tournament',
    date: 'April 5-7, 2025',
    description: 'Annual sports competition featuring basketball, cricket, and athletics events with neighboring schools.',
    category: 'sports'
  }
];

const EventsPreview: React.FC = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <SectionHeading 
          title="Upcoming Events" 
          subtitle="Stay updated with the latest activities and important dates at our school."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingEvents.map(event => (
            <div key={event.id} className="card hover:shadow-lg transition-shadow">
              <div className={`h-2 ${
                event.category === 'academic' ? 'bg-primary' : 
                event.category === 'cultural' ? 'bg-secondary' : 
                event.category === 'sports' ? 'bg-bermuda' : 'bg-accent'
              }`}></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    event.category === 'academic' ? 'bg-primary-light bg-opacity-10 text-primary' : 
                    event.category === 'cultural' ? 'bg-secondary-light bg-opacity-10 text-secondary' : 
                    event.category === 'sports' ? 'bg-bermuda-light bg-opacity-10 text-bermuda' : 
                    'bg-accent-light bg-opacity-20 text-gray-700'
                  }`}>
                    {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={14} className="mr-1" />
                    <span>{event.date}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                {event.time && <p className="text-sm text-gray-500 mb-2">{event.time}</p>}
                <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                
                <Link 
                  to={`/events#event-${event.id}`} 
                  className="inline-flex items-center text-primary font-medium hover:text-primary-dark"
                >
                  Read more 
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/events" 
            className="btn btn-outline"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsPreview;