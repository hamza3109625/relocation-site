import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid'; // Ensure you have Heroicons v2 installed

const FAQ = () => {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-orange-100 dark:bg-orange-300">
      <div className="container px-4 md:px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            {/* <div className="inline-block rounded-lg bg-orange-300 px-3 py-1 text-sm dark:bg-orange-500">FAQ</div> */}
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-800 dark:text-white">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-200">
              Get answers to the most common questions about our relocation services.
            </p>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
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
          <img
            src="/images/faq3.webp"
            width="550"
            height="310"
            alt="FAQ"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
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
        className="flex w-full items-center justify-between rounded-md bg-orange-300 px-4 py-3 text-lg font-semibold transition-colors hover:bg-orange-400 focus:bg-orange-400 dark:bg-orange-400 dark:hover:bg-orange-600 dark:focus:bg-orange-600 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <ChevronDownIcon className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      {isOpen && (
        <div className="px-4 py-3 text-gray-700 dark:text-white">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQ;
