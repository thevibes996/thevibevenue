import React, { Component } from "react";
import double from "../../assets/double.png";
import google from "@assets/google.png";
import arrow from "@assets/arrow.svg";

import ReactStars from "react-stars";

export default class Video extends Component {
  render() {
    return (
      <div>
        <div className="mx-auto max-w-7xl px-6 py-32">
          <h2 className="mb-12 text-center text-3xl font-bold  dark md:text-4xl font-kanit uppercase">What our customers say</h2>
          <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
            <div className="row-span-2   p-8 text-center border border-[#ffb300]">
              <div className="flex h-full flex-col justify-center space-y-4w-full ">
                <img className="w-10" src={double} />
                <div className="flex justify-center text-center justify-items-center">
                  <p className="md:text-[16px] w-[70%]">
                  "We celebrated my birthday at this amazing venue, and it was a blast! The private theatre made it feel so personal, and the decorations were top-notch. The cake was a hit, and the extra touches really made the day extra special. Highly recommend!
                    <p className="font-bold py-4">Adarsh Reddy</p>
                  </p>
                </div>
                <div className="w-full flex justify-items-end text-right justify-end ">
                  <img className="w-10 " src={double} />
                </div>
              </div>
            </div>

            <div className=" sm:flex sm:space-x-8   border border-[#ffb300] p-8 text-center ">
              <div className="flex h-full flex-col justify-center space-y-4w-full ">
                <img className="w-10" src={double} />
                <div className="flex justify-center text-center justify-items-center">
                  <p className="md:text-[16px] w-[70%]">
                  Our anniversary celebration at the private theatre was beyond perfect! The intimate setting, gorgeous decorations, and delicious cake made it an unforgettable experience. We felt so special, and everything was taken care of – truly a magical evening!
                    <p className="font-bold py-4">Sujith Sha</p>
                  </p>
                </div>
                <div className="w-full flex justify-items-end text-right justify-end ">
                  <img className="w-10 " src={double} />
                </div>
              </div>
            </div>
            <div className=" sm:flex sm:space-x-8  border border-[#ffb300]  p-8 text-center ">
              <div className="flex h-full flex-col justify-center space-y-4w-full ">
                <img className="w-10" src={double} />
                <div className="flex justify-center text-center justify-items-center">
                  <p className="md:text-[16px] w-[70%]">
                  Booked the private theatre for a special date night, and it was incredible! The atmosphere was so romantic, the decorations were beautiful, and the cake was a delightful surprise. It felt like a truly unique and unforgettable experience. Highly recommend for anyone looking to make a date extra special!
                    <p className="font-bold py-4">Vinay Vinnu</p>
                  </p>
                </div>
                <div className="w-full flex justify-items-end text-right justify-end ">
                  <img className="w-10 " src={double} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Reviews */}
        <div className="flex justify-center justify-items-center items-center">
          <div className="flex flex-col sm:flex-row gap-10  p-4 ">
            <a
              href="https://www.google.com/maps/place/The+Vibe+Venue+%26+PS+Cakes/@12.7139436,77.6967545,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae6f0009f4df83:0x471ffd7333857b38!8m2!3d12.7139436!4d77.6993294!16s%2Fg%2F11x04sf7ty?hl=en-IN&entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"
              className="flex flex-row-2w-full    justify-center justify-items-center text-center items-center "
            >
              <div className="row-span-1 flex  justify-center justify-items-center text-center items-center ">
                <img className="h-12 w-12 text-center " src={google} />
              </div>

              <div className="ml-2 row-span-1 grid grid-row-2">
                <div className="justify-center justify-items-center text-center items-center">
                  <div className=" text-black font-customFont   space-x-50 font-bold text-[8px]">
                    CHECK OUT OUR REVIEWS <br /> ON GOOGLE
                  </div>
                </div>
                <div className="justify-center  text-center items-center">
                  <ReactStars count={5} value={5} edit={false} size={24} color2={"#ffd700"} />
                </div>
              </div>
            </a>

           
          </div>
        </div>
      </div>
    );
  }
}
