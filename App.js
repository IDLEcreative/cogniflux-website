import React from 'react';
import About from './components/About';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-gray-900/95 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            CogniFlux
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#services" className="hover:text-emerald-400 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-emerald-400 transition-colors">Portfolio</a>
            <button className="px-6 py-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full text-gray-900 font-semibold hover:shadow-lg hover:shadow-emerald-500/20 transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6" id="home">
        <div className="text-center z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Empowering the Future of Automation with AI
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Transform your business processes with cutting-edge AI solutions
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full text-gray-900 font-semibold text-lg hover:shadow-lg hover:shadow-emerald-500/20 transition-all">
            Get Started
          </button>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Services Section (to be added) */}
      {/* Portfolio Section (to be added) */}
      {/* Contact Section (to be added) */}

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Contact Support</a>
          </div>
          <p>© 2024 CogniFlux. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;