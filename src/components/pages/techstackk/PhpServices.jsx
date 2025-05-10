import React from "react";

const serviceData = [
  {
    title: "PHP Staff Augmentation and Dedicated Teams",
    description:
      "You can flexibly augment the team of PHP developers with assistance at Go InfoTech, to ensure seamless integration into your workflow. PHP staff augmentation with a dedicated team that adheres to internal protocols and delivers excellence.",
  },
  {
    title: "PHP Web & Mobile Development",
    description:
      "Our experts and developers are dedicated to crafting a dynamic platform with interactive custom solutions making use of PHP to craft a seamless user experience.",
  },
  {
    title: "PHP-Based CMS Development",
    description:
      "We develop a Content Management System that is secure, scalable and functional while making use of PHP solutions, allowing you to retain full control over the web content.",
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Experts at Go InfoTech are committed to develop a feature-rich and functional e-commerce platform that attracts potential customers and accelerates sales.",
  },
  {
    title: "API Integration & Development",
    description:
      "Our team excels at integrating APIs and developing custom APIs in PHP, harnessing a seamless data flow between several software systems.",
  },
  {
    title: "PHP Migration and Upgrade",
    description:
      "We offer smooth PHP migration and upgrade services, allowing you to remain current with the latest PHP versions and ensuring optimal performance of your applications.",
  },
];

const PhpServices = () => {
  return (
    <section className="bg-blue-900 text-white  px-4 md:px-15 py-12">
      <div className="max-w-7xl mx-auto sm:px-15 ">
        <h2 className="text-3xl md:text-4xl font-bold pb-10 ">
          PHP Software Development Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {serviceData.map((service, index) => (
            <div key={index} className="border-b border-white/30 pt-6 pb-8">
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-white text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhpServices;
