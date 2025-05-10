import React from 'react'
import { useState } from "react";
function FrontEnd() {
   const [showModal, setShowModal] = useState(false);
  return (
    <>
    
     <div class="flex flex-col md:flex-row lg:flex-row">
          <div class=" flex-1/2 text-blue-900 bg-blue-50 rounded-2xl pt-4 pl-4 pr-4">
            <br></br>
            <div>
              <h1 class="text-2xl">
                <b>FRONT-END DEVELOPMENT </b>
              </h1>
              <p class="text-lg">
                Empower your business with our expert front-end solutions
                focusing fundamentally on the smooth user experience and
                effectively handle your needs and preferences and aligning it to
                the industry’s unique requirement.
              </p>
              <br></br>
            </div>
            <h1 class="text-2xl">
              <b>OUR FRONT-END DEPARTMENT HAS:</b>
            </h1>
            <ul class="list-disc pl-6 text-lg">
              <li>20+ Front-end developers;</li>
              <li>8 years of experience;</li>
              <li>4.8 rating on Google</li>
            </ul>
            <br></br>
            <button  onClick={() => setShowModal(true)}
             class="bg-[#ED8628] text-amber-50 text-lg h-14 w-40 rounded-xl ml-10 hover:bg-[#FFDBA1] cursor-pointer mb-20">
              CONTACT US
            </button>

            
            {showModal && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="bg-white rounded-lg w-full max-w-7xl relative">
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 p-2"
        >
          <img src="xicon.png" alt="xicon" />
        </button>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-3/5 p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-blue-900">
              BOOKING A CALL
            </h2>
            <p className="text-base md:text-lg text-[#405EA9]">
              Give us a call today to discuss how we can bring your vision
              to life with our expert solutions!
            </p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
              <input
                type="text"
                placeholder="Full Name *"
                className="border border-gray-300 focus:border-[#17A8E3] focus:outline-none rounded-md p-2"
              />
              <input
                type="email"
                placeholder="Email address *"
                className="border border-gray-300 focus:border-[#17A8E3] focus:outline-none rounded-md p-2"
              />
              <input
                type="text"
                placeholder="Phone number (optional)"
                className="border border-gray-300 focus:border-[#17A8E3] focus:outline-none rounded-md p-2"
              />
              <input
                type="text"
                placeholder="Company name (optional)"
                className="border border-gray-300 focus:border-[#17A8E3] focus:outline-none rounded-md p-2"
              />
              <textarea
                placeholder="How can we help you? *"
                className="md:col-span-2 border border-gray-300 focus:border-[#17A8E3] focus:outline-none rounded-md p-2 h-24"
              ></textarea>
              <button
                type="submit"
                className="bg-[#ED8628] text-white py-2 px-4 rounded-md hover:bg-[#FFDBA1] transition"
              >
                SEND
              </button>
            </form>
          </div>

          <div className="md:w-2/5 bg-[#405EA9] p-6 md:p-8 text-white">
            <h1 className="text-xl font-bold">TELL US ABOUT YOUR NEEDS</h1>
            <p className="text-base pt-4">
              Just fill out the form or contact us via email or phone
            </p>

            <div className="flex gap-4 pt-6 items-center">
              <img src="email.png" alt="email" className="w-5 h-5" />
              <div className="text-[#ED8628] font-semibold hover:underline cursor-pointer">
                career@go-techsolution.com
              </div>
            </div>

            <div className="flex gap-4 pt-4 items-center">
              <img src="phone.png" alt="phone" className="w-5 h-5" />
              <div className="text-[#ED8628] font-semibold hover:underline cursor-pointer">
                +91-8769365375
              </div>
            </div>

            <div className="flex gap-4 pt-4 items-start">
              <img src="location.png" alt="location" className="w-6 h-6 mt-1" />
              <div className="text-[#ED8628] font-semibold">
                512-517, 5th floor, Amrit Shree, University Road, Udaipur,
                Rajasthan 313001
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}







          </div>
          <div class="flex-1/2">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 pl-6">
              <div class="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                <img src="Angular-icon.png" alt="Angular" />
                <span class="text-gray-700 font-medium text-sm">Angular</span>
              </div>
              <div class="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                <img src="React-JS.png" alt="React.js" />
                <span class="text-gray-700 font-medium text-sm">React.JS</span>
              </div>
              <div class="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                <img src="Vue.png" alt="Vue" />
                <span class="text-gray-700 font-medium text-sm">Vue</span>
              </div>
            </div>
          </div>
        </div>
      





    </>
  )
}

export default FrontEnd