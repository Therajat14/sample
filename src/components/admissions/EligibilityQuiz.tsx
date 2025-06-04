import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  answerKey?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
}

const EligibilityQuiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: "What is the current age of your child?",
      options: ["3-5 years", "6-10 years", "11-14 years", "15-18 years"],
    },
    {
      id: 2,
      question: "Which grade/class is your child currently in?",
      options: ["Preschool/Kindergarten", "Class 1-5", "Class 6-8", "Class 9-12", "Not currently enrolled"],
    },
    {
      id: 3,
      question: "Which academic stream is your child most interested in?",
      options: ["Science (PCM/PCB)", "Commerce", "Arts/Humanities", "Not decided yet", "Not applicable (for younger students)"],
    },
    {
      id: 4,
      question: "What extracurricular activities is your child interested in?",
      options: ["Sports", "Arts & Culture", "Technology & Robotics", "Debate & Public Speaking", "Multiple interests"],
    },
    {
      id: 5,
      question: "How far do you live from our school in Haridwar?",
      options: ["Less than 5 km", "5-10 km", "10-20 km", "More than 20 km"],
    },
  ];
  
  const handleAnswerSelect = (answer: string) => {
    setAnswers({ ...answers, [questions[currentQuestionIndex].id]: answer });
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };
  
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    // In a real application, this would send the data to a backend
  };
  
  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResult(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
    });
    setFormSubmitted(false);
  };
  
  // Determine recommendation based on answers
  const getRecommendation = () => {
    const age = answers[1];
    const currentGrade = answers[2];
    const stream = answers[3];
    
    if (age === "3-5 years") {
      return "Nursery to UKG";
    } else if (age === "6-10 years") {
      return "Class 1 to Class 5";
    } else if (age === "11-14 years") {
      return "Class 6 to Class 8";
    } else if (age === "15-18 years") {
      if (stream === "Science (PCM/PCB)") {
        return "Class 9 to 12 (Science Stream)";
      } else if (stream === "Commerce") {
        return "Class 9 to 12 (Commerce Stream)";
      } else if (stream === "Arts/Humanities") {
        return "Class 9 to 12 (Arts Stream)";
      } else {
        return "Class 9 to 12";
      }
    } else {
      return "Please contact our admissions office for a personalized assessment";
    }
  };

  return (
    <section id="eligibility-quiz" className="section-padding bg-gray-50">
      <div className="container">
        <SectionHeading 
          title="Admission Eligibility Quiz" 
          subtitle="Take this short quiz to determine the most suitable class and stream for your child."
        />
        
        <div className="max-w-2xl mx-auto">
          {!showResult ? (
            <motion.div
              key={currentQuestionIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-md p-6 md:p-8"
            >
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
                  <span>{Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary rounded-full h-2 transition-all duration-300"
                    style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-6">{questions[currentQuestionIndex].question}</h3>
              
              <div className="space-y-3">
                {questions[currentQuestionIndex].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(option)}
                    className="w-full text-left p-4 border rounded-lg hover:border-primary hover:bg-primary-light hover:bg-opacity-5 transition-colors"
                  >
                    <span className="inline-block w-6 h-6 mr-3 rounded-full bg-gray-100 text-center text-sm">
                      {String.fromCharCode(65 + index)}
                    </span>
                    {option}
                  </button>
                ))}
              </div>
              
              {currentQuestionIndex > 0 && (
                <button
                  onClick={handlePrevQuestion}
                  className="mt-6 text-primary hover:text-primary-dark font-medium"
                >
                  &larr; Previous Question
                </button>
              )}
            </motion.div>
          ) : formSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md p-6 md:p-8 text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-6">
                Our admissions team will contact you shortly with more information about the admission process for {getRecommendation()}.
              </p>
              
              <button
                onClick={resetQuiz}
                className="btn btn-primary"
              >
                Take Quiz Again
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md p-6 md:p-8"
            >
              <div className="bg-primary bg-opacity-5 border border-primary border-opacity-20 rounded-lg p-4 mb-6">
                <h3 className="text-xl font-semibold text-primary mb-2">Your Recommended Class/Stream:</h3>
                <p className="text-gray-700 font-medium text-lg">{getRecommendation()}</p>
              </div>
              
              <p className="text-gray-600 mb-6">
                Please provide your contact information so our admissions team can reach out with detailed information
                about the admission process, required documents, and next steps.
              </p>
              
              <form onSubmit={handleFormSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
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
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row justify-between gap-4">
                  <button
                    type="button"
                    onClick={resetQuiz}
                    className="btn bg-gray-200 text-gray-800 hover:bg-gray-300"
                  >
                    Start Over
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EligibilityQuiz;