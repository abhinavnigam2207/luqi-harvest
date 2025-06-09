'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import ClientHeader from '../components/header';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageCategory, setImageCategory] = useState('all');

  // Generate image data from available assets
  const generateImages = () => {
    const images = [];
    let id = 1;
    
    // JPG Images (1-53)
    for (let i = 1; i <= 53; i++) {
      const categories = ['alphonso', 'totapuri', 'kesar', 'pulp', 'processing', 'quality', 'harvest', 'organic', 'export'];
      const category = categories[i % categories.length];
      images.push({
        id: id++,
        src: `/assets/jpg/mango%201-${i}.jpg`,
        alt: `Premium Mango Product ${i}`,
        category: category,
        type: 'jpg'
      });
    }
    
    // PNG Images (1-53)
    for (let i = 1; i <= 53; i++) {
      const categories = ['showcase', 'variety', 'collection', 'processing', 'quality', 'farm', 'export', 'pulp', 'selection', 'range'];
      const category = categories[i % categories.length];
      images.push({
        id: id++,
        src: `/assets/png/mango%201-${i}.png`,
        alt: `Mango Showcase ${i}`,
        category: category,
        type: 'png'
      });
    }
    
    return images;
  };
  
  const images = generateImages();

  const categories = [
    { id: 'all', name: 'All Products', count: images.length },
    { id: 'alphonso', name: 'Alphonso Mango', count: images.filter(img => img.category === 'alphonso').length },
    { id: 'totapuri', name: 'Totapuri Mango', count: images.filter(img => img.category === 'totapuri').length },
    { id: 'kesar', name: 'Kesar Mango', count: images.filter(img => img.category === 'kesar').length },
    { id: 'pulp', name: 'Mango Pulp', count: images.filter(img => img.category === 'pulp').length },
    { id: 'processing', name: 'Processing', count: images.filter(img => img.category === 'processing').length },
    { id: 'quality', name: 'Quality Control', count: images.filter(img => img.category === 'quality').length },
    { id: 'harvest', name: 'Harvest', count: images.filter(img => img.category === 'harvest').length }
  ];

  const filteredImages = imageCategory === 'all' 
    ? images 
    : images.filter(image => image.category === imageCategory);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-green-50">
      {/* Navigation */}
      <ClientHeader />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Product Gallery
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Explore our premium collection of mango products, from fresh harvest to processed pulp. 
            Witness the journey of quality from farm to your table.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm">Premium Quality</span>
            <span className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm">100% Natural</span>
            <span className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm">Export Grade</span>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setImageCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  imageCategory === category.id
                    ? 'bg-yellow-500 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-green-700 hover:bg-yellow-100 hover:text-yellow-700'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => openModal(image)}
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-green-100 flex items-center justify-center" style={{display: 'none'}}>
                    <div className="text-center p-4">
                      <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-2xl">🥭</span>
                      </div>
                      <h3 className="text-sm font-semibold text-green-800 mb-1">{image.alt}</h3>
                      <p className="text-xs text-green-600 capitalize">{image.category}</p>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                      image.type === 'jpg' ? 'bg-blue-100/80 text-blue-800' : 'bg-purple-100/80 text-purple-800'
                    }`}>
                      {image.type.toUpperCase()}
                    </span>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <div className="bg-white rounded-full p-3 shadow-lg">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-green-800 mb-1 group-hover:text-yellow-600 transition-colors">
                    {image.alt}
                  </h3>
                  <p className="text-sm text-green-600 capitalize">{image.category} Collection</p>
                </div>
              </div>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-3xl text-gray-400">📷</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No images found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Image Container */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-4xl">
              <div className="aspect-video relative">
                <Image
                   src={selectedImage.src}
                   alt={selectedImage.alt}
                   fill
                   className="object-cover"
                   sizes="(max-width: 768px) 100vw, 80vw"
                   onError={(e) => {
                     e.target.style.display = 'none';
                     e.target.nextSibling.style.display = 'flex';
                   }}
                 />
                 <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-green-100 flex items-center justify-center" style={{display: 'none'}}>
                   <div className="text-center p-8">
                     <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                       <span className="text-5xl">🥭</span>
                     </div>
                     <h2 className="text-3xl font-bold text-green-800 mb-4">{selectedImage.alt}</h2>
                     <p className="text-lg text-green-600 capitalize mb-4">{selectedImage.category} Collection</p>
                   </div>
                 </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className={`inline-block px-3 py-1 rounded-full font-medium backdrop-blur-sm ${
                    selectedImage.type === 'jpg' ? 'bg-blue-100/90 text-blue-800' : 'bg-purple-100/90 text-purple-800'
                  }`}>
                    {selectedImage.type.toUpperCase()}
                  </span>
                  <span className="inline-block px-3 py-1 rounded-full bg-green-100/90 text-green-800 font-medium backdrop-blur-sm">
                    Premium Quality
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-green-800 mb-2">{selectedImage.alt}</h2>
                <p className="text-lg text-green-600 capitalize mb-4">{selectedImage.category} Collection</p>
              </div>
              
              <div className="p-6 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Product Details</h3>
                    <ul className="text-sm text-green-600 space-y-1">
                      <li>• 100% Natural & Pure</li>
                      <li>• No Preservatives Added</li>
                      <li>• Export Quality Standards</li>
                      <li>• Rich in Vitamins A, C & E</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Applications</h3>
                    <ul className="text-sm text-green-600 space-y-1">
                      <li>• Beverages & Smoothies</li>
                      <li>• Ice Cream & Desserts</li>
                      <li>• Bakery Products</li>
                      <li>• Food Processing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
                <li><a href="#products" className="hover:text-yellow-400 transition-colors">Products</a></li>
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