import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "../common/Logo";

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Admissions", path: "/admissions" },
    { name: "Facilities", path: "/facilities" },
    { name: "Events & News", path: "/events" },
    { name: "Parents & Students", path: "/parents-students" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Logo className="w-10 h-10" />
          <div>
            <h1 className="text-lg font-bold text-primary leading-tight">
              ST. J.P. CONVENT
            </h1>
            <p className="text-xs text-gray-600">PUBLIC SCHOOL</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-gray-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link to="/admissions" className="btn btn-primary">
            Apply Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-800"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <nav className="container py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 text-base font-medium transition-colors ${
                    isActive
                      ? "text-primary bg-primary bg-opacity-5 rounded"
                      : "text-gray-700"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/admissions"
              className="btn btn-primary mx-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Apply Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
