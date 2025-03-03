
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, Target, Heart, Users } from 'lucide-react';

const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Aarav Patel",
      position: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2370&auto=format&fit=crop",
      bio: "With over 15 years of experience in corporate gifting, Aarav founded GiftElite to provide premium gifting solutions to businesses in Hyderabad."
    },
    {
      name: "Priya Sharma",
      position: "Creative Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2461&auto=format&fit=crop",
      bio: "Priya brings her artistic vision and keen eye for design to create unique and memorable gift collections that resonate with clients."
    },
    {
      name: "Vikram Singh",
      position: "Operations Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2487&auto=format&fit=crop",
      bio: "Vikram ensures smooth operations and timely delivery, managing our logistics and quality control processes."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-pastel-blue/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-semibold mb-6">About Us</h1>
            <p className="text-lg text-muted-foreground">
              Crafting memorable gifting experiences for corporate clients since 2015.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2340&auto=format&fit=crop" 
                alt="Our Story" 
                className="w-full h-[500px] object-cover rounded-lg shadow-md"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-1 bg-pastel-pink rounded-full text-primary text-sm font-medium">
                Our Journey
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold">
                Creating Thoughtful Gifting Experiences
              </h2>
              <p className="text-muted-foreground">
                Founded in 2015 in the heart of Hyderabad, GiftElite began with a simple mission: to elevate corporate gifting into an art form that builds meaningful connections between businesses and their stakeholders.
              </p>
              <p className="text-muted-foreground">
                What started as a small boutique operation has grown into a premier gifting service trusted by over 200 corporate clients across India. Our journey has been driven by attention to detail, commitment to quality, and a passion for creating memorable unboxing experiences.
              </p>
              <p className="text-muted-foreground">
                Today, we continue to innovate and expand our collections while maintaining the personalized service and meticulous curation that set us apart from the beginning.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 bg-pastel-mint/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at GiftElite.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm text-center"
            >
              <div className="w-16 h-16 rounded-full bg-pastel-lavender flex items-center justify-center mx-auto mb-6">
                <Award size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in every gift we curate, ensuring premium quality and attention to detail.
              </p>
            </motion.div>
            
            {/* Value 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm text-center"
            >
              <div className="w-16 h-16 rounded-full bg-pastel-pink flex items-center justify-center mx-auto mb-6">
                <Target size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Purposeful</h3>
              <p className="text-muted-foreground">
                Each gift is purposefully selected to create a meaningful connection and lasting impression.
              </p>
            </motion.div>
            
            {/* Value 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm text-center"
            >
              <div className="w-16 h-16 rounded-full bg-pastel-peach flex items-center justify-center mx-auto mb-6">
                <Heart size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Passion</h3>
              <p className="text-muted-foreground">
                We're passionate about creating exceptional gifting experiences that delight and surprise.
              </p>
            </motion.div>
            
            {/* Value 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm text-center"
            >
              <div className="w-16 h-16 rounded-full bg-pastel-blue flex items-center justify-center mx-auto mb-6">
                <Users size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Relationships</h3>
              <p className="text-muted-foreground">
                We believe in building lasting relationships with our clients through trust and reliability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The creative minds behind GiftElite's exquisite gifting solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-border"
              >
                <div className="h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-medium">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.position}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-pastel-lavender/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
              Ready to Collaborate?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's create meaningful gifting experiences that represent your brand and delight your recipients.
            </p>
            <Link to="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
