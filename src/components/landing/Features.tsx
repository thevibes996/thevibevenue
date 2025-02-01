import React from "react";
import arrow from "@assets/arrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay, Virtual } from "swiper/core";
import img1 from "../../assets/stellar1.jpg";
import img2 from "../../assets/sc.png";
import img3 from "../../assets/ann.jpg";
import img4 from "../../assets/mitt.jpg";

import "swiper/swiper-bundle.css";
import "../../styles.css";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

const favorites = [
  {
    id: 4,
    name: "Birthday Events",
    price:
      "Make your birthday unforgettable with our all-inclusive packages! Enjoy exclusive access to our private theatre, luxurious decorations, a mouthwatering cake, and fun add-ons. Let us help you create a truly memorable celebration!",
    imageSrc: img1,
    imageAlt: ""
  },
  {
    id: 1,
    name: "Bridal Shower",
    price:
      "Create the perfect bridal shower with us! Our all-inclusive packages offer exclusive access to our private theatre, exquisite decorations, a delectable cake, and exciting add-ons to make your celebration unforgettable.",
    imageSrc: img2,
    imageAlt: ""
  },
  {
    id: 2,
    name: "Anniversary Party",
    price:
      "Celebrate your love with a memorable anniversary event! Enjoy the intimate ambiance of our private theatre, thoughtfully decorated for your special day, and indulge in a delightful cake. We're dedicated to making this moment unforgettable for you both.",
    imageSrc: img3,
    imageAlt: ""
  },
  {
    id: 3,
    name: "Many more",
    price:
      "The excitement continues! Discover more of our exclusive services, including Surprise Baby Shower Packages, Private Theatre Packages, and Proposal Packages. Whatever you're celebrating, we're here to make it extraordinary!",
    imageSrc: img4,
    imageAlt: ""
  }
];

const Features = () => {
  const breakpoints = {
    1100: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 2
    },
    464: {
      slidesPerView: 1
    },
    0: {
      slidesPerView: 1
    }
  };

  return (
    <section aria-labelledby="favorites-heading">
      <div className="mx-auto max-w-7xl pt-20 pb-32">
        <div className="flex flex-col px-4 pb-10">
          <h2 className="mx-auto max-w-4xl text-3xl font-bold font-kanit py-4">What We Offer</h2>
        </div>
        <Swiper id="swiper" slidesPerView={3} spaceBetween={20} slidesPerGroup={1} breakpoints={breakpoints} navigation>
          {favorites.map((favorite, index) => (
            <SwiperSlide key={index}>
              <div key={favorite.id} className="group relative">
                <div className="h-72 w-full overflow-hidden rounded-lg relative">
                  <img
                    src={favorite.imageSrc}
                    alt={favorite.imageAlt}
                    className="h-full w-full object-cover object-center transition-all duration-300 ease-in-out group-hover:opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-all duration-300 ease-in-out"></div>
                </div>
                <h3 className="mt-4 px-2 text-lg font-semibold text-gray-900">
                  <a href={favorite.href} className="flex justify-between items-center">
                    <span className="font-kanit font-bold text-xl">{favorite.name}</span>
                    <img src={arrow} alt="arrow" className="h-6 w-6" />
                  </a>
                </h3>
                <p className="mt-1 px-2 text-sm text-gray-500">{favorite.price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Features;
