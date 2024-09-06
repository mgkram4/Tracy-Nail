"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGem, FaHandSparkles, FaMagic, FaPaintBrush, FaRegSmile } from 'react-icons/fa';

const services = [
  { name: 'Luxe Manicures', icon: FaMagic, description: 'Indulge in our premium manicure treatments for perfectly polished nails.', link: '/services/manicures' },
  { name: 'Artistic Nail Design', icon: FaPaintBrush, description: 'Express yourself with our creative and trendy nail art designs.', link: '/services/nail-art' },
  { name: 'Gel & Acrylic Extensions', icon: FaGem, description: 'Enhance your nails with durable and stunning extensions.', link: '/services/extensions' },
  { name: 'Spa Pedicures', icon: FaHandSparkles, description: 'Relax and rejuvenate with our luxurious pedicure experiences.', link: '/services/pedicures' },
  { name: 'Nail Restoration', icon: FaMagic, description: 'Revive and strengthen damaged nails with our specialized treatments.', link: '/services/restoration' },
  { name: 'Bridal & Event Packages', icon: FaRegSmile, description: 'Look your best for special occasions with our tailored nail packages.', link: '/services/events' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function items() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 to-pink-200 py-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-5xl font-bold text-center mb-12 text-purple-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Glamorous Services
        </motion.h1>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <service.icon className="text-4xl text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-purple-700 mb-2">{service.name}</h3>
              <p className="text-purple-800 mb-4">{service.description}</p>
              <Link href={service.link} className="inline-block bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition duration-300">
                Explore &rarr;
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-20 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-40 w-24 h-24 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>
  );
}