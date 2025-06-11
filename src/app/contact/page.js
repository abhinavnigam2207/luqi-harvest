'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ClientHeader from '../components/header';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    product: 'General Inquiry'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        product: 'General Inquiry'
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-green-50">
      {/* Navigation */}
      <ClientHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
              Contact <span className="text-yellow-600">LUQI HARVEST</span>
            </h1>
            <p className="text-lg md:text-xl text-green-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Have questions about our products or interested in placing an order? We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-yellow-50 to-green-50 p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">Send Us a Message</h2>
              
              {submitSuccess ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6">
                  <strong className="font-bold">Thank you!</strong>
                  <p>Your message has been sent successfully. We'll get back to you soon.</p>
                  <button 
                    className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                    onClick={() => setSubmitSuccess(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-green-800 font-medium mb-2">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-green-800 font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-green-800 font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-green-800 font-medium mb-2">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="product" className="block text-green-800 font-medium mb-2">Product Interest</label>
                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Alphonso Mango Pulp">Alphonso Mango Pulp</option>
                      <option value="Totapuri Mango Pulp">Totapuri Mango Pulp</option>
                      <option value="Kesar Mango Pulp">Kesar Mango Pulp</option>
                      <option value="Guava Pulp">Guava Pulp</option>
                      <option value="Other Products">Other Products</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-green-800 font-medium mb-2">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md font-semibold transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-800 mb-1">Our Locations</h3>
                    <p className="text-green-700">Bangalore & Krishnagiri, India</p>
                    <p className="text-green-600 mt-1">Production facilities located in the heart of India's fruit belt</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-800 mb-1">Email Us</h3>
                    <p className="text-green-700">contact@mangoozz.com</p>
                    <p className="text-green-600 mt-1">We'll respond to your inquiry within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-800 mb-1">Call Us</h3>
                    <p className="text-green-700">+91-81224 29668</p>
                    <p className="text-green-600 mt-1">Available Monday-Saturday, 9am-6pm IST</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-800 mb-1">Business Hours</h3>
                    <p className="text-green-700">Monday-Friday: 9am-6pm</p>
                    <p className="text-green-700">Saturday: 9am-1pm</p>
                    <p className="text-green-700">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 p-6 bg-green-50 rounded-xl border border-green-100">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Export Inquiries</h3>
                <p className="text-green-700 mb-4">
                  We specialize in exporting premium fruit pulp products worldwide. For bulk orders and international shipping information, please contact our export department directly.
                </p>
                <div className="flex items-center space-x-2 text-green-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>exports@mangoozz.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">Our Locations</h2>
            <p className="text-lg text-green-600 max-w-2xl mx-auto">
              Our production facilities are strategically located in Bangalore and Krishnagiri, giving us direct access to the finest fruit farms in India.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-xl shadow-lg">
            {/* Placeholder for map - in a real implementation, you would integrate Google Maps or another mapping service */}
            <div className="h-96 bg-green-100 rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Map Placeholder</h3>
                <p className="text-green-600">In a real implementation, an interactive map would be displayed here.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-green-600">Find answers to common questions about our products and services</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-yellow-50 to-green-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-green-800 mb-2">What are your minimum order quantities?</h3>
              <p className="text-green-700">Our minimum order quantities vary by product. For retail customers, we offer smaller packaging options. For wholesale and export orders, please contact our sales team for specific MOQ details.</p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-green-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Do you ship internationally?</h3>
              <p className="text-green-700">Yes, we ship our products worldwide. We have experience with international logistics and can arrange shipping to most countries. Contact our export department for shipping details and costs.</p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-green-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-green-800 mb-2">What certifications do your products have?</h3>
              <p className="text-green-700">Our products are certified for quality and safety. We hold certifications including ISO 22000, HACCP, and FSSAI. Our production facilities meet international standards for food safety and quality management.</p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-green-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-green-800 mb-2">How long is the shelf life of your products?</h3>
              <p className="text-green-700">The shelf life of our products varies depending on the type and packaging. Generally, our aseptically packed fruit pulps have a shelf life of 12-18 months when stored properly. Detailed shelf life information is provided on each product package.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Premium Quality?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Contact us today to learn more about our premium fruit pulp products and sustainable practices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 rounded-full font-semibold transition-colors shadow-lg inline-block text-center">
              Explore Products
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-full font-semibold transition-colors">
              Request Samples
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">LUQI HARVEST</h3>
              <p className="text-green-200 mb-4">
                Premium fruit pulp and natural products from the finest farms in India.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-green-200">
                <li><Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link></li>
                <li><Link href="/gallery" className="hover:text-yellow-400 transition-colors">Gallery</Link></li>
                <li><Link href="/products" className="hover:text-yellow-400 transition-colors">Products</Link></li>
                <li><Link href="/about" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
                <li><a href="#certification" className="hover:text-yellow-400 transition-colors">Certification</a></li>
                <li><Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-green-200">
                <li>Alphonso Mango Pulp</li>
                <li>Totapuri Mango Pulp</li>
                <li>Kesar Mango Pulp</li>
                <li>Guava Pulp</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-green-200">
                <p>📍 Bangalore & Krishnagiri</p>
                <p>📞 +91-81224 29668</p>
                <p>✉️ contact@mangoozz.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
            <p>&copy; 2024 LUQI HARVEST. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}