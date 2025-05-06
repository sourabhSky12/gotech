import React from 'react'

function FrontEnd() {
  return (
    <>
     <div class="flex">
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
            <button class="bg-[#ED8628] text-amber-50 text-lg h-14 w-40 rounded-xl ml-10 hover:bg-[#FFDBA1] cursor-pointer mb-20">
              CONTACT US
            </button>
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