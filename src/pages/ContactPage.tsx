import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, this would send the data to a backend
    console.log('Form data:', formData);
    setFormSubmitted(true);
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <div className="w-24 h-1 bg-secondary mb-8"></div>
            <p className="text-xl max-w-3xl">
              We're here to answer your questions and help you learn more about ST. J.P. Convent Public School.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              className="bg-white rounded-xl shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="bg-primary-light bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <MapPin size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Location</h3>
              <p className="text-gray-600">
                Tikkampur, Sultanpur<br />
                Haridwar, Uttarakhand<br />
                India
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="bg-secondary-light bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Phone size={28} className="text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Phone Numbers</h3>
              <p className="text-gray-600 mb-2">Main Office: +91-9761584758</p>
              <p className="text-gray-600 mb-2">Admissions: +91-8194001510</p>
              <p className="text-gray-600 mb-2">Secondary Office: +91-591252045</p>
              <p className="text-gray-600">Principal's Office: +91-5912436125</p>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="bg-bermuda-light bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Clock size={28} className="text-bermuda" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Office Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday:</span>
                  <span className="text-gray-800 font-medium">8:00 AM - 3:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday:</span>
                  <span className="text-gray-800 font-medium">8:00 AM - 12:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday:</span>
                  <span className="text-gray-800 font-medium">Closed</span>
                </div>
                <p className="text-gray-500 text-sm pt-2">
                  *Administrative office timing. School hours may vary by grade level.
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading 
                title="Get In Touch" 
                subtitle="Send us a message and we'll get back to you as soon as possible."
                centered={false}
              />
              
              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 rounded-full p-2 mr-4">
                      <svg className="w-6 h-6 text-green-600\" fill="none\" stroke="currentColor\" viewBox="0 0 24 24\" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round\" strokeLinejoin="round\" strokeWidth="2\" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-green-800">Message Sent Successfully!</h3>
                  </div>
                  <p className="text-green-700 mb-4">
                    Thank you for reaching out to ST. J.P. Convent Public School. We have received your message and 
                    will respond to your inquiry as soon as possible, typically within 24-48 hours on business days.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: '',
                        message: ''
                      });
                    }}
                    className="text-green-700 font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      >
                        <option value="">Select a subject</option>
                        <option value="Admission Inquiry">Admission Inquiry</option>
                        <option value="Fee Structure">Fee Structure</option>
                        <option value="Transport Query">Transport Query</option>
                        <option value="General Information">General Information</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    <Send size={18} className="mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <SectionHeading 
                title="Find Us" 
                subtitle="Visit our campus in Haridwar, Uttarakhand."
                centered={false}
              />
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden h-96">
                {/* Embedding a Google Maps iframe */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55292.135024124634!2d78.09768565820313!3d29.94511485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909470eb8ee57c9%3A0xeee859ae1f1b64c0!2sHaridwar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1651899018903!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ST. J.P. Convent Public School Location"
                ></iframe>
              </div>
              
              <div className="mt-6 bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Mail size={20} className="text-primary mr-2" />
                  Email Us Directly
                </h3>
                <div className="space-y-3">
                  <p className="flex items-center">
                    <span className="w-32 font-medium">General Inquiries:</span>
                    <a href="mailto:stjpc2003@gmail.com" className="text-primary hover:underline">
                      stjpc2003@gmail.com
                    </a>
                  </p>
                  <p className="flex items-center">
                    <span className="w-32 font-medium">Admissions:</span>
                    <a href="mailto:admissions@stjp.edu" className="text-primary hover:underline">
                      admissions@stjp.edu
                    </a>
                  </p>
                  <p className="flex items-center">
                    <span className="w-32 font-medium">Principal:</span>
                    <a href="mailto:principal@stjp.edu" className="text-primary hover:underline">
                      principal@stjp.edu
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common queries about our school and admission process."
          />
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What is the school timing?",
                answer: "School timing varies by grade level. Generally, school hours are from 8:00 AM to 2:00 PM for primary classes and 8:00 AM to 3:00 PM for secondary classes, Monday through Saturday."
              },
              {
                question: "Is there a school bus service available?",
                answer: "Yes, we provide bus transportation services covering major areas in and around Haridwar. The fee varies depending on the distance from school. Each bus has an attendant to ensure student safety."
              },
              {
                question: "What is the medium of instruction?",
                answer: "The primary medium of instruction is English. However, we give due importance to Hindi and Sanskrit as per CBSE guidelines."
              },
              {
                question: "When does the admission process begin?",
                answer: "The main admission cycle begins in January for the academic year starting in April. However, we accept applications throughout the year based on seat availability."
              },
              {
                question: "Does the school offer scholarships?",
                answer: "Yes, we offer merit scholarships to academically outstanding students and special scholarships for students excelling in sports or cultural activities. We also have provisions for economically disadvantaged students."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer p-6">
                    <span className="text-lg">{faq.question}</span>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;