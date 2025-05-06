import { useState } from "react";
import MobileApp from "./techstack/MobileApp";

function Footer() {
    return (
      <>
        <div class="flex  bg-blue-700 text-amber-50 h-70">
          <div class="flex-1/4 justify-center text-center">svg icon</div>
  
          <div class="flex-1/2 flex-wrap">
  
            <ul class="flex  flex-wrap items-start" >
              <li class="flex flex-1/3  flex-col">SERVICES</li>
  
              
                <li>cloud & DevOPS Services</li>
                <li>AI & ML DEVELOPMENT</li>
  
                <li>UI/UX DESIGN </li>
                <li>E-COMMERCE App Development</li>
                <li>Cross-Platform App Development</li>
              </ul>
  
              <ul class="flex flex-1/3">
                TECHSTACK
                <ul>
                  <li>Angular</li>
                  <li>Node</li>
                  <li>.NET</li>
                  <li>Python</li>
                  <li>IOS</li>
                  <li>React Native</li>
                  <li>React</li>
                  <li>PHP</li>
                  <li>Java</li>
                  <li>Rails</li>
                  <li>Android</li>
                  <li>Flutter</li>
                </ul>
              </ul>
  
              <li class="flex flex-1/3">COMPANY</li>
  
              <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Contact</li>
                <li>About Us</li>
                <li>Technologies</li>
                <li>Blogs</li>
              </ul>
            
          </div>
          <div class="flex-1/4 justify-center text-center">CONTACTS</div>
        </div>
  
      </>
    );
  }
  export default Footer;
  















{/*rough for tech stack */}

const [stacklist,setstacklist]=useState([
  {
   title:"FRONT-END DEVELOPMENT",
   element: <FrontEnd/>,
  },
  {
    title:"BACK-END DEVELOPMENT",
    element:<BackEnd/>,
   
  },
  {
    title:"MOBILE APP DEVELOPMENT",
    element:<MobileApp/>
   
  },
  {
    title:"UI/UX DESIGN",
    element:<UiUx/>,
   
  },

]);

const [selectedStack, setSelectedStack] = useState(
  stacklist[0].element
);
const handleStackClick = (stackl) => {
  setSelectedStack(stackl.element);
};
console.log(selectedStack);







{stacklist.map((item)=>(

  <div
    key={item.title}
        
        
    onClick={() => {
                  handleStackClick(item);
                }}
                >
                  <div>
                    <h1>
                      <b>{item.title}</b>
                    </h1>
                  </div>
  </div>








<div className="flex justify-center items-center mt-10 pt-10">
<div className="flex-1 ml-40">
  <h1 className="text-3xl text-blue-900">
    READY TO START YOUR DIGITAL TRANSFORMATION JOURNEY?
  </h1>
  <p className="text-lg text-blue-900 mt-3">
    With our innovative and industry-proven services, we’ll help you
    unlock new growth opportunities.
  </p>
</div>
<div className="flex-1 mr-20 pl-40">
  <div
    onClick={() => setShowModal(true)}
    className="bg-[#ED8628] text-lg text-amber-50 w-44 h-14 rounded-xl flex justify-center items-center hover:bg-[#FFDBA1] cursor-pointer"
  >
    <span className="pr-2">GET INFO</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  </div>
</div>

{/* Modal */}
{showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white rounded-lg p-6 w-full max-w-2xl relative">
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
      >
        ✕
      </button>
      <h2 className="text-2xl font-bold mb-4 text-blue-900">BOOKING A CALL</h2>
      <p className="mb-6 text-gray-600">
        Give us a call today to discuss how we can bring your vision to life with our expert solutions!
      </p>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Full Name *"
          className="border border-gray-300 rounded-md p-2"
        />
        <input
          type="email"
          placeholder="Email address *"
          className="border border-gray-300 rounded-md p-2"
        />
        <input
          type="text"
          placeholder="Phone number (optional)"
          className="border border-gray-300 rounded-md p-2"
        />
        <input
          type="text"
          placeholder="Company name (optional)"
          className="border border-gray-300 rounded-md p-2"
        />
        <textarea
          placeholder="How can we help you? *"
          className="col-span-2 border border-gray-300 rounded-md p-2 h-24"
        ></textarea>
        <button
          type="submit"
          className="col-span-2 bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600"
        >
          SEND
        </button>
      </form>
    </div>
  </div>
)}


{/* service */}

<div className="ml-40 mr-40 mt-20 ">
        <h1 className="text-blue-900 text-4xl mb-8">OUR SERVICES</h1>
        <div className="flex">
          <div className="flex basis-2/5 flex-col text-2xl text-center ">
            {serviceList.map((item) => (
              <div
                key={item.title}
                className={`h-20 cursor-pointer rounded-2xl flex flex-row pl-5 mt-2.5 ${
                  selectedTitle === item.title
                    ? "bg-blue-900 text-amber-50 !important"
                    : "bg-blue-100 hover:bg-blue-200"
                }`}
                onClick={() => {
                  handleServiceClick(item);
                }}
              >
                <div className="pt-5"> {item.icon}</div>

                <h1
                  className={`text-center pt-5 pl-4 ${
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

          <div className="ml-10 basis-3/5">{selectedService}</div>
        </div>
      </div>



{/* home top part  */}

<div class="flex mt-12">
        {/* Home Basic part */}
        <div class="flex-1/2 justify-center ">
          <div class="ml-40 ">
            <h1 class="text-5xl text-[#405EA9]">
              <b>SOFTWARE</b>
            </h1>
            <h1 class="text-5xl  text-[#405EA9] ">
              <b>DEVELOPMENT</b>
            </h1>
            <h1 class="text-5xl   text-[#405EA9]">
              <b>COMPANY</b>
            </h1>
            <p class="text-xl text-[#405EA9]">
              We take pride in announcing that we are the leading{" "}
              <p class="underline text-blue-900">
                <b> Software Development Company in Udaipur </b>
              </p>
              providing comprehensive IT Solutions to your Digital needs.
            </p>
          </div>
          <div class="mt-8 ml-40 ">
            <button
              type="button"
              class="focus:outline-none text-white bg-[#ED8628] hover:bg-[#FFDBA1] focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-base cursor-pointer	px-8 py-4 me-2 mb-2 dark:focus:ring-yellow-900"
            >
              <b>GET IN TOUCH</b>
            </button>
          </div>
         
         {/* cards like structure */}

          <div class="flex row ml-40 mt-5 text-center">
            <div class="flex-1/3">
              
              <h1 class="text-3xl text-blue-800">
                <b>200</b>
              </h1>
              <h1 class="text-blue-950">
                <b>Project</b>
              </h1>
            </div>
            <div class="flex-1/3">
              <h1 class="text-3xl text-blue-800">
                <b>5</b>
              </h1>
              <h1 class="text-blue-950">
                <b>Years of experience </b>
              </h1>
            </div>
            <div class="flex-1/3">
              <h1 class="text-3xl text-blue-800">
                <b>70</b>
              </h1>
              <h1 class="text-blue-950">
                <b>Happy Clients </b>
              </h1>
            </div>
          </div>
        </div>
        
        {/* Image part */}

        <div class="flex-1/2">
          <img class="ml-15" src="/spw.png" alt="spw image" />
        </div>
      </div>