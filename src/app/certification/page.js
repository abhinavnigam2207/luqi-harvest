'use client';
import Image from 'next/image';
import Link from 'next/link';
import ClientHeader from '../components/header';

export default function Certification() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-green-50">
      {/* Navigation */}
      <ClientHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
              Our <span className="text-yellow-600">Certifications</span>
            </h1>
            <p className="text-lg md:text-xl text-green-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              LUQI HARVEST maintains the highest standards of quality and food safety through internationally recognized certifications.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ISO 22000 */}
            <div className="bg-gradient-to-br from-yellow-50 to-green-50 p-8 rounded-2xl shadow-lg">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🏅</span>
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 text-center">ISO 22000:2018</h3>
              <p className="text-green-700 text-center mb-4">
                Food Safety Management System certification ensuring the highest standards in food safety throughout our production process.
              </p>
              <ul className="text-green-600 space-y-2">
                <li>• Systematic approach to food safety controls</li>
                <li>• Hazard analysis and prevention</li>
                <li>• Interactive communication</li>
                <li>• System management</li>
              </ul>
            </div>

            {/* HACCP */}
            <div className="bg-gradient-to-br from-yellow-50 to-green-50 p-8 rounded-2xl shadow-lg">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 text-center">HACCP</h3>
              <p className="text-green-700 text-center mb-4">
                Hazard Analysis and Critical Control Points certification demonstrating our commitment to food safety.
              </p>
              <ul className="text-green-600 space-y-2">
                <li>• Systematic preventive approach</li>
                <li>• Biological, chemical, and physical hazards prevention</li>
                <li>• Production, procurement, handling</li>
                <li>• Storage and distribution control</li>
              </ul>
            </div>

            {/* FSSAI */}
            <div className="bg-gradient-to-br from-yellow-50 to-green-50 p-8 rounded-2xl shadow-lg">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 text-center">FSSAI</h3>
              <p className="text-green-700 text-center mb-4">
                Food Safety and Standards Authority of India certification ensuring compliance with Indian food safety standards.
              </p>
              <ul className="text-green-600 space-y-2">
                <li>• Indian regulatory compliance</li>
                <li>• Quality standards adherence</li>
                <li>• Regular audits and inspections</li>
                <li>• Consumer safety assurance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Quality Standards</h2>
            <p className="text-lg text-green-700 max-w-3xl mx-auto">
              We maintain rigorous quality control measures throughout our production process to ensure the highest standards of food safety and product quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Production Standards</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-yellow-500 text-xl">✓</span>
                  <span className="text-green-700">State-of-the-art processing facilities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-yellow-500 text-xl">✓</span>
                  <span className="text-green-700">Regular equipment maintenance and calibration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-yellow-500 text-xl">✓</span>
                  <span className="text-green-700">Strict hygiene and sanitation protocols</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-yellow-500 text-xl">✓</span>
                  <span className="text-green-700">Trained and qualified staff</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Testing & Monitoring</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-yellow-500 text-xl">✓</span>
                  <span className="text-green-700">Regular product testing and analysis</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-yellow-500 text-xl">✓</span>
                  <span className="text-green-700">Microbiological and chemical testing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-yellow-500 text-xl">✓</span>
                  <span className="text-green-700">Quality monitoring at every stage</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-yellow-500 text-xl">✓</span>
                  <span className="text-green-700">Documentation and traceability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience Our Quality Standards
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Contact us to learn more about our certifications and quality assurance processes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 rounded-full font-semibold transition-colors shadow-lg inline-block text-center">
              View Products
            </Link>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-full font-semibold transition-colors inline-block text-center">
              Contact Us
            </Link>
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
                <li><Link href="/certification" className="hover:text-yellow-400 transition-colors">Certification</Link></li>
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