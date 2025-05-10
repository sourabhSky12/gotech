import React from 'react';

// Stats data array
const statsData = [
  {
    value: '150+',
    label: 'successful projects',
  },
  {
    value: '7/10+',
    label: 'are satisfied with our services',
  },
  {
    value: '3+ years',
    label: 'in business',
  },
  {
    value: '70+',
    label: 'qualified employees within the team',
  },
];

const StatsSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            IT SERVICES AND CONSULTATION
          </h2>
          <p className="text-blue-700 text-lg">
            Delve into the world of technological excellence and captivate your stake in cyberspace with the help of our expertise.
          </p>
        </div>

        {/* Right Content (Dynamic Stats Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="bg-blue-900 text-white p-6 rounded-xl shadow-md"
            >
              <p className="text-orange-400 text-xl font-bold">{stat.value}</p>
              <p className="mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
