import { useState } from 'react';
import { Play, X, Mail, Phone, MapPin, Star } from 'lucide-react';

const CashewPortfolio = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [activeSection, setActiveSection] = useState('gallery');

  // Sample data - replace with your actual content
  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=400', alt: 'Premium Raw Cashews', title: 'Premium Raw Cashews' },
    { id: 2, src: 'https://images.unsplash.com/photo-1599599810694-57a2ca8276a8?w=400', alt: 'Roasted Cashews', title: 'Roasted Cashews' },
    { id: 3, src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400', alt: 'Salted Cashews', title: 'Salted Cashews' },
    { id: 4, src: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400', alt: 'Cashew Processing', title: 'Processing Facility' },
    { id: 5, src: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400', alt: 'Quality Check', title: 'Quality Assurance' },
    { id: 6, src: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400', alt: 'Packaging', title: 'Premium Packaging' }
  ];

  const videos = [
    { id: 1, thumbnail: 'https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=400', title: 'Cashew Processing Overview', duration: '2:30' },
    { id: 2, thumbnail: 'https://images.unsplash.com/photo-1599599810694-57a2ca8276a8?w=400', title: 'Quality Control Process', duration: '1:45' },
    { id: 3, thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400', title: 'Roasting Techniques', duration: '3:15' },
    { id: 4, thumbnail: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400', title: 'Packaging & Delivery', duration: '1:20' }
  ];

  const testimonials = [
    { name: 'Sarah Johnson', company: 'Premium Foods Ltd', rating: 5, text: 'Outstanding quality cashews! Our customers love the consistent taste and freshness.' },
    { name: 'Mike Chen', company: 'Healthy Snacks Co', rating: 5, text: 'Reliable supplier with excellent packaging. Never had any quality issues.' },
    { name: 'Lisa Rodriguez', company: 'Gourmet Nuts Inc', rating: 5, text: 'Best cashews in the market. Great pricing and fantastic customer service.' }
  ];

  const openModal = (media, type) => {
    setSelectedMedia({ ...media, type });
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-lg sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">AT</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Arun Traders</h1>
                <p className="text-sm text-gray-600">Premium Quality Cashews</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <button
                onClick={() => setActiveSection('gallery')}
                className={`px-4 py-2 rounded-full transition-all ${activeSection === 'gallery' ? 'bg-orange-500 text-white' : 'text-gray-600 hover:text-orange-500'}`}
              >
                Gallery
              </button>
              <button
                onClick={() => setActiveSection('videos')}
                className={`px-4 py-2 rounded-full transition-all ${activeSection === 'videos' ? 'bg-orange-500 text-white' : 'text-gray-600 hover:text-orange-500'}`}
              >
                Videos
              </button>
              <button
                onClick={() => setActiveSection('testimonials')}
                className={`px-4 py-2 rounded-full transition-all ${activeSection === 'testimonials' ? 'bg-orange-500 text-white' : 'text-gray-600 hover:text-orange-500'}`}
              >
                Reviews
              </button>
              <button
                onClick={() => setActiveSection('contact')}
                className={`px-4 py-2 rounded-full transition-all ${activeSection === 'contact' ? 'bg-orange-500 text-white' : 'text-gray-600 hover:text-orange-500'}`}
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Arun Traders <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Premium Cashews</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover our exceptional range of premium cashews, carefully selected and processed to deliver the finest quality for your business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-orange-500">500+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-orange-500">100%</div>
              <div className="text-sm text-gray-600">Quality Assured</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-orange-500">24/7</div>
              <div className="text-sm text-gray-600">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        {/* Image Gallery */}
        {activeSection === 'gallery' && (
          <section className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Product Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image) => (
                <div
                  key={image.id}
                  className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
                  onClick={() => openModal(image, 'image')}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="font-semibold">{image.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Video Gallery */}
        {activeSection === 'videos' && (
          <section className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Video Showcase</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
                  onClick={() => openModal(video, 'video')}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-300">
                      <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-orange-500" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="font-semibold mb-1">{video.title}</h4>
                      <span className="text-sm bg-black/50 px-2 py-1 rounded">{video.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Testimonials */}
        {activeSection === 'testimonials' && (
          <section className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Customer Reviews</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Get In Touch</h3>
            
            {/* Owner/Business Contact Info */}
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 mb-12 text-white">
              <div className="max-w-4xl mx-auto">
                <h4 className="text-2xl font-bold mb-6 text-center">Business Owner Contact</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Phone className="w-8 h-8" />
                    </div>
                    <h5 className="font-semibold mb-2">Primary Phone</h5>
                    <p className="text-orange-100">+91 93810-28413</p>
                    <p className="text-orange-100 text-sm mt-1">Available 11 AM - 9 PM IST</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Mail className="w-8 h-8" />
                    </div>
                    <h5 className="font-semibold mb-2">Direct Email</h5>
                    <p className="text-orange-100">akveerappan@gmail.com</p>
                    <p className="text-orange-100 text-sm mt-1">Response within 24 hours</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <MapPin className="w-8 h-8" />
                    </div>
                    <h5 className="font-semibold mb-2">Business Location</h5>
                    <p className="text-orange-100">54 Varadhamuthiappan Street</p>
                    <p className="text-orange-100">Kothwal Bazaar, Chennai - 600001</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg">
                <h4 className="text-2xl font-bold mb-6 text-gray-800">Additional Contact Methods</h4>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-500 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">WhatsApp Business</div>
                      <div className="text-gray-600">+91 94446 77448</div>
                      <div className="text-sm text-gray-500 mt-1">Fast responses for urgent inquiries</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-500 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">Sales Inquiries</div>
                      <div className="text-gray-600">sales@cashewcraft.com</div>
                      <div className="text-sm text-gray-500 mt-1">For bulk orders and pricing</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-500 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">Customer Support</div>
                      <div className="text-gray-600">support@cashewcraft.com</div>
                      <div className="text-sm text-gray-500 mt-1">For existing order queries</div>
                    </div>
                  </div>

                  <div className="border-t pt-4 mt-6">
                    <h5 className="font-semibold text-gray-800 mb-3">Business Hours</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monday - Friday:</span>
                        <span className="text-gray-800 font-medium">8:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Saturday:</span>
                        <span className="text-gray-800 font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sunday:</span>
                        <span className="text-gray-800 font-medium">10:00 AM - 4:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg">
                <h4 className="text-2xl font-bold mb-6 text-gray-800">Send Quick Message</h4>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone (Optional)"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none transition-colors"
                  />
                  <select className="w-full p-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none transition-colors">
                    <option value="">Select Inquiry Type</option>
                    <option value="bulk-order">Bulk Order Inquiry</option>
                    <option value="product-info">Product Information</option>
                    <option value="pricing">Pricing & Quotation</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none transition-colors resize-none"
                  ></textarea>
                  <button
                    onClick={() => alert('Message sent! We will contact you within 24 hours.')}
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-3 rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all duration-300 font-semibold"
                  >
                    Send Message
                  </button>
                  <p className="text-xs text-gray-500 text-center">
                    We typically respond within 2-4 hours during business hours
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            {selectedMedia.type === 'image' ? (
              <img
                src={selectedMedia.src}
                alt={selectedMedia.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            ) : (
              <div className="bg-gray-900 rounded-lg p-8 text-center">
                <Play className="w-16 h-16 text-white mx-auto mb-4" />
                <h3 className="text-white text-xl mb-2">{selectedMedia.title}</h3>
                <p className="text-gray-400">Video player would be implemented here</p>
                <p className="text-gray-400 text-sm mt-2">Duration: {selectedMedia.duration}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">AT</span>
            </div>
            <span className="text-xl font-bold">Arun Traders</span>
          </div>
          <p className="text-gray-400 mb-4">Premium Quality Cashews for Your Business</p>
          <p className="text-gray-500 text-sm">© 2025 Arun Traders. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CashewPortfolio;