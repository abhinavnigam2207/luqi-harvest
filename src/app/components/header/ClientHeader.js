'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { categories } from '../../products/constants';

export default function ClientHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              {/* {!imageError ? ( */}
                <div className="relative h-12 w-32">
                  <Image
                    src="/assets/png/luqr.png"
                    alt="LUQI HARVEST"
                    fill
                    className="object-contain"
                    priority
                    onError={(e) => {
                      setImageError(true);
                    }}
                    sizes="(max-width: 768px) 100px, 128px"
                  />
                </div>
              {/* // ) : (
              //   <h1 className="text-2xl font-bold text-green-700 hover:text-yellow-600 transition-colors">
              //     LUQI HARVEST
              //   </h1>
              // )} */}
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
              <div 
                ref={dropdownRef}
                className="relative"
              >
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  onMouseEnter={() => setIsProductsOpen(true)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${
                    pathname === '/products' ? 'text-yellow-600 bg-yellow-50' : 'text-green-700 hover:text-yellow-600'
                  }`}
                >
                  Products
                  <svg className={`w-4 h-4 ml-1 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isProductsOpen && (
                  <div 
                    className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    onMouseEnter={() => setIsProductsOpen(true)}
                  >
                    <div className="py-1">
                      {categories.map((category) => (
                        <Link
                          key={category.id}
                          href={`/products?category=${category.id}`}
                          className="block px-4 py-2 text-sm text-green-700 hover:bg-yellow-50 hover:text-yellow-600"
                          onClick={() => setIsProductsOpen(false)}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Link 
                href="/about" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === '/about' ? 'text-yellow-600 bg-yellow-50' : 'text-green-700 hover:text-yellow-600'}`}
              >
                About Us
              </Link>
              <Link
                href="/certification"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === '/certification' ? 'text-yellow-600 bg-yellow-50' : 'text-green-700 hover:text-yellow-600'}`}
              >
                Certification
              </Link>
              <Link 
                href="/contact" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === '/contact' ? 'text-yellow-600 bg-yellow-50' : 'text-green-700 hover:text-yellow-600'}`}
              >
                Contact
              </Link>
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
            <div className="space-y-1">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className={`w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center justify-between ${
                  pathname === '/products' ? 'text-yellow-600 bg-yellow-50' : 'text-green-700 hover:text-yellow-600'
                }`}
              >
                Products
                <svg className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isProductsOpen && (
                <div className="pl-4 space-y-1">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/products?category=${category.id}`}
                      className="block px-3 py-2 rounded-md text-base font-medium text-green-700 hover:text-yellow-600 hover:bg-yellow-50"
                      onClick={() => {
                        setIsProductsOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link 
              href="/about" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/about' ? 'text-yellow-600 bg-yellow-50' : 'text-green-700 hover:text-yellow-600 hover:bg-yellow-50'}`}
            >
              About Us
            </Link>
            <Link
              href="/certification"
              className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/certification' ? 'text-yellow-600 bg-yellow-50' : 'text-green-700 hover:text-yellow-600 hover:bg-yellow-50'}`}
            >
              Certification
            </Link>
            <Link 
              href="/contact" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/contact' ? 'text-yellow-600 bg-yellow-50' : 'text-green-700 hover:text-yellow-600 hover:bg-yellow-50'}`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}