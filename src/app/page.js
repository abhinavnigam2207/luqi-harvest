'use client';
import Link from 'next/link';
import ClientHeader from './components/header';
import BannerCarousel from './components/carousel/BannerCarousel';

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-green-50">
      {/* Navigation */}
      <ClientHeader />

      {/* Banner Carousel */}
      <BannerCarousel />

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
                Premium <span className="text-yellow-600">Mango Pulp</span> & Natural Fruit Products
              </h1>
              <p className="text-lg md:text-xl text-green-700 mb-8 leading-relaxed">
                LUQI HARVEST is a Bangalore and Krishnagiri-based company that produces, trades and exports high-quality, natural fruit pulp worldwide. Sourced from the finest farms in India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/products" className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full font-semibold transition-colors shadow-lg inline-block text-center">
                  Explore Products
                </Link>
                <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-2xl p-6">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center">
                      <span className="text-4xl">🥭</span>
                    </div>
                    <h3 className="text-2xl font-bold text-green-800 mb-2">100% Natural</h3>
                    <p className="text-green-600">Premium quality mango pulp with no preservatives</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Why Choose LUQI HARVEST?</h2>
            <p className="text-lg text-green-600 max-w-2xl mx-auto">We ensure top-notch quality, freshness and sustainability in every product</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-yellow-50 to-yellow-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-2xl text-white">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Pure & Natural</h3>
              <p className="text-green-600">Made from fully ripened, handpicked fruits with no preservatives</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-2xl text-white">🥭</span>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Premium Varieties</h3>
              <p className="text-green-600">Alphonso, Totapuri, and Kesar mango pulp and puree</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-2xl text-white">🍹</span>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Versatile Use</h3>
              <p className="text-green-600">Perfect for smoothies, desserts, and juices</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-yellow-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-2xl text-white">♻️</span>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Sustainable</h3>
              <p className="text-green-600">Partnering with local farmers for eco-friendly practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Link Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Discover Our Premium Products</h2>
            <p className="text-lg text-green-600 max-w-2xl mx-auto">Rich in vitamins A, C and E for your healthy lifestyle</p>
          </div>
          
          <div className="flex justify-center">
            <Link href="/products" className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full font-semibold transition-colors shadow-lg inline-block text-center">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Premium Quality?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Contact us today to learn more about our premium fruit pulp products and sustainable practices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 rounded-full font-semibold transition-colors shadow-lg">
              Get Quote
            </button>
            <Link href="/products" className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-full font-semibold transition-colors inline-block text-center">
              View Products
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
                <li><a href="#about" className="hover:text-yellow-400 transition-colors">About Us</a></li>
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
