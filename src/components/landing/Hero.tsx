import React, { useState } from "react";
import { Link } from "react-router-dom";
import { routingConfig } from "@constants/RoutingConfig";
import video from "@assets/video1.mp4";
import double from "../../assets/logo.png";
import { Menu, X } from "lucide-react";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative flex h-screen w-screen flex-col overflow-hidden">
      <header className="relative z-20 h-24 w-full bg-white bg-opacity-20">
        <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4 lg:px-6">
          <div className="relative">
            <Link to={routingConfig.HOME} className="flex items-center font-medium text-gray-900">
              <img className="w-32 md:w-60" src={double} alt="Logo" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 items-center justify-end space-x-4">
            <Link
              to={routingConfig.PRICING}
              className="w-auto rounded-full px-8 py-3 text-sm font-medium text-white hover:text-[#ffb300]"
            >
              Privacy Policy
            </Link>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=919535126699&text=Hi%20the%20vibe%20venue%2C%0AAm%20looking%20to%20book%20Private%20Theatre"
              className="w-auto px-8 py-3 text-sm font-medium text-black bg-[#ffb300] hover:bg-[#e6a100] transition"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Navigation */}
          <div className={`
            lg:hidden fixed top-24 left-0 right-0 bg-black bg-opacity-90 transition-transform duration-300
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}>
            <div className="flex flex-col items-center space-y-4 py-6">
              <Link
                to={routingConfig.PRICING}
                className="w-full text-center py-3 text-sm font-medium text-white hover:text-[#ffb300]"
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy Policy
              </Link>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=919535126699&text=Hi%20the%20vibe%20venue%2C%0AAm%20looking%20to%20book%20Private%20Theatre"
                className="w-auto px-8 py-3 text-sm font-medium text-black bg-[#ffb300] hover:bg-[#e6a100] transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </header>

      <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none brightness-50 grayscale-20">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <main className="relative py-10 z-20 px-4 md:px-6 h-full w-screen">
        <div className="mx-auto flex h-full w-full max-w-4xl flex-col items-center justify-center space-y-6 text-center">
          <h1 className="font-landasans font-bold text-4xl sm:text-6xl md:text-9xl lg:text-[150px] text-[#ffb300] opacity-60 tracking-widest">
            THE VIBE VENUE 
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl md:leading-8 text-white">
            Private theatre for every celebration, we capture your special moments with a cinematic touch, turning them into timeless memories.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              target="_blank" 
              href="https://api.whatsapp.com/send?phone=919535126699&text=Hi%20the%20vibe%20venue%2C%0AAm%20looking%20to%20book%20Private%20Theatre" 
              className="bg-[#ffb300] px-6 py-3 text-md font-medium text-black hover:bg-[#cfa238] text-center"
            >
              Book Now
            </a>
            <a 
              href="https://wa.me/c/918762726699" 
              target="_blank" 
              className="border border-[#ffb300] px-6 py-3 text-md font-medium text-[#ffb300] hover:bg-white text-center"
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