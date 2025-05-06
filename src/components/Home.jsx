import { useState } from "react";
import StaffAug from "./ourServices/StaffAug";
import ItConsulting from "./ourServices/ItConsulting";
import CustomSoftware from "./ourServices/customSoftware";
import IntelAuto from "./ourServices/intelAuto";
import ManagedIt from "./ourServices/managedIt";
import BackEnd from "./techstack/BackEnd";
import FrontEnd from "./techstack/FrontEnd";
import MobileApp from "./techstack/MobileApp";

import UiUx from "./techstack/UiUx";
import { styled } from "@mui/material";
import BlueForm from "./BlueForm";
import BluePart from "./BluePart";

function Home() {
  const ImageIcon = ({ path, text }) => {
    <img src={path} alt={text} />;
  };

  const [serviceList, setServiceList] = useState([
    {
      icon: <ImageIcon path={"/Aug.svg"} text={"AUGMENTATION"} />,
      title: "STAFF AUGMENTATION",
      element: <StaffAug />,
    },
    {
      icon: <ImageIcon path={"/ItConsul.svg"} text={"IT CONSULTING"} />,
      title: "IT CONSULTING",
      element: <ItConsulting />,
    },

    {
      icon: (
        <ImageIcon
          path={"/ItConsul.svg"}
          text={"custom software development"}
        />
      ),
      title: "CUSTOM SOFTWARE DEVELOPMENT",
      element: <CustomSoftware />,
    },
    {
      icon: <ImageIcon path={"ItConsul.svg"} text={"Intelligent Automation"} />,
      title: "INTELLIGENT AUTOMATION",
      element: <IntelAuto />,
    },
    {
      icon: <ImageIcon path={"ItConsul.svg"} text={"Managed it services"} />,
      title: "MANAGED IT SERVICES",
      element: <ManagedIt />,
    },
  ]);
  const [selectedService, setSelectedService] = useState(
    serviceList[0].element
  );

  const [selectedTitle, setSelectedTitle] = useState(serviceList[0].title);

  const handleServiceClick = (service) => {
    setSelectedService(service.element);
    setSelectedTitle(service.title);
  };
  console.log(selectedService);

  const [stacklist, setstacklist] = useState([
    {
      title: "FRONT-END DEVELOPMENT",
      element: <FrontEnd />,
    },
    {
      title: "BACK-END DEVELOPMENT",
      element: <BackEnd />,
    },
    {
      title: "MOBILE APP DEVELOPMENT",
      element: <MobileApp />,
    },
    {
      title: "UI/UX DESIGN",
      element: <UiUx />,
    },
  ]);

  const [selectedStack, setSelectedStack] = useState(stacklist[0].element);

  const handleStackClick = (stackl) => {
    setSelectedStack(stackl.element);
  };
  console.log(selectedStack);

  const [showModal, setShowModal] = useState(false);

  return (
    <>

    {/*Starting part */}


    <div className="flex flex-col lg:flex-row mt-12 pl-4 w-full lg:px-40 overflow-hidden  ">
  {/* Text + Button + Stats */}
  <div className="flex-1 flex flex-col  ">
    <div className="mb-6 pl-25 lg:pl-0">
      <h1 className="text-4xl sm:text-5xl text-[#405EA9] font-bold">SOFTWARE</h1>
      <h1 className="text-4xl sm:text-5xl text-[#405EA9] font-bold">DEVELOPMENT</h1>
      <h1 className="text-4xl sm:text-5xl text-[#405EA9] font-bold">COMPANY</h1>

      <p className="text-lg text-[#405EA9] mt-4">
        We take pride in announcing that we are the leading{" "}
        <span className="underline text-blue-900 font-semibold">
          Software Development Company in Udaipur
        </span>{" "}
        providing comprehensive IT Solutions to your Digital needs.
      </p>
    </div>

    <div className="mt-6">
      <button
        type="button"
        className="focus:outline-none  text-white  bg-[#ED8628] hover:bg-[#FFDBA1] focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-base px-8 py-4 dark:focus:ring-yellow-900"
      >
        <b>GET IN TOUCH</b>
      </button>
    </div>

    {/* Stats Cards */}
    <div className="flex flex-row sm:flex-row justify-between text-center mt-8 gap-6 sm:gap-0">
      <div className="flex-1">
        <h1 className="text-3xl text-blue-800 font-bold">200</h1>
        <p className="text-blue-950 font-semibold">Projects</p>
      </div>
      <div className="flex-1">
        <h1 className="text-3xl text-blue-800 font-bold">5</h1>
        <p className="text-blue-950 font-semibold">Years of Experience</p>
      </div>
      <div className="flex-1">
        <h1 className="text-3xl text-blue-800 font-bold">70</h1>
        <p className="text-blue-950 font-semibold">Happy Clients</p>
      </div>
    </div>
  </div>

  {/* Image Section */}
  <div className="flex-1 flex justify-center items-center mt-10 lg:mt-0">
    <img className="max-w-full h-auto object-contain" src="/spw.png" alt="spw image" />
  </div>
</div>








    {/*      ANIMATED CROUSEL  */}

      <div class="overflow-hidden bg-white py-8 px-40">
        <div class="flex w-[200%] marquee">
          <div class="flex w-1/2 justify-around items-center space-x-18">
            <img src="AFS.jpg" alt="Afs" class="h-20 " />
            <img src="LAKECITY.png" alt="lakecity" class="h-20" />
            <img src="TRAVENEX.png" alt="travenex" class="h-20" />
            <img src="ganesh-digital.jpg" alt="ganesh" class="h-20" />
            <img src="krishna-tours.png" alt="krishna" class="h-20" />
            <img src="PDS-Clicks.webp" alt="pds" class="h-20" />
            <img src="MPS-Udaipur.png" alt="Mps" class="h-20" />
            <img src="ranjeet-septic.png" alt="septic" class="h-20" />
            <img src="Image-art-studio.png" alt="art-studio" class="h-20" />
            <img src="Weddings-for-u.png" alt="wedding" class="h-20" />
          </div>
          <div class="flex w-1/2 justify-around items-center space-x-12">
            <img src="AFS.jpg" alt="Afs" class="h-20" />
            <img src="LAKECITY.png" alt="lakecity" class="h-20" />
            <img src="TRAVENEX.png" alt="travenex" class="h-20" />
            <img src="ganesh-digital.jpg" alt="ganesh" class="h-20" />
            <img src="krishna-tours.png" alt="krishna" class="h-20" />
            <img src="PDS-Clicks.webp" alt="pds" class="h-20" />
            <img src="MPS-Udaipur.png" alt="Mps" class="h-20" />
            <img src="ranjeet-septic.png" alt="septic" class="h-20" />
            <img src="Image-art-studio.png" alt="art-studio" class="h-20" />
            <img src="Weddings-for-u.png" alt="wedding" class="h-20" />
          </div>
        </div>
      </div>

      {/* OUR SERVICES */}

      <div className="pl-8 pr-0 py-10 sm:px-10 md:px-20 lg:px-40">
        {/* Header */}
        <h1 className="text-blue-900 text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 text-center sm:text-left">
          OUR SERVICES
        </h1>

        {/* Service List + Selected Content */}
        <div className="flex flex-col lg:flex-row">
          {/* Service List - Full width on small screens, column on large */}
          <div className="lg:basis-2/5 ">
            <div className="w-screen -ml-4  sm:ml-0 sm:w-auto sm:pr-0 lg:pr-0 flex overflow-x-auto space-x-4 text-lg sm:text-xl text-center lg:flex-col lg:space-x-0 lg:space-y-4">
              {serviceList.map((item) => (
                <div
                  key={item.title}
                  className={`min-w-full h-16  sm:h-20 cursor-pointer rounded-xl flex flex-row items-center pl-5 sm:pl-5 ${
                    selectedTitle === item.title
                      ? "bg-blue-900 text-white"
                      : "bg-blue-100 hover:bg-blue-200"
                  }`}
                  onClick={() => handleServiceClick(item)}
                >
                  <div className="pt-1">{item.icon}</div>
                  <h1
                    className={`text-left pl-3 sm:pl-4 ${
                      selectedTitle === item.title
                        ? "text-white"
                        : "text-blue-900"
                    }`}
                  >
                    {item.title}
                  </h1>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Service Content */}
          <div className="mt-6 lg:mt-0 lg:ml-10 lg:basis-3/5">
            {selectedService}
          </div>
        </div>
      </div>

      {/* Ready to start Your digital Journey */}

      <div class="flex justify-center items-center mt-10 pt-10 ">
        <div class="flex-1/2 pl-40">
          <h1 class="text-3xl text-blue-900">
            READY TO START YOUR DIGITAL TRANSFORMATION JOURNEY?
          </h1>
          <p class="text-lg text-blue-900 mt-3">
            With our innovative and industry-proven services, we’ll help you
            unlock new growth opportunities.
          </p>
        </div>
        <div class="flex-1/2 pr-50 pl-80 ">
          <div
            onClick={() => setShowModal(true)}
            class="bg-[#ED8628] text-lg text-amber-50 w-54 h-14 rounded-xl flex justify-center pt-3 hover:bg-[#FFDBA1] cursor-pointer"
          >
            <div class="pr-2">GET INFO</div>
            <div class="pt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>

        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
            <div className="bg-white rounded-lg  w-full max-w-7xl relative ">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 p-4 cursor-pointer"
              >
                <img src="xicon.png" alt="xicon" />
              </button>
              <div class="flex ">
                <div class="flex-3/5 p-8">
                  <h2 className="text-2xl font-bold mb-4 text-blue-900">
                    BOOKING A CALL
                  </h2>

                  <p className="text-lg text-[#405EA9]">
                    Give us a call today to discuss how we can bring your vision
                    to life with our expert solutions!
                  </p>
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-25 mt-5">
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
                      className="col-span-2 border border-gray-300 focus:border-[#17A8E3] focus:outline-none rounded-md p-2 h-24"
                    ></textarea>
                    <button
                      type="submit"
                      className="col-span-1 bg-[#ED8628] text-white py-2 rounded-md hover:hover:bg-[#FFDBA1]"
                    >
                      SEND
                    </button>
                  </form>
                </div>
                <div class="flex-2/5 bg-[#405EA9] p-8 ">
                  <h1 class="text-xl text-amber-50">
                    <b>TELL US ABOUT YOUR NEEDS </b>
                  </h1>
                  <p class="text-lg text-amber-50 pt-5">
                    Just fill out the form or contact us via email or phone
                  </p>

                  <div class="flex gap-6 pt-10 items-center ">
                    <div class="pt-1">
                      <img src="email.png" alt="email" />
                    </div>
                    <div class="text-lg text-[#ED8628]  font-bold cursor-pointer hover:underline">
                      career@go-techsolution.com
                    </div>
                  </div>

                  <div class="flex gap-6 pt-8">
                    <div class="pt-1">
                      <img src="phone.png" alt="phone" />
                    </div>
                    <div class="text-lg text-[#ED8628] font-bold  cursor-pointer hover:underline">
                      +91-8769365375
                    </div>
                  </div>

                  <div class="flex gap-6 pt-8 ">
                    <div class="pt-2">
                      <img src="location.png" alt="location" />
                    </div>

                    <div class="text-lg text-[#ED8628] font-bold  cursor-pointer">
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

      {/*TECH STACK */}

      <div class="px-40 mt-20 ">
        <h1 class="text-3xl text-blue-900">
          <b>TECH STACK</b>
        </h1>
        <br></br>
        <div class="flex text-xl text-blue-900 justify-between cursor-pointer">
          {stacklist.map((star) => (
            <div
              key={star.title}
              onClick={() => {
                handleStackClick(star);
              }}
            >
              <div>
                <h1>
                  <b>{star.title}</b>
                </h1>
              </div>
            </div>
          ))}
        </div>

        <br></br>
        <br></br>
        {selectedStack}
      </div>

      {/* Blue Part */}

      <BluePart />

      {/*Form */}
      <BlueForm />
    </>
  );
}

export default Home;
