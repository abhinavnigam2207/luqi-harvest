'use client';
import Image from 'next/image';
import Link from 'next/link';
import ClientHeader from '../components/header';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-green-50">
      {/* Navigation */}
      <ClientHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
              About <span className="text-yellow-600">LUQI HARVEST</span>
            </h1>
            <p className="text-lg md:text-xl text-green-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Dedicated to bringing you premium quality, natural fruit products from the finest farms in India.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-9xl">🥭</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">Our Story</h2>
              <p className="text-lg text-green-700 mb-6 leading-relaxed">
                LUQI HARVEST was founded with a simple mission: to bring the authentic taste of premium Indian fruits to tables around the world. Based in Bangalore and Krishnagiri, we are situated in the heart of India's fruit belt, giving us direct access to the finest produce.
              </p>
              <p className="text-lg text-green-700 mb-6 leading-relaxed">
                Our journey began with a passion for quality and sustainability. We work directly with local farmers who share our commitment to natural farming practices and environmental stewardship.
              </p>
              <p className="text-lg text-green-700 leading-relaxed">
                Today, we are proud to offer a range of premium fruit pulps and natural products that maintain the authentic taste, aroma, and nutritional benefits of fresh fruits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Values</h2>
            <p className="text-lg text-green-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 mx-auto mb-6 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-3xl text-white">🌱</span>
              </div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Quality</h3>
              <p className="text-green-600">We never compromise on quality. From farm selection to processing and packaging, we maintain the highest standards at every step.</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 mx-auto mb-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-3xl text-white">♻️</span>
              </div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Sustainability</h3>
              <p className="text-green-600">We are committed to sustainable practices that protect our environment and support local farming communities.</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 mx-auto mb-6 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-3xl text-white">🤝</span>
              </div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Integrity</h3>
              <p className="text-green-600">We believe in transparent business practices and building long-term relationships with our farmers, partners, and customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Team</h2>
            <p className="text-lg text-green-600 max-w-2xl mx-auto">Passionate professionals dedicated to bringing you the best</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center">
                <span className="text-4xl">👨‍💼</span>
              </div>
              <h3 className="text-2xl font-semibold text-green-800 mb-2">Rajesh Kumar</h3>
              <p className="text-green-600 font-medium mb-2">Founder & CEO</p>
              <p className="text-green-700">With over 15 years of experience in the agricultural sector, Rajesh leads our vision for sustainable fruit production.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center">
                <span className="text-4xl">👩‍🔬</span>
              </div>
              <h3 className="text-2xl font-semibold text-green-800 mb-2">Dr. Priya Sharma</h3>
              <p className="text-green-600 font-medium mb-2">Quality Control Head</p>
              <p className="text-green-700">Dr. Priya ensures that all our products meet the highest standards of quality and food safety.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center">
                <span className="text-4xl">👨‍🌾</span>
              </div>
              <h3 className="text-2xl font-semibold text-green-800 mb-2">Venkat Rao</h3>
              <p className="text-green-600 font-medium mb-2">Farm Relations Manager</p>
              <p className="text-green-700">Venkat works directly with our network of farmers to ensure sustainable farming practices and fair trade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Our Premium Products?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Discover the authentic taste of premium Indian fruits
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 rounded-full font-semibold transition-colors shadow-lg inline-block text-center">
              Explore Products
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-full font-semibold transition-colors">
              Contact Us
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
                <li><a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a></li>
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