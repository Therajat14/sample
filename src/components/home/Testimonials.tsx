import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { User, Star } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Parent of Class 10 Student',
    content: 'ST. J.P. Convent School has been instrumental in shaping my child\'s future. The teachers are dedicated and the focus on both academics and values is exceptional.',
    rating: 5,
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'Rahul Agarwal',
    role: 'Alumni (2015 Batch)',
    content: 'My years at ST. J.P. Convent were transformative. The school prepared me well for engineering at IIT. The discipline and knowledge instilled in me continue to help me in my career.',
    rating: 5,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Sunita Rawat',
    role: 'Parent of Class 7 Student',
    content: 'The school provides an excellent balance of academics, sports, and cultural activities. My daughter has flourished here with the guidance of caring teachers.',
    rating: 4,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    name: 'Vikram Negi',
    role: 'Parent of Class 12 Student',
    content: 'The personal attention given to each student is remarkable. The school\'s focus on character building alongside academics makes it stand out from others in the region.',
    rating: 5,
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const Testimonials: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container">
        <SectionHeading 
          title="What Parents & Alumni Say" 
          subtitle="Hear from our school community about their experiences at ST. J.P. Convent Public School."
        />
        
        <div className="max-w-4xl mx-auto">
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={6000}
            onChange={setActiveSlide}
            selectedItem={activeSlide}
            className="testimonial-carousel"
            renderArrowPrev={(onClickHandler, hasPrev) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white bg-opacity-70 rounded-full shadow-md hover:bg-opacity-100"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white bg-opacity-70 rounded-full shadow-md hover:bg-opacity-100"
                  aria-label="Next testimonial"
                >
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )
            }
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4 md:px-12 py-8">
                <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center mb-6">
                    <div className="mb-4 md:mb-0 md:mr-6">
                      {testimonial.image ? (
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover mx-auto md:mx-0"
                        />
                      ) : (
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto md:mx-0">
                          <User size={24} className="text-gray-500" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, index) => (
                          <Star 
                            key={index}
                            size={16} 
                            className={`${index < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote>
                    <p className="text-gray-700 italic">{testimonial.content}</p>
                  </blockquote>
                </div>
              </div>
            ))}
          </Carousel>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeSlide === index ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;