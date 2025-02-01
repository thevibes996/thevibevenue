import React from "react";
import { Link } from "react-router-dom";
import { routingConfig } from "@constants/RoutingConfig";
import video from "@assets/video1.mp4";
import double from "../../assets/logo.png";

const Hero = () => {
  return (
    <section className="relative flex h-screen w-screen flex-col overflow-hidden">
      <header className="relative z-20 h-24 w-full bg-white bg-opacity-20">
        <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-6">
          <div className="relative">
            <Link to={routingConfig.HOME} className="flex items-center font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-start md:mb-0">
              <img className="grayscale w-14" src={double} alt="" />
            </Link>
          </div>

          <div className="flex flex-1 items-center px-2 ml-6 justify-end">
            <div className="relative space-x-4 font-roboto">
              <Link
                to={routingConfig.PRICING}
                className="w-auto rounded-full sm:px-8 px-4 py-3 text-xs sm:text-sm font-medium text-white hover:text-[#ffb300] "
              >
                Privacy Policy
              </Link>
            </div>
            {/* <div className="relative space-x-4 ">
              <Link
                to={routingConfig.REGISTER}
                className="w-auto rounded-full sm:px-8 px-4 py-3 text-xs sm:text-sm font-medium text-white hover:text-[#ffb300]"
              >
                REGISTER
              </Link>
            </div> */}
            <div className="relative space-x-4 ">
            <a
        target="_blank" href="https://api.whatsapp.com/send?phone=919535126699&text=Hi%20the%20vibe%20venue%2C%0AAm%20looking%20to%20book%20Private%20Theatre"
        className="w-auto sm:px-8 px-4 py-3 text-xs sm:text-sm font-medium text-white bg-[#ffb300] hover:bg-[#e6a100] transition"
      >
        BOOK NOW
      </a>
            </div>
          </div>
        </div>
      </header>
      <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none brightness-50">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <main className="relative py-10 z-20 px-10 md:px-6 h-full w-screen">
        <div className="mx-auto flex h-full w-full max-w-4xl flex-col items-center justify-center space-y-6 text-center">
          <h1 className="font-landasans font-bold text-6xl md:text-9xl lg:text-[150px]  text-[#ffb300] opacity-100 tracking-widest">
            The Vibe Venue 
          </h1>
          <p className=" mx-auto max-w-2xl sm:text-lg md:text-xl md:leading-8 text-[#ffffff] ">For every celebration, we capture your special moments with a cinematic touch, turning them into timeless memories.</p>
          <div className="flex space-x-4">
            <a target="_blank" href="https://api.whatsapp.com/send?phone=919535126699&text=Hi%20the%20vibe%20venue%2C%0AAm%20looking%20to%20book%20Private%20Theatre" className="bg-[#ffb300] px-6 py-3 text-md font-medium text-black hover:bg-[#cfa238]">Book Now</a>
            <a href="https://wa.me/c/918762726699" target="_blank" className=" border border-[#ffb300] px-6 py-3 text-md font-medium text-[#ffb300] hover:bg-[#ffffff]
            ">Order customized cake</a>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Hero;
