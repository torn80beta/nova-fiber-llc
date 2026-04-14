import React from "react";

const Hero = () => {
  return (
    <div className="bg-[url('/image/hero.jpg')] bg-cover bg-center min-h-screen flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Menu */}
        <nav className="flex justify-between items-center py-6">
          <div className="text-white text-2xl font-bold">NovaFiber LLC</div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-white hover:text-gray-300">
              Features
            </a>
            <a href="#pricing" className="text-white hover:text-gray-300">
              Pricing
            </a>
            <a href="#about" className="text-white hover:text-gray-300">
              About Us
            </a>
            <a href="#contacts" className="text-white hover:text-gray-300">
              Contacts
            </a>
          </div>
          {/* Mobile menu button - can be added later if needed */}
        </nav>

        {/* Hero Content */}
        <div className="grow flex items-center justify-center text-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to NovaFiber LLC
            </h1>
            <p className="text-xl md:text-2xl">
              Professional upholstery and carpet cleaning service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
