import React, { useState } from "react";
import { Link } from "react-router-dom";
import { routingConfig } from "@constants/RoutingConfig";
import video from "@assets/video1.mp4";
import double from "../../assets/logo.png";
import { Menu, X } from "lucide-react";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="relative flex h-screen w-screen flex-col overflow-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 h-24 bg-black bg-opacity-50">
        <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4">
          <Link to={routingConfig.HOME}>
            <img className="w-32 md:w-60" src={double} alt="Logo" />
          </Link>

          <button 
            onClick={toggleMenu}
            className="lg:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden lg:flex items-center gap-6">
            <a href="#Features" className="text-white hover:text-[#ffb300]">Services</a>
            <a href="#about" className="text-white hover:text-[#ffb300]">About Us</a>
            <a href="#photo" className="text-white hover:text-[#ffb300]">Gallery</a>
            <a href="#contact" className="text-white hover:text-[#ffb300]">Contact Us</a>
            <a
              href="https://api.whatsapp.com/send?phone=919535126699&text=Hi%20the%20vibe%20venue%2C%0AAm%20looking%20to%20book%20Private%20Theatre"
              className="px-8 py-3 text-sm font-medium text-black bg-[#ffb300] hover:bg-[#e6a100]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
          </nav>

          {isMenuOpen && (
            <div className="fixed inset-0 top-24 z-40 bg-black lg:hidden">
              <nav className="flex flex-col items-center gap-8 pt-12">
                <a href="#Features" onClick={closeMenu} className="text-2xl text-white hover:text-[#ffb300]">Services</a>
                <a href="#about" onClick={closeMenu} className="text-2xl text-white hover:text-[#ffb300]">About Us</a>
                <a href="#photo" onClick={closeMenu} className="text-2xl text-white hover:text-[#ffb300]">Gallery</a>
                <a href="#contact" onClick={closeMenu} className="text-2xl text-white hover:text-[#ffb300]">Contact Us</a>
                <a
                  href="https://api.whatsapp.com/send?phone=919535126699&text=Hi%20the%20vibe%20venue%2C%0AAm%20looking%20to%20book%20Private%20Theatre"
                  className="px-8 py-3 text-xl font-medium text-black bg-[#ffb300] hover:bg-[#e6a100]"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  Book Now
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none brightness-50">
        <source src={video} type="video/mp4" />
      </video>

      <main className="relative z-20 flex h-full items-center justify-center px-4">
        <div className="max-w-4xl space-y-6 text-center">
          <h1 className="font-landasans text-4xl sm:text-6xl md:text-9xl lg:text-[150px] text-[#ffb300] opacity-60 tracking-widest">
            THE VIBE VENUE 
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white">
            Private theatre for every celebration, we capture your special moments with a cinematic touch, turning them into timeless memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://api.whatsapp.com/send?phone=919535126699&text=Hi%20the%20vibe%20venue%2C%0AAm%20looking%20to%20book%20Private%20Theatre"
              className="bg-[#ffb300] px-6 py-3 text-md font-medium text-black hover:bg-[#cfa238]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
            <a 
              href="https://wa.me/c/918762726699"
              className="border border-[#ffb300] px-6 py-3 text-md font-medium text-[#ffb300] hover:bg-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Order customized cake
            </a>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Hero;