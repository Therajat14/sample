import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Users, MapPin } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import EligibilityQuiz from '../components/admissions/EligibilityQuiz';

const AdmissionsPage: React.FC = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Admissions</h1>
            <div className="w-24 h-1 bg-secondary mb-8"></div>
            <p className="text-xl max-w-3xl">
              Join our vibrant community of learners. We welcome students who are eager to grow academically, 
              socially, and personally in our nurturing environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Admission Procedure */}
      <section className="section-padding">
        <div className="container">
          <SectionHeading 
            title="Admission Procedure" 
            subtitle="A simple and transparent process to join our school community."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "Step 1",
                title: "Form Submission",
                description: "Complete and submit the application form along with required documents.",
                icon: <FileText size={36} className="text-primary" />
              },
              {
                step: "Step 2",
                title: "Entrance Assessment",
                description: "Student undergoes a basic assessment appropriate for their age group.",
                icon: <Users size={36} className="text-primary" />
              },
              {
                step: "Step 3",
                title: "Admission Confirmation",
                description: "Upon selection, complete the admission formalities and fee payment.",
                icon: <MapPin size={36} className="text-primary" />
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-primary-light bg-opacity-10 p-4 flex justify-between items-center">
                  <span className="text-primary font-bold">{step.step}</span>
                  <div className="bg-white rounded-full p-3">
                    {step.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-accent-light bg-opacity-50 rounded-xl p-6 mt-12">
            <h3 className="text-xl font-semibold mb-4">Required Documents:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Birth Certificate (original and photocopy)",
                "Previous school's Transfer Certificate (for classes II onwards)",
                "Report Card/Progress Report of previous class",
                "4 recent passport-sized photographs",
                "Residence Proof (Aadhar Card/Passport/Utility Bill)",
                "Parent ID Proof (Aadhar Card/PAN Card/Passport)"
              ].map((document, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  {document}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Application Forms */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="Download Application Forms" 
            subtitle="Access and complete the necessary forms for the admission process."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "New Admission Form",
                description: "For students seeking admission in Nursery to Class XII.",
                fileSize: "215 KB"
              },
              {
                title: "Transfer Certificate Request",
                description: "For requesting Transfer Certificate from previous school.",
                fileSize: "180 KB"
              },
              {
                title: "School Transport Request",
                description: "Application for school bus transportation services.",
                fileSize: "150 KB"
              }
            ].map((form, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h4 className="text-lg font-semibold mb-2">{form.title}</h4>
                <p className="text-gray-600 mb-4">{form.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">PDF, {form.fileSize}</span>
                  <button className="flex items-center text-primary hover:text-primary-dark font-medium">
                    <Download size={18} className="mr-1" />
                    Download
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section id="fee-structure" className="section-padding">
        <div className="container">
          <SectionHeading 
            title="Fee Structure" 
            subtitle="Transparent breakdown of our school fees for the academic year 2024-25."
          />
          
          <div className="overflow-x-auto bg-white rounded-xl shadow-md">
            <table className="w-full min-w-full">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium">Class</th>
                  <th className="px-6 py-3 text-left text-sm font-medium">Admission Fee</th>
                  <th className="px-6 py-3 text-left text-sm font-medium">Annual Fee</th>
                  <th className="px-6 py-3 text-left text-sm font-medium">Monthly Tuition</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { class: "Nursery - KG", admission: "₹5,000", annual: "₹8,000", monthly: "₹1,500" },
                  { class: "Class I - V", admission: "₹8,000", annual: "₹10,000", monthly: "₹1,800" },
                  { class: "Class VI - VIII", admission: "₹10,000", annual: "₹12,000", monthly: "₹2,200" },
                  { class: "Class IX - X", admission: "₹12,000", annual: "₹15,000", monthly: "₹2,500" },
                  { class: "Class XI - XII (Science)", admission: "₹15,000", annual: "₹18,000", monthly: "₹3,000" },
                  { class: "Class XI - XII (Commerce)", admission: "₹15,000", annual: "₹16,000", monthly: "₹2,800" },
                  { class: "Class XI - XII (Arts)", admission: "₹15,000", annual: "₹15,000", monthly: "₹2,700" }
                ].map((fee, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{fee.class}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{fee.admission}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{fee.annual}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{fee.monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 text-gray-600 space-y-2">
            <p>* Annual fee includes examination fee, library fee, and lab fee where applicable.</p>
            <p>* Transport fee varies based on distance and is charged separately.</p>
            <p>* Fee structure is subject to revision for the new academic session.</p>
          </div>
        </div>
      </section>

      {/* Transport Facilities */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="Transport Facilities" 
            subtitle="Safe and reliable transportation services for our students."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src="https://images.pexels.com/photos/2701570/pexels-photo-2701570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="School Bus" 
                  className="w-full h-full object-cover rounded-xl shadow-md"
                />
              </motion.div>
            </div>
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl font-semibold mb-4">School Bus Service</h3>
                <p className="text-gray-700 mb-6">
                  Our school provides a fleet of well-maintained buses that operate on pre-defined routes covering 
                  major areas in and around Haridwar. Each bus is equipped with safety features and is accompanied 
                  by a teacher/attendant to ensure discipline and safety of the students.
                </p>
                
                <h4 className="text-lg font-semibold mb-3">Transport Fee Structure:</h4>
                <div className="overflow-x-auto bg-white rounded-lg shadow-sm mb-6">
                  <table className="min-w-full">
                    <thead className="bg-secondary text-white">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium">Distance Range</th>
                        <th className="px-4 py-3 text-left text-sm font-medium">Monthly Fee</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {[
                        { range: "0 - 5 km", fee: "₹800" },
                        { range: "5 - 10 km", fee: "₹1,200" },
                        { range: "10 - 15 km", fee: "₹1,500" },
                        { range: "Above 15 km", fee: "₹1,800" }
                      ].map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm text-gray-700">{item.range}</td>
                          <td className="px-4 py-3 text-sm text-gray-700">{item.fee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="bg-accent-light bg-opacity-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Bus Service Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      GPS tracking system for all buses
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      First-aid kit and fire extinguisher in every bus
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      Experienced and trained drivers
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      Regular maintenance and safety checks
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Quiz */}
      <EligibilityQuiz />
    </div>
  );
};

export default AdmissionsPage;