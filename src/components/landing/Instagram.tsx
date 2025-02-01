import React, { Component, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay, Virtual } from "swiper/core";
import "swiper/swiper-bundle.css";

import "../../styles.css";
SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

export default function Instagram() {
  const [reels, setReels] = useState([]);
  // const [datas , setData] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://graph.instagram.com/v18.0/7068237776622134/media?access_token=IGQWRQWF9kNWxmam5SN0NqR2dsMFF1QVR3NVJEeDlVUHVZATkNyZAFNLWkJYZA0owXzFBRGhYUXpfYkhBOGloa3p0SHpjZA00xZAldOa0pKTHZALbU9WTTV6MW5vaExGamZAfWkZAwdVdXVkpzUFhLU1gxcmkyY3ZACN1lrZA0UZD&fields=media_url"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        setReels(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(
    "data",
    reels.map((photo) => {
      console.log("photo", photo["media_url"]);
    })
  );

  const breakpoints = {
    1100: {
      slidesPerView: 6
    },
    768: {
      slidesPerView: 6
    },
    576: {
      slidesPerView: 6
    }
  };
  return (
    <section>
      <div className="w-full  py-24  sm:py-32">
        <h2 className=" text-center text-3xl  dark md:text-4xl font-kanit uppercase">Follow on IG</h2>
        <div className="w-full flex justify-center">
          {" "}
          <a href="https://www.instagram.com/TheVibeVenueboxingacademy?igsh=MWoxdXhta3VzYmVsNg==" className="mb-12 p-2 text-center text-base md:text-3xl text-slate-500 font-mono  w-fit bg-[#ffb300] ">@TheVibeVenueboxingacademy</a>
        </div>
        {/* {reels.length > 0 && (
          <Swiper id="swiper" virtual slidesPerView={6} spaceBetween={0} breakpoints={breakpoints}>
            {[...reels, ...reels, ...reels].map((photo, index) => (
              <SwiperSlide key={index}>
                <div className="  overflow-hidden h-68">
                  <video className="h-full w-full object-cover object-center" autoPlay muted>
                    <source type="video/mp4" src={photo["media_url"]} />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )} */}
      </div>
    </section>
  );
}
