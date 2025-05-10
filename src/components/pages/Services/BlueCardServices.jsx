import React from 'react';

const servicesData = [
  {
    title: 'TRUSTED AND RENOWNED',
    description:
      'We are dedicated to serving you with excellence, and this is vouched by our client’s unwavering trust in our services, as we are a trusted custom Software Development Company in Udaipur.',
    highlight: 'custom Software Development Company in Udaipur.',
    icon: '👤',
  },
  {
    title: 'EXPERTISE AT YOUR SERVICE:',
    description:
      'Our team is dedicated to serving you with expertise, knowledge, and professionalism working to fuel the growth of your business. Choose Go InfoTech Solution for a reliable digital partner.',
    icon: '🎯',
  },
  {
    title: "INDUSTRIES' EXPERTISE:",
    description:
      'We are a trusted Software Development company in Udaipur, with expertise from different industries all around the world using innovation, knowledge, and skills.',
    highlight: 'Software Development company in Udaipur',
    icon: '🛡️',
  },
  {
    title: 'HIGH SATISFACTION RATES',
    description:
      'Empower your business with promising results and IT solutions by professionals who are dedicated to serving you right.',
    icon: '📋',
  },
  {
    title: 'GLOBAL COVERAGE ACROSS TIME ZONES',
    description:
      'We are available 24/7 at your service as we operate across 4 different time zones, which is why we ensure seamless communication. Our team at Go InfoTech is available at your service anytime.',
    icon: '🌐',
  },
  {
    title: 'WIDE RANGE OF SERVICES',
    description:
      'Offering software development services, including custom software development, mobile app development, web application development, software maintenance and support, and more.',
    icon: '⚙️',
  },
];

const BlueCardServices = () => {
  return (

      <div className='w-full '>   
      <h2 className="text-2xl md:text-4xl font-bold sm:pt-5 mb-10 uppercase text-blue-900 lg:px-40">
      WHY CHOOSE US
      </h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-40 pb-10">

      {servicesData.map((service, index) => (
        <div
          key={index}
          className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition-all"
        >
          <div className="text-3xl mb-4">{service.icon}</div>
          <h3 className="font-bold text-lg mb-2 text-blue-900">{service.title}</h3>
          <p className="text-blue-800 text-lg">
            {service.description.split(service.highlight || '').map((part, i, arr) =>
              i < arr.length - 1 ? (
                <span key={i}>
                  {part}
                  <span className="font-semibold text-blue-900">
                    {service.highlight}
                  </span>
                </span>
              ) : (
                part
              )
            )}
          </p>
        </div>
      ))}
    </div>
    </div> 
  );
};

export default BlueCardServices;
