import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled 
          ? 'py-3 bg-white/90 shadow-lg' 
          : 'py-6 bg-gradient-to-b from-black/20 to-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-primary hover:opacity-90 transition-opacity"
          >
            <img 
              src="/logo/3.png" 
              alt="Kuvaira Logo" 
              className="h-12 w-auto"
            />
            <span className="text-2xl font-serif font-bold text-white">Kuvaira</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Link 
              to="/" 
              className="px-4 py-2 rounded-full text-black hover:bg-black/10 transition-all duration-300"
            >
              Home
            </Link>
            <Link 
              to="/portfolio" 
              className="px-4 py-2 rounded-full text-black hover:bg-black/10 transition-all duration-300"
            >
              Portfolio
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-2 rounded-full text-black hover:bg-black/10 transition-all duration-300"
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="px-4 py-2 rounded-full text-black hover:bg-black/10 transition-all duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen 
              ? 'max-h-screen opacity-100 py-6' 
              : 'max-h-0 opacity-0 py-0'
          }`}
        >
          <div className="flex flex-col space-y-4 mt-4">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded-md text-black hover:bg-black/10 transition-all duration-300"
            >
              Home
            </Link>
            <Link 
              to="/portfolio" 
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded-md text-black hover:bg-black/10 transition-all duration-300"
            >
              Portfolio
            </Link>
            <Link 
              to="/about" 
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded-md text-black hover:bg-black/10 transition-all duration-300"
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded-md text-black hover:bg-black/10 transition-all duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
