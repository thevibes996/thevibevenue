import React, { useState } from "react";
import arrow from "@assets/arrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay, Virtual } from "swiper/core";
import img1 from "../../assets/boxing.jpg";
import img2 from "../../assets/sc.jpg";
import img3 from "../../assets/hiit.jpg";
import img4 from "../../assets/mitt.jpg";

import "swiper/swiper-bundle.css";
import "../../styles.css";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

const favorites = [
  {
    id: 4,
    name: "Fighter Training (Pro & Amateur)",
    price:
      "Dedicated training for seasoned and new fighters. Suitable for all professional and aspiring combat sports athletes. Learn advanced boxing techniques and develop your skills for your next amateur or professional bout",
    href: "#",
    imageSrc: img1,
    imageAlt: ""
  },
  {
    id: 1,
    name: "S & C Training",
    price:
      "Strength and conditioning (S&C) training is a specialized form of exercise that aims to enhance an individual's physical capabilities and overall performance. It typically involves a variety of exercises and techniques designed to improve strength, power, endurance, speed, agility, and flexibility. ",
    href: "#",
    imageSrc: img2,
    imageAlt: ""
  },
  {
    id: 2,
    name: "Group Boxing",
    price:
      "Suitable for ages 16 and above. Learn the art of boxing in our open air group classes. Perfect for beginners and those looking to get fit while learning one of the oldest combat sports in the world",
    href: "#",
    imageSrc: img3,
    imageAlt: ""
  },
  {
    id: 3,
    name: "Kids Boxing",
    price:
      "For ages 15 and below. Enroll your child in the best boxing classes in Bangalore. Great for building self confidence and inculcating discipline and focus in kids. Safe and supervised by coaches with over 10 years of experience training young champions",
    href: "#",
    imageSrc: img4,
    imageAlt: ""
  },
  {
    id: 4,
    name: "Private Boxing",
    price:
      "Accelerate your training and reach your fitness goals with personalised 1-on-1 training sessions. Take advantage of tailored boxing workouts designed JUST FOR YOU. Suitable for all age groups and genders",
    href: "#",
    imageSrc: img4,
    imageAlt: ""
  },
];

const Features = () => {
  const breakpoints = {
    1100: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 0
    },
    464: {
      slidesPerView: 0
    },
    0: {
      slidesPerView: 0
    }
  };
  return (

    <section aria-labelledby="favorites-heading">
      <div className="mx-auto max-w-7xl pt-20 pb-48">
      <div className="flex flex-col px-4  pb-14">
        <h2 className="mx-auto max-w-4xl text-4xl font-bold font-kanit py-4">ACHIEVEMENTS</h2>
        <p className=" flex text-center justify-center items-center py-4">
          Our team boasts numerous achievements, including multiple medals in state boxing championships and <br /> consistent participation in national and
          professional boxing events.
        </p>
      </div>
        {
          <Swiper id="swiper" slidesPerView={3} spaceBetween={30} slidesPerGroup={2} breakpoints={breakpoints} navigation>
            {favorites.map((favorite, index) => (
              <SwiperSlide key={index}>
                <div key={favorite.id} className="group relative">
                  <div className="h-96 w-full overflow-hidden  aspect-h-3 aspect-w-2 group-hover:opacity-75 sm:h-auto">
                    <img src={favorite.imageSrc} alt={favorite.imageAlt} className="h-full w-full object-cover object-center hue-rotate-15 brightness-90" />
                  </div>
                  <h3 className="mt-4 px-2  text-base font-semibold text-gray-900">
                    <a href={favorite.href}>
                      <div className="font-kanit flex flex-row justify-between space-x-60 font-bold text-3xl leading-7">
                        <h1> {favorite.name} </h1>
                        <img src={arrow} alt="arrow" className="h-10 w-7 mb-6" style={{ marginLeft: "100px" }} />
                      </div>
                    </a>
                  </h3>
                  <p className="mt-1 px-2 text-sm text-gray-500">{favorite.price}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        }
      </div>
    </section>
  );
};

export default Features;
