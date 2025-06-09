'use client';
import Image from 'next/image';
import Link from 'next/link';
import ClientHeader from '../components/header';

export default function Products() {
  // Product categories
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'mango', name: 'Mango Products' },
    { id: 'pulp', name: 'Fruit Pulp' },
    { id: 'juice', name: 'Fruit Juice' },
    { id: 'frozen', name: 'Frozen Products' },
    { id: 'concentrate', name: 'Concentrates' },
    { id: 'aseptic', name: 'Aseptic Products' },
  ];

  // Product data
  const products = [
    {
      id: 1,
      name: 'Alphonso Mango Pulp',
      category: 'mango',
      subcategory: 'pulp',
      image: '/assets/jpg/mango%201-1.jpg',
      description: 'The King of Mangoes - Premium quality with rich, creamy texture and unparalleled sweetness',
      benefits: [
        'Rich in Vitamins A, C, and E',
        'High in Antioxidants',
        'Perfect for beverages & desserts'
      ],
      applications: [
        'Beverages & Smoothies',
        'Ice Cream & Desserts',
        'Bakery Products',
        'Food Processing'
      ]
    },
    {
      id: 2,
      name: 'Totapuri Mango Pulp',
      category: 'mango',
      subcategory: 'pulp',
      image: '/assets/jpg/mango%201-2.jpg',
      description: 'Vibrant yellow color with distinct tangy taste, perfect balance of sweet and sour flavor',
      benefits: [
        'High in Antioxidants',
        'Good Source of Fiber',
        'Ideal for juices & smoothies'
      ],
      applications: [
        'Beverages & Smoothies',
        'Ice Cream & Desserts',
        'Bakery Products',
        'Food Processing'
      ]
    },
    {
      id: 3,
      name: 'Kesar Mango Pulp',
      category: 'mango',
      subcategory: 'pulp',
      image: '/assets/jpg/mango%201-3.jpg',
      description: 'Saffron-like color and fragrant aroma with sweet flavor and pulpy texture',
      benefits: [
        'Vitamin C Rich',
        'Natural Energy Booster',
        'Perfect for ice creams'
      ],
      applications: [
        'Beverages & Smoothies',
        'Ice Cream & Desserts',
        'Bakery Products',
        'Food Processing'
      ]
    },
    {
      id: 4,
      name: 'White Guava Pulp',
      category: 'pulp',
      subcategory: 'aseptic',
      image: '/assets/jpg/mango%201-4.jpg',
      description: 'Smooth, sweet white guava pulp with a delicate flavor profile',
      benefits: [
        'High in Vitamin C',
        'Rich in Dietary Fiber',
        'Contains Antioxidants'
      ],
      applications: [
        'Beverages & Smoothies',
        'Jams & Jellies',
        'Bakery Products',
        'Dairy Products'
      ]
    },
    {
      id: 5,
      name: 'Pink Guava Pulp',
      category: 'pulp',
      subcategory: 'aseptic',
      image: '/assets/jpg/mango%201-5.jpg',
      description: 'Vibrant pink pulp with a sweet-tart flavor and aromatic profile',
      benefits: [
        'High in Lycopene',
        'Rich in Vitamin C',
        'Good Source of Potassium'
      ],
      applications: [
        'Beverages & Smoothies',
        'Jams & Jellies',
        'Bakery Products',
        'Dairy Products'
      ]
    },
    {
      id: 6,
      name: 'Pineapple Pulp',
      category: 'pulp',
      subcategory: 'aseptic',
      image: '/assets/jpg/mango%201-6.jpg',
      description: 'Tropical sweet and tangy pineapple pulp with bright flavor notes',
      benefits: [
        'Contains Bromelain Enzyme',
        'Rich in Manganese',
        'Good Source of Vitamin C'
      ],
      applications: [
        'Beverages & Smoothies',
        'Tropical Desserts',
        'Marinades & Sauces',
        'Bakery Products'
      ]
    },
    {
      id: 7,
      name: 'Mango Juice Concentrate',
      category: 'concentrate',
      subcategory: 'juice',
      image: '/assets/jpg/mango%201-7.jpg',
      description: 'Concentrated mango juice with intense flavor for dilution',
      benefits: [
        'Space-Efficient Storage',
        'Long Shelf Life',
        'Consistent Flavor Profile'
      ],
      applications: [
        'Juice Production',
        'Beverage Manufacturing',
        'Cocktails & Mocktails',
        'Flavoring Agent'
      ]
    },
    {
      id: 8,
      name: 'Frozen Alphonso Mango',
      category: 'frozen',
      subcategory: 'mango',
      image: '/assets/jpg/mango%201-8.jpg',
      description: 'Flash-frozen Alphonso mango pieces preserving peak harvest flavor',
      benefits: [
        'Preserves Fresh Flavor',
        'Year-Round Availability',
        'Maintains Nutritional Value'
      ],
      applications: [
        'Smoothies & Desserts',
        'Baking & Cooking',
        'Fruit Salads',
        'Direct Consumption'
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-green-50">
      {/* Navigation */}
      <ClientHeader />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Premium Products
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Explore our range of high-quality fruit products, from fresh pulp to concentrates.
            100% natural with no preservatives added.
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
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 
                  bg-gray-100 text-green-700 hover:bg-yellow-100 hover:text-yellow-700`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
              >
                <div className="aspect-square relative overflow-hidden rounded-xl mb-6">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    loading="eager"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-green-100 flex items-center justify-center shadow-inner" style={{display: 'none'}}>
                    <div className="text-center p-4">
                      <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-3xl">🥭</span>
                      </div>
                      <h3 className="text-base font-semibold text-green-800 mb-1">{product.name}</h3>
                      <p className="text-sm text-green-600 capitalize font-medium">{product.subcategory}</p>
                      <div className="mt-2 px-3 py-1 bg-green-100 rounded-full inline-block">
                        <span className="text-xs text-green-700">Premium Quality</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className="inline-block px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm bg-green-100/80 text-green-800">
                      {product.subcategory.toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-green-800 mb-4 group-hover:text-yellow-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-green-600 mb-6">{product.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-green-800 mb-2">Benefits</h4>
                      <ul className="text-sm text-green-600 space-y-2">
                        {product.benefits.map((benefit, index) => (
                          <li key={index}>• {benefit}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-green-800 mb-2">Applications</h4>
                      <ul className="text-sm text-green-600 space-y-2">
                        {product.applications.map((application, index) => (
                          <li key={index}>• {application}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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