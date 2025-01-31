import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

const frequencies = [
  { value: "monthly", label: "Month", priceSuffix: "/month" },
  { value: "annually", label: "3 Months", priceSuffix: "/3 months" }
];
const tiers = [
  {
    name: "Below 18 Years",
    id: "tier-hobby",
    href: "#",
    price: { monthly: "₹2000", annually: "₹5000" },
    description: "The essentials to your fitness.",
    features: ["Weekly 6 classes", "Competetive Boxing", "S&C Training"],
    mostPopular: false
  },
  {
    name: "Above 18 Years",
    id: "tier-freelancer",
    href: "#",
    price: { monthly: "₹3000", annually: "₹7500" },
    description: "The essentials to your fitness.",
    features: ["Weekly 6 classes", "Competetive Boxing", "S&C Training"],
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
          <h2 className="text-base font-semibold leading-7 bg-black text-[#D6FB00]">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Pricing plans for everyone</p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">Choose an affordable plan.</p>
        <div className="mt-16 flex justify-center">
          <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
          >
            <RadioGroup.Label className="sr-only">Payment frequency</RadioGroup.Label>
            {frequencies.map((option) => (
              <RadioGroup.Option
                key={option.value}
                value={option}
                className={({ checked }) =>
                  classNames(checked ? "bg-[#D6FB00] text-blck" : "text-gray-500", "cursor-pointer rounded-full px-2.5 py-1")
                }
              >
                <span>{option.label}</span>
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </div>

        <div className="isolate mx-auto mt-10 flex flex-col sm:flex-row gap-8 justify-center ">
          {tiers.map((tier) => (
            <div key={tier.id} className={classNames(tier.mostPopular ? "ring-2 ring-[#D6FB00]" : "ring-1 ring-gray-200", " p-8 w-full")}>
              <h3 id={tier.id} className={classNames(tier.mostPopular ? "text-[#D6FB00]" : "text-gray-900", "text-lg font-semibold leading-8")}>
                {tier.name}
              </h3>
              <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price[frequency.value]}</span>
                <span className="text-sm font-semibold leading-6 text-gray-600">{frequency.priceSuffix}</span>
              </p>

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
        <br />
        <br />
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Pay per session</p>

        <div className="isolate mx-auto mt-10 flex flex-col sm:flex-row gap-8 justify-center ">
          {[
            {
              name: "Above 18 Years",
              id: "tier-freelancer",
              href: "#",
              price: { monthly: "₹300", annually: "₹7500" },
              description: "The essentials to your fitness.",
              features: ["Competetive Boxing", "S&C Training"],
              mostPopular: false
            }
          ].map((tier) => (
            <div key={tier.id} className={classNames(tier.mostPopular ? "ring-2 ring-[#D6FB00]" : "ring-1 ring-gray-200", " p-8 w-full")}>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price.monthly}</span>
                <span className="text-sm font-semibold leading-6 text-gray-600">{"/Session"}</span>
              </p>

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
        <br />
        <br />
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl w">Personal Training</p>

        <div className="isolate mx-auto mt-10 flex flex-col sm:flex-row gap-8 justify-center ">
          {[
            {
              name: "Above 18 Years",
              id: "tier-freelancer",
              href: "#",
              price: { monthly: "₹3000", annually: "₹7500" },
              description: "The essentials to your fitness.",
              features: ["Competetive Boxing", "S&C Training"],
              mostPopular: false
            }
          ].map((tier) => (
            <div key={tier.id} className={classNames(tier.mostPopular ? "ring-2 ring-[#D6FB00]" : "ring-1 ring-gray-200", " p-8 w-full")}>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">Contact for Customized Plan</span>
                {/* <span className="text-sm font-semibold leading-6 text-gray-600">{frequency.priceSuffix}</span> */}
              </p>

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
