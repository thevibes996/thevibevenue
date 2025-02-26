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
    // Run only on client-side
    if (typeof window === "undefined") return;

    const scriptId = "whatsapp-widget-script";

    // Remove existing script if present (prevents conflicts)
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?84234";
    script.async = true;
    
    script.onload = () => {
      console.log("WhatsApp script loaded");
      if (window.CreateWhatsappChatWidget) {
        console.log("Initializing WhatsApp widget...");
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
      } else {
        console.error("CreateWhatsappChatWidget function not found");
      }
    };

    script.onerror = () => console.error("Failed to load WhatsApp widget script");

    document.body.appendChild(script);
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      <Hero />
      <Features />
      <About />
      <Quote />
      <Photo />
      <Testimonial />
      <Instagram />
      <ContactUs />
    </div>
  );
}
