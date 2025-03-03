
import React from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GiftCardProps {
  id: string;
  image: string;
  title: string;
  category: string;
  delay?: number;
}

const GiftCard: React.FC<GiftCardProps> = ({ id, image, title, category, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-lg"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-xl text-white font-medium font-serif">{title}</h3>
        <p className="text-white/80 text-sm mb-4">{category}</p>
        
        <Link 
          to={`/portfolio/${id}`}
          className="flex items-center gap-2 text-white bg-primary/80 backdrop-blur-sm w-max py-2 px-4 rounded-full text-sm"
        >
          <Eye size={16} />
          <span>View Details</span>
        </Link>
      </div>
      
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
        {category}
      </div>
    </motion.div>
  );
};

export default GiftCard;
