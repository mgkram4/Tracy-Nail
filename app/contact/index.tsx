"use client"

import { motion } from 'framer-motion';
import { FaClock, FaEnvelope, FaInstagram, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import ContactForm from "../components/form";

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

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 to-pink-200 py-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-5xl font-bold text-center mb-12 text-purple-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h1>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-semibold mb-6 text-purple-700">Book Your Glamour Session</h2>
            <p className="text-purple-800 mb-6">
              Were excited to pamper you at Tracy Nails Studio! Fill out the form, and we will get back to you as soon as possible to confirm your appointment.
            </p>
            <ContactForm />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-semibold mb-6 text-purple-700">Visit Our Studio</h2>
            <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg mb-6">
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-pink-500 text-xl mr-4" />
                <p className="text-purple-800">123 Beauty Lane, Glamour City, GC 12345</p>
              </div>
              <div className="flex items-center mb-4">
                <FaPhone className="text-pink-500 text-xl mr-4" />
                <p className="text-purple-800">(555) 123-4567</p>
              </div>
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-pink-500 text-xl mr-4" />
                <p className="text-purple-800">appointments@tracynails.com</p>
              </div>
              <div className="flex items-center mb-4">
                <FaClock className="text-pink-500 text-xl mr-4" />
                <p className="text-purple-800">Mon-Sat: 9AM - 7PM | Sun: 10AM - 5PM</p>
              </div>
              <div className="flex items-center">
                <FaInstagram className="text-pink-500 text-xl mr-4" />
                <p className="text-purple-800">@TracyNailsStudio</p>
              </div>
            </div>
            <div className="h-64 bg-gray-300 rounded-lg overflow-hidden">
              {/* Replace with actual map component or embed */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a47df06b185%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1621436689489!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
 
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}