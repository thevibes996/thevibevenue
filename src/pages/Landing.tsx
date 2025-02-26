import React, { useEffect } from "react";
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
  useEffect(() => {
    // Ensure the script only runs in the browser
    if (typeof window === "undefined") return;

    const scriptId = "whatsapp-widget-script";

    // Prevent multiple script injections
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?84234";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.CreateWhatsappChatWidget) {
          window.CreateWhatsappChatWidget({
            enabled: true,
            chatButtonSetting: {
              backgroundColor: "#25d366",
              ctaText: "Chat with us",
              borderRadius: "25",
              marginLeft: "0",
              marginRight: "20",
              marginBottom: "20",
              ctaIconWATI: true,
              position: "right",
            },
            brandSetting: {
              brandName: "Wati",
              brandSubTitle: "undefined",
              brandImg: "https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg",
              welcomeText: "Hi there!\nHow can I help you?",
              messageText: "Hello, %0A I have a question about {{page_title}}",
              backgroundColor: "#25d366",
              ctaText: "Chat with us",
              borderRadius: "25",
              autoShow: false,
              phoneNumber: "919535126699",
            },
          });
        }
      };
    }
  }, []);

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
