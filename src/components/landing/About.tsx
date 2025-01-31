import React from "react";
import AboutPic from "../../assets/aboutme.jpeg";

export default function About() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full px-6 py-24 bg-neutral-800 bg-cover lg:py-32">
      <div className="flex flex-col max-w-7xl gap-4  mx-auto h-full lg:flex-row">
        <div className=" relative z-20 flex flex-col w-full text-2xl text-gray-700 lg:w-1/2 items-start">
          <h1 className="relative z-20 text-3xl font-bold leading-none xl:text-4xl  text-left sm:text-start" data-primary="purple-500">
            <span className="text-white text-4xl font-bold font-kanit">
              About <span className="text-[#D6FB00]">Founder , Headcoach</span>
            </span>
          </h1>
          <p className="relative z-20 block mt-6 text-base font-medium text-gray-400 xl:text-md sm:text-center lg:text-left">
            Dipan Rai, a lifelong boxing enthusiast, has competed in numerous tournaments in India and now resides in Bangalore, He is the founder of
            Whitecorner boxing academy.From his initial training days to competing in numerous tournaments across India, his dedication for boxing has
            evolved into a passion for not only training and competing but also sharing the art and science of the sport. His goal is to help others
            reach their full potential and achieve their goals in boxing.
            <br /> <br />
            With over 15 years of experience, He worked as Senior boxing coach in Several Boxing Clubs in India. Dipan offers personalized training
            plans tailored to each boxer's lifestyle and goals.
            <br />
            <br />
            Dipan has achieved several state gold medals and best boxer awards in Karnataka, and represented both Karnataka and Sikkim in
            national-level competitions <br />
            <br /> See you in the training.
          </p>
        </div>
        <div className="relative flex flex-col justify-around items-center h-full gap-10   w-full  rounded-lg cursor-pointer lg:w-1/2">
          <div className="relative overflow-hidden border border-[#D6FB00] cursor-pointer" data-rounded="rounded-md" data-rounded-max="rounded-full">
            <img src={AboutPic} alt="Coach dipan about me" className="z-10 object-cover w-96 h-96 " />
          </div>
          {/* SOCIAL MEDIA LINKS */}
          <div className="flex justify-center items-center text-center h-full">
            <div className="flex w-full h-full  gap-4 justify-center items-center justify-items-center text-center">
              <div className="flex  flex-col gap-3">
                {" "}
                <p className="text-white text-left font-medium flex flex-row m-2 w-100  gap-2">
                  <a href="https://www.instagram.com/dipanrai_/" className="text-gray-400 hover:text-gray-500 flex flex-row gap-2" >
                    <span className="sr-only">Instagram</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill-rule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Follow on Instagram
                  </a>
                </p>
              </div>

              <div className="flex  flex-col gap-3">
                {" "}
                <p className="text-white text-left font-medium  m-2 w-100  gap-2">
                  <a href="https://www.youtube.com/@coachdipan" className="text-gray-400 hover:text-gray-500 flex flex-row gap-2">
                    <span className="sr-only">Mail</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                    </svg>
                    Follow on Youtube
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
