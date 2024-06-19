import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid"; // Ensure you have Heroicons v2 installed
import Reveal from "../Reveal";
import ImageReveal from "../ImageReveal";

const FAQ = () => {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            {/* <div className="inline-block px-3 py-1 text-sm bg-orange-300 rounded-lg dark:bg-orange-500">FAQ</div> */}
            <Reveal className="text-3xl font-bold tracking-tighter text-gray-800 sm:text-5xl ">
              Frequently Asked Questions
            </Reveal>
            <Reveal className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              Get answers to the most common questions about our relocation
              services.
            </Reveal>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="grid items-center max-w-5xl gap-6 py-12 mx-auto lg:grid-cols-2 lg:gap-12">
          {/* FAQ List */}
          <div className="flex flex-col justify-center space-y-4">
            <CollapsibleItem
              question="What services do you provide?"
              answer="We offer a comprehensive range of relocation services, including visa assistance, housing and accommodation support, cultural adjustment guidance, and more. Our team of experts will guide you through every step of the process."
            />
            <CollapsibleItem
              question="How much do your services cost?"
              answer="Our pricing is tailored to each client's specific needs and requirements. We offer transparent and competitive rates, with no hidden fees. Contact us for a personalized quote."
            />
            <CollapsibleItem
              question="How long does the relocation process take?"
              answer="The timeline for the relocation process can vary depending on factors such as the destination country, visa requirements, and your individual circumstances. Our team will provide you with a detailed timeline and keep you informed throughout the process."
            />
          </div>

          {/* FAQ Image */}
          <div className="aspect-video h-[500px]">
            <ImageReveal src="/images/faq3.webp" />
          </div>
        </div>
      </div>
    </section>
  );
};

// CollapsibleItem Component
const CollapsibleItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid gap-4">
      <div
        className="flex items-center justify-between w-full px-4 py-3 text-lg font-semibold transition-colors border border-gray-200 rounded-md shadow-md cursor-pointer "
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <ChevronDownIcon
          className={`h-5 w-5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && <div className="px-4 py-3 text-gray-950">{answer}</div>}
    </div>
  );
};

export default FAQ;
