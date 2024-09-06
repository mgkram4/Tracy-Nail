"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-purple-600 bg-opacity-90 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png" // Updated path to match your file structure
              alt="Tracy Nails Studio Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-2xl font-bold text-white">Tracy Nails</span>
          </Link>
          <ul className="flex space-x-6 items-center">
            {['Home', 'items', 'appt', 'About', 'contact',].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-white hover:text-pink-300 transition duration-300">
                  {item}
                </Link>
              </motion.li>
            ))}
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link href="/book" className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition duration-300">
                Book Now
              </Link>
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}