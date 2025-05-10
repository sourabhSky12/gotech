import React from "react";

const SoftwareProvide = () => {
  return (
    <div className="bg-[#2B4170] text-white py-16 px-6 sm:px-40">
      <h2 className="text-3xl font-bold pb-20 text-center sm:text-start">SOFTWARE WE PROVIDE</h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-20">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="industries1.png" // Replace with the correct path to the image
            alt="Go Finance Software UI"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-bold mb-4">GO FINANCE SOFTWARE</h3>
          <p className="mb-6 text-lg">
            Go Finance Software is a comprehensive solution designed to revolutionize operations within the finance industry. It serves as a pivotal tool for businesses, offering a range of features aimed at enhancing efficiency and optimizing customer interactions.
          </p>
          <h3 className="text-xl font-bold mb-4">OUR MILESTONES:</h3>
          <ul className="mb-6 list-disc list-inside space-y-2 text-lg">
            <li><strong>5+</strong> projects delivered successfully.</li>
            <li><strong>20+</strong> committed FinTech software developers.</li>
            <li><strong>4.8/5</strong> Google rating.</li>
            <li>Compliance with financial industry norms and relevant regulations.</li>
          </ul>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md invisible md:visible w-full">
            VIEW MORE
          </button>
        </div>
      </div>

    
    <div className="flex flex-col md:flex-row items-center justify-between gap-20">
        {/* Text Section */}
       <div className="w-full md:w-1/2 py-20">
          <h3 className="text-2xl font-bold pb-4">CUSTOMER RELATIONSHIP MANAGEMENT (CRM) SOFTWARE</h3>
          <p className="mb-6 text-lg">
            Go InfoTech’s meticulously crafted CRM software revolutionizes how your business manages customer relationships. 
            By centralizing customer data and interactions, it offers a comprehensive view of each customer, enabling personalized engagement 
            strategies that drive loyalty and retention. Moreover, CRM automates repetitive tasks, freeing up valuable time for sales, marketing,
             and support teams to focus on delivering exceptional customer experiences.
          </p>
          <h3 className="text-xl font-bold mb-4">OUR MILESTONES:</h3>
          <ul className="mb-6 list-disc list-inside space-y-2 text-lg">
            <li><strong>7+</strong> projects delivered successfully.</li>
            <li><strong>20+</strong> committed software developers and experts.</li>
            <li><strong>4.8/5</strong> Google rating.</li>
            <li>Centralized customer data management and streamlined interaction.</li>
          </ul>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md invisible md:visible w-full">
            VIEW MORE
          </button>
        </div>

      {/* Image Section */}
 <div className="w-full md:w-1/2">
          <img
            src="industries1.png" 
            alt="Go Finance Software UI"
            className="rounded-2xl shadow-lg"
          />
        </div>

      </div>





      <div className="flex flex-col md:flex-row items-center justify-between gap-20">
        {/* Image Section */}
        <div className="w-full md:w-1/2 ">
          <img
            src="industries1.png" 
            alt="Go Finance Software UI"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-bold mb-4">PHOTO SCANNER SOFTWARE</h3>
          <p className="mb-6 text-lg">
           Our Photo scanner software is a valuable tool engineered to digitize physical photographs, 
           slides, and documents, preserving memories and enabling easy access to visual content. 
           Our software offers a range of features to ensure high-quality scanning and efficient management of digitized images.
          </p>
          <h3 className="text-xl font-bold mb-4">OUR MILESTONES:</h3>
          <ul className="mb-6 list-disc list-inside space-y-2 text-lg">
            <li><strong>2+</strong> projects delivered successfully.</li>
            <li><strong>20+</strong> members of our experienced team of developers.</li>
            <li><strong>4.7/5</strong> Google rating.</li>
            <li>A team of experts and developers dedicated to project success</li>
          </ul>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md invisible md:visible w-full">
            VIEW MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SoftwareProvide;
