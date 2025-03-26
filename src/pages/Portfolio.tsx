import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const filterItems = (category: string) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === category));
    }
  };

  const handleRequirementsClick = () => {
    navigate('/', { state: { scrollTo: 'contact-section' } });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Portfolio Gallery */}
      <section className="pt-40 py-20">
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
            <button onClick={handleRequirementsClick} className="btn-primary">
              Discuss Your Requirements
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Portfolio;
