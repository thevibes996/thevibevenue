import React from "react";
import Features from "@components/landing/Features";
import Hero from "@components/landing/Hero";
import Photo from "@components/landing/Photo";
import Quote from "@components/landing/Quote";
import Video from "@components/landing/Video";
import Testimonial from "@components/landing/Testimonial";

import About from "@components/landing/About";
import Instagram from "@components/landing/Instagram";
import ContactUs from "@components/landing/ContactUs";
import Equipment from "@components/landing/Equipment";


export default function Landing() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Hero />
      <Features />
      {/* <Video /> */}
      {/* <Equipment /> */}
      <About />
      <Quote />
      <Photo />
      <Testimonial />
      <Instagram />
      <ContactUs />
    </div>
  );
}