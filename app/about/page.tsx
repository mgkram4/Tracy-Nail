"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaHandSparkles, FaHeart, FaPalette, FaStar } from 'react-icons/fa';

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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 to-pink-200 py-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-5xl font-bold text-center mb-12 text-purple-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Tracy Nails Studio
        </motion.h1>
        
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.section className="mb-16" variants={itemVariants}>
            <h2 className="text-3xl font-semibold mb-4 text-purple-700">Our Story</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-4 md:mb-0 md:mr-8">
                <Image src="/tracy-nails-studio.jpg" width={600} height={400} alt="Tracy Nails Studio" className="rounded-lg shadow-md" />
              </div>
              <div className="md:w-1/2">
                <p className="text-purple-800 mb-4">
                  Tracy Nails Studio was born from a passion for beauty and a desire to create a sanctuary where clients could indulge in luxurious nail care. Founded in 2010 by Tracy Nguyen, our studio has grown from a small local secret to a beloved beauty destination.
                </p>
                <p className="text-purple-800">
                  With over a decade of experience, we've perfected the art of nail care, combining traditional techniques with innovative trends to deliver stunning results that boost confidence and brighten days.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section className="mb-16" variants={itemVariants}>
            <h2 className="text-3xl font-semibold mb-4 text-purple-700">Our Mission</h2>
            <p className="text-purple-800">
              At Tracy Nails Studio, our mission is to elevate the nail care experience. We strive to provide a pampering retreat where creativity meets relaxation, and where every client leaves feeling beautiful, refreshed, and confident.
            </p>
          </motion.section>

          <motion.section className="mb-16" variants={itemVariants}>
            <h2 className="text-3xl font-semibold mb-4 text-purple-700">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Add TeamMember components here */}
              <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg text-center">
                <Image src="/tracy-nguyen.jpg" width={150} height={150} alt="Tracy Nguyen" className="rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-purple-700">Tracy Nguyen</h3>
                <p className="text-purple-800">Founder & Lead Nail Artist</p>
              </div>
              {/* Add more team members as needed */}
            </div>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-semibold mb-4 text-purple-700">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <FaHeart className="text-pink-500 text-2xl mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">Passion for Beauty</h3>
                  <p className="text-purple-800">We pour our heart into every service, ensuring each client feels truly pampered.</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaStar className="text-yellow-400 text-2xl mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">Excellence in Service</h3>
                  <p className="text-purple-800">We strive for perfection in every detail, from sanitation to the final polish.</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaPalette className="text-purple-500 text-2xl mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">Creative Innovation</h3>
                  <p className="text-purple-800">We stay ahead of trends, offering the latest in nail art and technology.</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaHandSparkles className="text-blue-400 text-2xl mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">Client-Focused Care</h3>
                  <p className="text-purple-800">Your comfort and satisfaction are our top priorities, always.</p>
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}