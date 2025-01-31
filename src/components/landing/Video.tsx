import React, { Component, useState } from "react";
import photo from "../../assets/gym.jpg";

export default function Video() {
  const [id, setId] = useState(false);

  return (
    <section className="relative flex flex-col max-w-7xl mx-auto   h-[100vh] justify-center items-center  bg-white bg-cover  w-full">
      <div className="flex  justify-center items-center h-[70%] w-full bg-black  ">
        {id ? (
          <iframe
            className="video"
            width={"100%"}
            height={"100%"}
            title="Youtube player"
            allow="autoplay; encrypted-media"
            sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
            src="https://www.youtube.com/embed/W7wiLKsfZW4?autoplay=1&mute=1"
          ></iframe>
        ) : (
          <div className="w-full h-full relative">
            <img className=" z-40  w-full h-full object-cover" src={photo} alt="Workplace" />
            <div className="absolute top-0 left-0 z-50 w-full h-full">
              <div className="flex justify-center items-center h-full cursor-pointer">
              
                <div className="bg-[#D6FB00] px-3 py-2 rounded-lg" onClick={() => setId(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-6 h-6">
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                    clipRule="evenodd"
                  />
                </svg>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex bg-[#D6FB00]  justify-center items-center text-center z-50 w-full h-[7%] b-0  ">
        <p className="px-4">˗ˏˋ ★ ˎˊ˗ Bangalore's First Open Air Boxing = White Corner</p>
      </div>
    </section>
  );
}

