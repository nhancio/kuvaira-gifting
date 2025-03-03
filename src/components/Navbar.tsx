
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Gift } from 'lucide-react';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white shadow-md' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-primary hover:opacity-90 transition-opacity"
          >
            <Gift size={32} strokeWidth={1.5} />
            <span className="text-2xl font-serif font-bold">GiftElite</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/portfolio" className="nav-link">Portfolio</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/contact" className="btn-primary">Get Started</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
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
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/portfolio" className="nav-link" onClick={() => setIsOpen(false)}>Portfolio</Link>
            <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link to="/contact" className="btn-primary text-center" onClick={() => setIsOpen(false)}>Get Started</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
