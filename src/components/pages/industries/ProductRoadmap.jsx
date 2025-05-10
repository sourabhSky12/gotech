import React from "react";

const roadmapData = [
  {
    title: "Discovery & Planning",
    description:
      "Embarking on the journey of manifesting your vision into reality through our expert assistance, we understand your vision and iteration and conduct comprehensive analysis and strategies for our move.",
    result: "Detailed planning and comprehensive analysis",
  },
  {
    title: "Design & Prototyping",
    description:
      "Designing and developing prototypes of your vision while engaging our UI/UX designers in the project.",
    result: "An engaging and feature-rich prototype",
  },
  {
    title: "Product Development & Testing",
    description:
      "Our team of developers is dedicated to building a product that is functional, feature-rich, and offers high-quality performance.",
    result: "Development and testing of MVP",
  },
  {
    title: "Launch & Continuous Improvement",
    description:
      "Our team is at your service to serve you with excellence. We take into account your unique feedback and aim for continuous improvement.",
    result: "Launching of MVP and incorporating feedback improvement",
  },
];

const ProductRoadmap = () => {
  return (
    <section className="bg-gray-50 px-4 py-12 sm:px-6 lg:px-40">
      <h2 className="text-3xl sm:text-4xl font-bold  text-blue-900 mb-12">
        Product Delivery Roadmap
      </h2>
      <div className="space-y-6 ">
        {roadmapData.map((step, index) => (
          <div key={index} className="border-b pt-6 flex sm:flex-row flex-col pb-6">
            <div className="sm:flex-1/2 ">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-900  py-5 sm:pt-8  ">
              {step.title}
            </h3>
            </div>
            <div/>
            <div className="sm:flex-1/2 pb-5  text-start">
            <p className=" text-blue-900 text-lg">{step.description}</p>
            <p className="pt-2 font-semibold text-blue-900 text-lg">
             <strong> Result: </strong> <span className="font-normal">{step.result}</span>
            </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductRoadmap;
