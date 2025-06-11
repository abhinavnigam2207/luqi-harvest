'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const images = [
  '/assets/jpg/mango 1-1.jpg',
  '/assets/jpg/mango 1-2.jpg',
  '/assets/jpg/mango 1-3.jpg',
  '/assets/jpg/mango 1-4.jpg',
  '/assets/jpg/mango 1-5.jpg',
];

export default function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  // Handle parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const rect = carouselRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          const scrollPosition = window.scrollY;
          setScrollY(scrollPosition);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div 
      ref={carouselRef}
      className="relative w-full h-[500px] overflow-hidden bg-white"
    >
      {/* Main Image */}
      <div className="relative w-full h-full">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute w-full h-full transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 transition-transform duration-1000"
              style={{
                transform: `translateY(${scrollY * 0.5}px)`,
                height: '120%', // Make it slightly taller to allow for parallax movement
                top: '-10%', // Center the taller image
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={src}
                  alt={`Mango Image ${index + 1}`}
                  fill
                  className="object-contain"
                  priority={index === 0}
                  sizes="100vw"
                  quality={100}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-colors z-10"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-colors z-10"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 