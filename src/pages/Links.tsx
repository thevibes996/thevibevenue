import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="bg-white py-10 min-h-[90vh]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 bg-black text-[#D6FB00]">Forms</h2>
          
        </div>
     

        <div className="isolate mx-auto mt-10 flex flex-col sm:flex-row gap-8 justify-center ">
          <div className={classNames(" ring-1 ring-gray-200", " p-8 w-full")}>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
              {[{ name: "Registration Form", link:"https://docs.google.com/forms/d/18O0VJBlhFmbzl2y1kH47SC90c8yjer3yo7cgIhQT0bs" }, { name: "Injury Waiver & Liability Release Form", link:"https://forms.gle/Pbe1bD5TV5VGWhUo8" }].map((feature) => (
                <li key={feature.name} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-6 p-1 bg-black font-bold flex-none text-[#D6FB00]" aria-hidden="true" />
                  <p className="font-bold">{feature.name}</p>
                  <a href={feature.link} target="_blank" rel="noreferrer" className="text-[#D6FB00] bg-black p-1">Link</a>

                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
