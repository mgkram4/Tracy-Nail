"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCut, FaGem, FaHandSparkles, FaPaintBrush, } from 'react-icons/fa';

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

const services = [
  { name: "Classic Manicure", price: "$25", icon:  FaPaintBrush, description: "Trim, shape, and polish for beautiful nails" },
  { name: "Gel Manicure", price: "$35", icon:  FaPaintBrush, description: "Long-lasting gel polish for 2-3 weeks of shine" },
  { name: "Acrylic Full Set", price: "$50", icon: FaGem, description: "Full acrylic nail extensions for added length" },
  { name: "Nail Art", price: "From $10", icon: FaPaintBrush, description: "Custom designs to express your style" },
  { name: "Pedicure Deluxe", price: "$45", icon: FaHandSparkles, description: "Luxurious foot care with massage and polish" },
  { name: "Nail Repair", price: "$15", icon: FaCut, description: "Quick fixes for chips, cracks, or breaks" }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 to-pink-200 relative overflow-hidden rounded-xl">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white opacity-10 rounded-full"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              opacity: [0.1, 0.2, 0.4, 0.2, 0.1],
              borderRadius: ["20%", "20%", "50%", "80%", "20%"],
            }}
            transition={{
              duration: 20,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 pt-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold text-purple-800 mb-4 relative inline-block">
            Tracy Nails Studio
            <motion.span
              className="absolute -top-4 -right-4 text-yellow-400"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
            </motion.span>
          </h1>
          <p className="text-2xl text-purple-600">Where Every Nail Tells a Story</p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link href="/book" className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition duration-300 inline-flex items-center">
              <FaPaintBrush className="mr-2" />
              Book Your Glamour Session
            </Link>
          </motion.div>
        </motion.div>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold text-purple-700 mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg"
              >
                <service.icon className="text-4xl text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-purple-700 mb-2">{service.name}</h3>
                <p className="text-purple-800 mb-4">{service.description}</p>
                <p className="text-2xl font-bold text-purple-600">{service.price}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-semibold text-purple-700 mb-6 text-center">Why Choose Tracy Nails?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-purple-600 mb-2">Expert Technicians</h3>
                <p className="text-purple-800">Our skilled team brings years of experience and creativity to every service.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-600 mb-2">Premium Products</h3>
                <p className="text-purple-800">We use only the highest quality, long-lasting nail care products.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-600 mb-2">Hygienic Environment</h3>
                <p className="text-purple-800">Your safety is our priority, with strict cleanliness standards.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-600 mb-2">Customized Designs</h3>
                <p className="text-purple-800">Express yourself with unique, personalized nail art creations.</p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold text-purple-700 mb-8 text-center">Special Offers</h2>
          <div className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg p-8 shadow-lg text-white">
            <h3 className="text-2xl font-bold mb-4">New Client Special</h3>
            <p className="text-lg mb-4">Enjoy 20% off your first visit with us!</p>
            <p className="text-sm">*Valid for new clients only. Cannot be combined with other offers.</p>
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-20"
        >
          <Link href="/book" className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-500 transition duration-300">
            Book Your Appointment Now
          </Link>
        </motion.div>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold text-purple-700 mb-8 text-center">Visit Us</h2>
          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg text-center">
            <p className="text-xl text-purple-800 mb-2">123 Nail Avenue, Beauty Town, BT 12345</p>
            <p className="text-lg text-purple-600 mb-4">Open Monday-Saturday: 9AM - 7PM | Sunday: 10AM - 5PM</p>
            <p className="text-purple-800">Contact us: (555) 123-4567 | info@tracynails.com</p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}