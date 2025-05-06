import React from 'react'

const BlueForm = () => {
  return (
    <>
      <div class="w-full flex justify-center items-center mt-20 mb-20">
        <form class="w-6xl h-fit flex-col justify-between primebgcolor items-center text-amber-50 rounded-3xl pt-10 pb-10 pr-9 pl-9 ">
          <div class="flex  p-10 gap-4">
            <input
              type="text"
              placeholder="Full Name *"
              required
              class="border border-gray-300 p-3 rounded w-full bg-blue-950"
            />
            <input
              type="email"
              placeholder="Email address"
              required
              class="border border-gray-300 p-3 rounded w-full bg-blue-950"
            />
          </div>
          <div class="flex mt-4 gap-4 m-10">
            <input
              type="text"
              placeholder="Phone number (optional)"
              class="border border-gray-300 p-3 rounded w-full bg-blue-950"
            />
            <input
              type="text"
              placeholder="company name (optional)"
              class="border border-gray-300 p-3 rounded w-full bg-blue-950 "
            />
          </div>
          <div class="m-10">
            <h1>We will contact you ASAP or you can schedule a call</h1>
          </div>
          <div class="flex mt-4 gap-4 m-10">
            <textarea
              placeholder="How can we help you? *"
              maxLength="180"
              class="border border-gray-300 p-3 rounded w-full bg-blue-950"
            ></textarea>
          </div>
          <div class="m-10 ">
            <button
              type="submit"
              className=" btnprimecolor cursor-pointer hover:bg-amber-100 text-white font-semibold py-3 px-6 rounded w-lg "
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    
    </>
  )
}

export default BlueForm