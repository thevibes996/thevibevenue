import React from "react";
import video1 from "../../assets/photo.jpg";
import arrow from "../../assets/arrow.svg";

const Pricing = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full py-2 bg-white bg-cover">
      <div>
        <img src={video1} alt="Coach dipan about me" className="z-10 object-cover w-full h-full grayscale" />
        <img src={arrow} alt="Coach dipan about me" className="z-11 w-20 md:w-32 lg:w-52 absolute bottom-0 right-0 " />

      </div>
    </section>
  );
};

export default Pricing;
