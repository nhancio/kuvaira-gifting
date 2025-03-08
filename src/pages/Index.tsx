import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroCarousel from '@/components/HeroCarousel';
import GiftCard from '@/components/GiftCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Gift, Clock, Package, Users, ArrowRight, Star } from 'lucide-react';

// Featured products data
const featuredProducts = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2340&auto=format&fit=crop",
    title: "Executive Gift Set",
    category: "Corporate"
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1608185944099-7638db8051a6?q=80&w=2487&auto=format&fit=crop",
    title: "Luxury Tea Collection",
    category: "Premium"
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=2215&auto=format&fit=crop",
    title: "Custom Stationery Kit",
    category: "Personalized"
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1612277676054-89c89a9e8331?q=80&w=2342&auto=format&fit=crop",
    title: "Wellness Hamper",
    category: "Lifestyle"
  }
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    text: "Kuvaira provided exceptional service for our company event. The customized gift boxes were elegant and perfectly aligned with our brand identity.",
    author: "Priya Sharma",
    position: "HR Director, Tech Solutions Inc."
  },
  {
    id: 2,
    text: "We needed 500 premium gift sets for our clients during Diwali, and Kuvaira delivered beyond expectations. The attention to detail was impressive.",
    author: "Rajesh Kumar",
    position: "Marketing Head, Global Finance"
  },
  {
    id: 3,
    text: "The personalized touch that Kuvaira adds to every product makes them stand out. Our clients loved the thoughtful corporate gifts.",
    author: "Ananya Desai",
    position: "CEO, Innovate Studios"
  }
];

// Add partners data
const partners = [
  {
    id: 1,
    name: "Crafts by Shravs",
    description: "Inhouse design studio"
  },
  {
    id: 2,
    name: "LuxyStudio",
    description: "Luxury electronics and accessories"
  },
  {
    id: 3,
    name: "Nhancio",
    description: "Software partner and client"
  }
];

const PartnersSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-4">Our Partners</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Collaborating with the best to deliver exceptional gifting experiences.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {partners.map((partner) => (
          <motion.div
            key={partner.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-sm border border-border text-center"
          >
            <h3 className="text-xl font-serif font-medium mb-2">{partner.name}</h3>
            <p className="text-muted-foreground">{partner.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative">
        <HeroCarousel />
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-pastel-mint/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-4">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide exceptional gifting experiences with premium quality products and personalized service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="w-16 h-16 rounded-full bg-pastel-lavender flex items-center justify-center mx-auto mb-6">
                <Gift size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Premium Quality</h3>
              <p className="text-muted-foreground">
                Carefully curated high-quality products that leave a lasting impression.
              </p>
            </motion.div>
            
            {/* Feature 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="w-16 h-16 rounded-full bg-pastel-pink flex items-center justify-center mx-auto mb-6">
                <Package size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Custom Packaging</h3>
              <p className="text-muted-foreground">
                Bespoke packaging solutions tailored to your brand identity.
              </p>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="w-16 h-16 rounded-full bg-pastel-blue flex items-center justify-center mx-auto mb-6">
                <Clock size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Timely Delivery</h3>
              <p className="text-muted-foreground">
                Efficient logistics ensuring your gifts arrive exactly when needed.
              </p>
            </motion.div>
            
            {/* Feature 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="w-16 h-16 rounded-full bg-pastel-peach flex items-center justify-center mx-auto mb-6">
                <Users size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Dedicated Support</h3>
              <p className="text-muted-foreground">
                Personalized assistance throughout your gifting journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-serif font-semibold mb-4"
              >
                Featured Collections
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-muted-foreground max-w-xl"
              >
                Explore our most popular corporate gifting collections, designed to impress.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link to="/portfolio" className="text-primary font-medium flex items-center gap-2 hover:underline">
                <span>View All Collections</span>
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <GiftCard
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                category={product.category}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-pastel-lavender/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">  {/* Reduced opacity from 0.3 to 0.2 */}
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="currentColor" className="text-primary" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif font-semibold mb-6"
            >
              Ready to Create a Memorable Gifting Experience?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground mb-8"
            >
              Let us help you design the perfect corporate gifting strategy that aligns with your brand values and creates lasting impressions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" className="btn-primary min-w-[180px]">
                Contact Us
              </Link>
              <Link to="/portfolio" className="btn-outline min-w-[180px]">
                Explore Collections
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <PartnersSection />
      
      <Footer />
    </div>
  );
};

export default Index;
