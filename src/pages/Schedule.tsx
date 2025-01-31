import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

const frequencies = [
  { value: "monthly", label: "Month", priceSuffix: "/month" },
  { value: "annually", label: "3 Months", priceSuffix: "/3 months" }
];
const tiers = [
  {
    name: "Weekly 6 classes",
    price: { monthly: "₹3000", annually: "₹7500" },
    description: "Monday to Saturday",
    features: ["Morning 6AM to 8AM", "Evening 5PM to 7PM"],
    mostPopular: false
  }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [frequency, setFrequency] = useState(frequencies[0]);

  return (
    <div className="bg-white py-10 min-h-[90vh]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 bg-black text-[#D6FB00]">Schedule</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Days and Timing</p>
        </div>

        <div className="isolate mx-auto mt-10 flex flex-col sm:flex-row gap-8 justify-center ">
          {tiers.map((tier) => (
            <div className={classNames(tier.mostPopular ? "ring-2 ring-[#D6FB00]" : "ring-1 ring-gray-200", " p-8 w-full")}>
              <h3 className={classNames(tier.mostPopular ? "text-[#D6FB00]" : "text-gray-900", "text-lg font-semibold leading-8")}>{tier.name}</h3>
              <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>

              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-6 p-1 bg-black flex-none text-[#D6FB00]" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
