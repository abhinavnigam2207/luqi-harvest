'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

export default function ClientHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-green-700 hover:text-yellow-600 transition-colors">LUQI HARVEST</h1>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
                href="/" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === '/' ? 'text-yellow-600 bg-yellow-50' : 'text-green-700 hover:text-yellow-600'}`}
              >
                Home
              </Link>
              <Link 
                href="/gallery" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === '/gallery' ? 'text-yellow-600 bg-yellow-50' : 'text-green-700 hover:text-yellow-600'}`}
              >
                Gallery
              </Link>
              <Link 
                href="/products" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === '/products' ? 'text-yellow-600 bg-yellow-50' : 'text-green-700 hover:text-yellow-600'}`}
              >
                Products
              </Link>
              <a href="#about" className="text-green-700 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">About Us</a>
              <a href="#certification" className="text-green-700 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Certification</a>
              <a href="#contact" className="text-green-700 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-green-700 hover:text-yellow-600 focus:outline-none focus:text-yellow-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link 
              href="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/' ? 'text-yellow-600 bg-yellow-50' : 'text-green-700 hover:text-yellow-600'}`}
            >
              Home
            </Link>
            <Link 
              href="/gallery" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/gallery' ? 'text-yellow-600 bg-yellow-50' : 'text-green-700 hover:text-yellow-600'}`}
            >
              Gallery
            </Link>
            <Link 
              href="/products" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/products' ? 'text-yellow-600 bg-yellow-50' : 'text-green-700 hover:text-yellow-600 hover:bg-yellow-50'}`}
            >
              Products
            </Link>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-green-700 hover:text-yellow-600 hover:bg-yellow-50">About Us</a>
            <a href="#certification" className="block px-3 py-2 rounded-md text-base font-medium text-green-700 hover:text-yellow-600 hover:bg-yellow-50">Certification</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-green-700 hover:text-yellow-600 hover:bg-yellow-50">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}