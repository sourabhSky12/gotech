import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const ServicesStartCount = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const stats = [
    {
      id: 1,
      value: 100,
      suffix: "+",
      description: "skilled developers and experts, at your service.",
    },
    {
      id: 2,
      value: 50,
      suffix: "+",
      description: "positive Google reviews back our reliability.",
    },
    {
      id: 3,
      value: 90,
      suffix: "+",
      description: "startups empowered with proper assistance & guidance.",
    },
  ];

  return (
    <div ref={ref} className="bg-gray-100 sm:px-40 py-12 text-center md:text-left">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8">
        ARE YOU PREPARED TO EMBARK YOUR STARTUP JOURNEY WITH THE RIGHT EXPERTISE?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
        {stats.map((stat) => (
          <div key={stat.id} className="sm:flex ">
            <div className="text-orange-500 text-4xl font-bold mb-2">
              {inView ? <CountUp end={stat.value} duration={2} /> : "0"}
              {stat.suffix}
            </div>
            <p className="text-gray-800 pl-5">{stat.description}</p>
          </div>
        ))}
        <div className="pt-3">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded invisible md:visible">
          BOOK A CALL
        </button>
      </div>
      </div>
      
    </div>
  );
};

export default ServicesStartCount;
