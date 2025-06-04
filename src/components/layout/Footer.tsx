import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import Logo from '../common/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Logo className="w-10 h-10 text-white" />
              <div>
                <h3 className="text-lg font-bold text-white leading-tight">ST. J.P. CONVENT</h3>
                <p className="text-xs text-gray-300">PUBLIC SCHOOL</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">Rooted in Values, Empowering Through Education</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-primary" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-primary" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" className="text-gray-400 hover:text-primary" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="text-gray-400 hover:text-primary transition-colors">Academics</Link></li>
              <li><Link to="/admissions" className="text-gray-400 hover:text-primary transition-colors">Admissions</Link></li>
              <li><Link to="/facilities" className="text-gray-400 hover:text-primary transition-colors">Facilities</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-primary transition-colors">Events & News</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Useful Links</h4>
            <ul className="space-y-2">
              <li><a href="/parents-students#notices" className="text-gray-400 hover:text-primary transition-colors">Notices & Circulars</a></li>
              <li><a href="/parents-students#timetable" className="text-gray-400 hover:text-primary transition-colors">School Timetable</a></li>
              <li><a href="/admissions#fee-structure" className="text-gray-400 hover:text-primary transition-colors">Fee Structure</a></li>
              <li><a href="/parents-students#uniform" className="text-gray-400 hover:text-primary transition-colors">Uniform Guidelines</a></li>
              <li><a href="https://cbse.gov.in/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">CBSE Website</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Contact Info</h4>
            <address className="not-italic">
              <div className="flex items-start space-x-3 mb-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                <p className="text-gray-400">Tikkampur, Sultanpur, Haridwar, Uttarakhand, India</p>
              </div>
              <div className="flex items-center space-x-3 mb-3">
                <Phone className="text-primary flex-shrink-0" size={18} />
                <div className="text-gray-400">
                  <p>+91-9761584758</p>
                  <p>+91-8194001510</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-primary flex-shrink-0" size={18} />
                <a href="mailto:stjpc2003@gmail.com" className="text-gray-400 hover:text-primary">stjpc2003@gmail.com</a>
              </div>
            </address>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} ST. J.P. Convent Public School. All rights reserved.</p>
          <p className="mt-2">
            <Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
            {' | '}
            <Link to="/terms-of-service" className="hover:text-primary">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;