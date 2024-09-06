"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IconType } from 'react-icons';
import { FaGem, FaHandSparkles, FaHeart, FaMagic, FaPaintBrush, FaRegSmile, FaStar } from 'react-icons/fa';

interface Service {
  name: string;
  icon: IconType;
  description: string;
  link: string;
}

const services: Service[] = [
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

export default function Services() {
  const [hoveredServiceIndex, setHoveredServiceIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 to-pink-200 py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h1 
          className="text-6xl font-bold text-center mb-12 text-purple-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Elevate Your Beauty
        </motion.h1>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <motion.div 
                key={service.name}
                className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300 relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredServiceIndex(index)}
                onHoverEnd={() => setHoveredServiceIndex(null)}
              >
                <ServiceIcon className="text-4xl text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-purple-700 mb-2">{service.name}</h3>
                <p className="text-purple-800 mb-4">{service.description}</p>
                <Link href={service.link} className="inline-block bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition duration-300">
                  Explore &rarr;
                </Link>
                {hoveredServiceIndex === index && (
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Featured Treatment */}
        <motion.div 
          className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-purple-800 mb-4">Featured Treatment</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-4 md:mb-0 md:mr-8">
              <Image
                src="/featured-treatment.jpg"
                alt="Featured Nail Art"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-purple-700 mb-2">Holographic Galaxy Nails</h3>
              <p className="text-purple-800 mb-4">Experience the cosmos at your fingertips with our stunning holographic galaxy nail art. This out-of-this-world design combines deep purples, shimmering blues, and twinkling silver to create a mesmerizing celestial effect.</p>
              <Link href="/book" className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition duration-300">
                Book Now
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Client Love */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-purple-800 mb-8">Client Love</h2>
          <div className="flex justify-center items-center space-x-4">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className="text-yellow-400 text-4xl" />
            ))}
          </div>
          <p className="text-purple-800 text-xl mt-4">Tracy Nails Studio transformed my nails into works of art. I have never felt more glamorous! - Sarah T.</p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-purple-800 mb-4">Ready to Shine?</h2>
          <p className="text-purple-700 mb-8">Book your appointment today and let your nails tell your story.</p>
          <Link href="/book" className="inline-block bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600 transition duration-300">
            Book Your Glamour Session <FaHeart className="inline ml-2" />
          </Link>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-0 right-20 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute bottom-20 left-40 w-24 h-24 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
    </div>
  );
}