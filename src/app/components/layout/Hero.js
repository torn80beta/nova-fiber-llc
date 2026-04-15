"use client";

export default function Hero() {
  return (
    <div className="bg-[url('/image/hero.jpg')] bg-cover bg-center min-h-screen min-w-full flex flex-col justify-between">
      <div className="box-border max-w-7xl mx-auto ">
        {/* Menu */}
        <nav className="flex justify-between items-center py-6 px-6">
          <div className="text-white text-2xl font-bold">NovaFiber LLC</div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="navbar-item">
              Features
            </a>
            <a href="#pricing" className="navbar-item">
              Pricing
            </a>
            <a href="#about" className="navbar-item">
              About Us
            </a>
            <a href="#contacts" className="navbar-item">
              Contacts
            </a>
          </div>
          {/* Mobile menu button - can be added later if needed */}
        </nav>

        {/* Hero Content */}
        <div className="grow flex items-center justify-center text-center px-12">
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
      <span className="h-20 bg-linear-to-t from-white to-transparent"></span>
    </div>
  );
}
