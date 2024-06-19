import React from "react";

const Services = () => {
  return (
    <div className="py-16 ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="p-10 text-center transition-transform transform bg-white rounded-lg shadow-md hover:-translate-y-2 hover:shadow-lg"
            >
              <img
                src={service.image}
                alt={service.title}
                className="object-cover w-32 h-32 mx-auto mb-4 rounded-full"
              />
              <h2 className="mb-2 text-2xl font-semibold">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const servicesData = [
  {
    image: "/images/S1.png",
    title: "Service 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    image: "/images/S1.png",
    title: "Service 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    image: "/images/S1.png",
    title: "Service 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    image: "/images/S1.png",
    title: "Service 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
];

export default Services;
