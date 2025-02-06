import React from "react";
import AboutPic from "../../assets/aboutme.jpg";

export default function About() {
  return (
    <section id="about" className="relative flex flex-col items-center justify-center w-full px-6 py-35 bg-neutral-800 bg-cover lg:py-32">
      <div className="flex flex-col max-w-7xl gap-4 mx-auto h-full lg:flex-row">
        <div className="relative z-20 flex flex-col w-full text-2xl text-gray-700 lg:w-1/2 items-start">
          <h1 className="relative z-20 text-3xl font-bold leading-none xl:text-4xl text-left sm:text-start" data-primary="purple-500">
            <span className="text-white text-4xl font-bold font-kanit">
              Why <span className="text-[#ffb300]">Celebrate with Us?</span>
            </span>
          </h1>
          <p className="relative z-20 block mt-6 text-base text-[#ececec] xl:text-md sm:text-center lg:text-left">
            Choosing the perfect venue can elevate your celebration to a whole new level, and we're here to make it happen! 
            From intimate gatherings to grand celebrations, we transform your vision into a reality. Here’s why we’re your best choice:
            <br /> <br />
            🎉 <strong>Affordable Luxury:</strong> Enjoy premium services without stretching your budget. Our flexible packages ensure you get the best experience at the right price.
            <br /> <br />
            ⭐ <strong>Unmatched Service:</strong> Our dedicated team takes care of every detail, so you can focus on making memories. Expect professionalism, creativity, and seamless execution.
            <br /> <br />
            🎬 <strong>Versatile Experiences:</strong> Whether it's a private movie night, a romantic proposal, or an anniversary celebration, we tailor our services to create unforgettable moments just for you.
            <br /> <br />
            Let’s make your special day truly extraordinary!
          </p>
        </div>
        <div className="relative flex flex-col justify-around items-center h-full gap-10 w-full rounded-lg cursor-pointer lg:w-1/2">
          <div className="relative overflow-hidden border border-[#ffb300] cursor-pointer" data-rounded="rounded-md" data-rounded-max="rounded-full">
            <img src={AboutPic} alt="Celebrate with us" className="z-10 object-cover w-96 h-96" />
          </div>
        </div>
      </div>
    </section>
  );
}
