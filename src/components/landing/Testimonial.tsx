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
            <div className="row-span-2   p-8 text-center border border-[#D6FB00]">
              <div className="flex h-full flex-col justify-center space-y-4w-full ">
                <img className="w-10" src={double} />
                <div className="flex justify-center text-center justify-items-center">
                  <p className="md:text-[16px] w-[70%]">
                    I've been training at white corner under the guidance of coach dipan for the past few months. My experience has been nothing short
                    of outstanding. Coach Dipan is true maestro of sweet science. His depth of knowledge, passion for the sport, and commitment to his
                    students set him apart. His constructive feedback, attention to detail, and encouragement creates an environment that provided
                    continuous improvement. It's a place where everyone, regardless of skill level , feels welcome.The Classes are well-organized,
                    combing a mix of technical drills , conditioning and sparring. Since joining I've seen significant improvements in my boxing
                    skills and fitness levels. I Wholeheartedly recommend to anyone looking for embark on a rewarding boxing journey
                    <p className="font-bold py-4">Paramjeet Singh</p>
                  </p>
                </div>
                <div className="w-full flex justify-items-end text-right justify-end ">
                  <img className="w-10 " src={double} />
                </div>
              </div>
            </div>

            <div className=" sm:flex sm:space-x-8   border border-[#D6FB00] p-8 text-center ">
              <div className="flex h-full flex-col justify-center space-y-4w-full ">
                <img className="w-10" src={double} />
                <div className="flex justify-center text-center justify-items-center">
                  <p className="md:text-[16px] w-[70%]">
                    Unlike most boxing gyms out in BLR focusing more on just fitness & money, at WCBA they give importance in building boxing skills
                    for real ring performance. You would be taken for a surprise once you step into the open space practice methods of WCBA. The head
                    coach - Dipan, one of the rarest of coaches you would come across. He is highly experienced and has great knowledge on every
                    aspects of boxing. He is very prudent in teaching the basics/ footwork/ coordination, drills/ spars with you, makes sure you learn
                    every technique/ combination, takes you to the world of sparring in the right pace. Prior training at White Corner, I literally
                    went to many boxing/ martial art clubs and trust me, there were very few coaches who are dedicated and talented like here!!!
                    <p className="font-bold py-4">Evance</p>
                  </p>
                </div>
                <div className="w-full flex justify-items-end text-right justify-end ">
                  <img className="w-10 " src={double} />
                </div>
              </div>
            </div>
            <div className=" sm:flex sm:space-x-8  border border-[#D6FB00]  p-8 text-center ">
              <div className="flex h-full flex-col justify-center space-y-4w-full ">
                <img className="w-10" src={double} />
                <div className="flex justify-center text-center justify-items-center">
                  <p className="md:text-[16px] w-[70%]">
                    Coach Dipan's passion for the sport is contagious, making every session not only challenging but also incredibly enjoyable. He is
                    the mentor you need
                    <p className="font-bold py-4">Surjeet Suman Acharya</p>
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
              href="https://maps.app.goo.gl/d5KKrzfr3y8Bg19BA?g_st=ic"
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

            <a
              href="https://www.urbanpro.com/bangalore/dipan-rai/reviews/11441886"
              className="flex flex-col-2w-full justify-center justify-items-center text-center items-center  "
            >
              <img className=" h-10 w-10 text-center " src={arrow} />
              <div className="flex  justify-center justify-items-center text-center items-center px-3">
                <div className="col-span-1w-full   text-black font-customFont   space-x-50 font-bold text-[8px]">MORE REVIEWS </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
