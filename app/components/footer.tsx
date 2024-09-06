import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-pink-500 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Vista Pacific Capital</h3>
          <p>Innovative financing solutions for your business needs</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/services" className="hover:text-pink-200">Services</Link></li>
            <li><Link href="/about" className="hover:text-pink-200">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-pink-200">Contact</Link></li>
            <li><Link href="/apply" className="hover:text-pink-200">Apply Now</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p>123 Finance Street, Capital City, ST 12345</p>
          <p>Phone: (555) 123-4567</p>
          <p>Email: info@vistapacificcapital.com</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2023 Vista Pacific Capital. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;