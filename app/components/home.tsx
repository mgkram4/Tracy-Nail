import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="bg-pink-50">
      <section className="hero bg-pink-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Empower Your Business Growth</h1>
          <p className="text-xl mb-8">Innovative financing solutions tailored to your industry needs</p>
          <Link href="/apply" className="bg-white text-pink-500 px-6 py-3 rounded-full text-lg font-semibold hover:bg-pink-100">
            Get Started
          </Link>
        </div>
      </section>

      <section className="services py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Add ServiceCard components here */}
          </div>
        </div>
      </section>

      <section className="why-choose-us bg-pink-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose Vista Pacific Capital</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Add reasons to choose Vista Pacific Capital */}
          </div>
        </div>
      </section>

      <section className="cta bg-pink-500 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8">Lets discuss how our financing solutions can help you achieve your goals.</p>
          <Link href="/contact" className="bg-white text-pink-500 px-6 py-3 rounded-full text-lg font-semibold hover:bg-pink-100">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;