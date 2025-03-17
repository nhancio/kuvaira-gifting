import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GiftCard from '@/components/GiftCard';

// Portfolio items data
const portfolioItems = [
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
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1592903297149-37fb25202dfa?q=80&w=2342&auto=format&fit=crop",
    title: "Diwali Special Box",
    category: "Seasonal"
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1513267048331-5611cad62e41?q=80&w=2370&auto=format&fit=crop",
    title: "Tech Gadget Bundle",
    category: "Corporate"
  },
  {
    id: "7",
    image: "https://images.unsplash.com/photo-1511923199659-1c16881689de?q=80&w=2487&auto=format&fit=crop",
    title: "Handcrafted Chocolates",
    category: "Gourmet"
  },
  {
    id: "8",
    image: "https://images.unsplash.com/photo-1601314214551-ae949a42f51e?q=80&w=2242&auto=format&fit=crop",
    title: "Anniversary Special",
    category: "Celebration"
  },
  {
    id: "9",
    image: "https://images.unsplash.com/photo-1480072723304-5021e468de85?q=80&w=2487&auto=format&fit=crop",
    title: "Sustainable Gift Box",
    category: "Eco-Friendly"
  }
];

// Get unique categories
const categories = ["All", ...new Set(portfolioItems.map(item => item.category))];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(portfolioItems);

  const filterItems = (category: string) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === category));
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-pastel-pink/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-semibold mb-6">Our Portfolio</h1>
            <p className="text-lg text-muted-foreground">
              Explore our exquisite collection of premium corporate gifts designed to make a lasting impression.
            </p>
          </div>
        </div>
      </section>
      
      {/* Portfolio Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => filterItems(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <GiftCard
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                category={item.category}
                delay={index}
              />
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-pastel-lavender/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
              Looking for Something Custom?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We specialize in creating bespoke gifts tailored to your specific requirements and brand identity.
            </p>
            <a href="/contact" className="btn-primary">
              Discuss Your Requirements
            </a>
          </div>
        </div>
      </section>
      
      {/* Product Categories and Taglines */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-serif font-semibold mb-6">Our Portfolio</h1>
            <p className="text-lg text-muted-foreground">
              Discover our diverse range of gifting solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-serif font-semibold mb-4">Onboarding Gifts</h2>
              <p className="text-muted-foreground">Tagline: "A seamless start begins with the perfect gift."</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-serif font-semibold mb-4">Festive Gifting</h2>
              <p className="text-muted-foreground">Tagline: "Celebrate moments, gift with grandeur."</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-serif font-semibold mb-4">Corporate Gifting</h2>
              <p className="text-muted-foreground">Tagline: "Celebrate moments, gift with grandeur."</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-serif font-semibold mb-4">Wedding Gifts</h2>
              <p className="text-muted-foreground">Tagline: "Because every wedding deserves an unforgettable gift."</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-serif font-semibold mb-4">Electronic Gifts/Gadgets</h2>
              <p className="text-muted-foreground">Tagline: "Innovation meets elegance, gifting meets tech."</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
