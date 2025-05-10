import React, {useState} from "react";

const servicesSubmenu = [
    "Custom Software Development",
    "Startup MVP Development",
    "Web Development",
    "Mobile App Development",
    "Android App Development",
    "Cross-Platform App Development",
    "Intelligent Automation",
    "Digital Marketing Services",
    "Search Engine Optimization",
    "PPC",
    "SMO/SMM",
    "AI & ML Development",
    "Managed IT Services",
    "Cloud & DevOps Services",
    "Staff Augmentation",
    "IT Consulting",
    "Discovery Phase"
];

const industriesSubmenu = [
    "Fintech",
    "Healthcare",
    "Media & Entertainment",
    "Automotive",
    "E-Commerce"
];

const techstackSubmenu = [
    "front-end",
    "Angular",
    "React",
    "back-end",
    "Node",
    "PHP",
    ".NET",
    "Java",
    "Python",
    "Mobile",
    "IOS",
    "Anderoid",
    "React Native",
    "Flutter"
];

const companySubmenu = [
    "Referral Program",
    "Blogs",
    "Contact",
    "about us"
];

const SerInfo = () => {
    return (
<>   
<div className="bg-white py-30 px-10">
    <div>SERVICES</div>

    <div>
        Learn more about our mission, values, and the talented team behind our success. See how our commitment to excellence shapes every project we undertake.
    </div>
    </div>
</>
        )
}

const IndInfo = () => {
    return (
<>
<div className="bg-white py-30 px-10">
    <div>INDUSTRIES</div>

    <div>
    Discover industry-specific solutions tailored to meet the unique challenges and
     opportunities of your sector, leveraging our extensive cross-industry expertise.
    </div>
    </div>
</>
        )
}


const TecInfo = () => {
    return (
<>
<div className="bg-white py-30 px-10">
    <div>TECH STACK</div>

    <div>
    Dive into our arsenal of modern technologies, where we combine cutting-edge tools and proven frameworks to build scalable, robust, and innovative applications.
    </div>
    </div>
</>
        )
}


const ComInfo = () => {
    return (
<>
<div className="bg-white py-30 px-10">
    <div>COMPANY</div>

    <div>
    Learn more about our mission, values, and the talented team behind our success. 
    See how our commitment to excellence shapes every project we undertake.
    </div>
    </div>
</>
        )
}


const ProInfo = () => {
    return (
<>
     <div className="bg-white py-30 px-10 w-60">
    <div>company</div>

    <div>
        Learn more about our mission, values, and the talented team behind our success. See how our commitment to excellence shapes every project we undertake.
    </div>
    </div>

</>
        )
}

const navItems = [
    { label: "SERVICES", path: "/services", submenu: servicesSubmenu , subInfo: <SerInfo/>},
    { label: "INDUSTRIES", path: "/industries" , submenu: industriesSubmenu, subInfo: <IndInfo/>},
    { label: "TECH STACK", path: "/tech-stack" , submenu: techstackSubmenu, subInfo: <TecInfo/>},
    { label: "COMPANY", path: "/company" , submenu: companySubmenu, subInfo: <ComInfo/>},
    { label: "PROJECTS", path: "/projects" , submenu: servicesSubmenu, subInfo: <ProInfo/>}
];
export default function Navbar() {
    const [showModal, setShowModal] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openSubmenus, setOpenSubmenus] = useState({});

    const toggleSubmenu = (label) => {
        setOpenSubmenus((prev) => ({
            ...prev,
            [label]: !prev[label]
        }));
    };

    return (
        <header className="bg-white text-[#405EA9] shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                {/* Logo */}
                
                <img
                    width="50px"
                    height="50px"
                    className="object-contain"
                    src="/Logo.webp"
                    alt="logo"
                />
               
                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-6 relative items-center  ">
                   
                    {navItems.map(({ label, path, submenu, subInfo }) => (
                        <div key={label} className="group relative ">
                            <a
                                href={path}
                                className="hover:text-blue-400 transition-colors"
                            >
                                {label}
                            </a>
                            {submenu && (
                                <>
                                <div className="absolute left-0 sm:flex sm:h-screen sm:max-w-screen   bg-white text-[#405EA9] rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 z-50">
                                    

                                        <div className="flex-1/3 bg-white sm:h-screen justify-center "> {subInfo}</div>
                                        <div className="flex-2/3">
                                        <ul className="py-9 columns-3 gap-8 bg-white sm:h-screen">
                                        {submenu.map((item) => (
                                            <li key={item} className="justify-center py-4">
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                                                >
                                                    {item}
                                                </a>
                                            </li>
                                        ))}
                                        </ul>
                                        </div>
                                    
                                </div>
                                </>
                                )}
                        </div>
                    ))}
                    {/*  
                    <div >
                    
                    
                    <button  onClick={() => setShowModal(true)}
                    className="ml-4 bg-[#284181] hover:bg-blue-500 text-white font-bold py-2 px-4 rounded ">
                        BOOK A CALL
                    </button>

                    </div>
                    */}
                </nav>

                <div >
                    
                    
                    <button  onClick={() => setShowModal(true) }
                    className="ml-4 bg-[#284181] hover:bg-blue-500 text-white font-bold py-2 px-4 rounded invisible sm:visible ">
                        BOOK A CALL
                    </button>

                    </div>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden focus:outline-none"
                >
                    <svg
                        className="w-6 h-6 text-[#405EA9]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isMobileMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-4">
                    {navItems.map(({ label, path, submenu }) => (
                        <div key={label}>
                            <div className="flex justify-between items-center py-2 border-b border-gray-700">
                                <a href={path} className="text-[#405EA9] font-semibold">
                                    {label}
                                </a>
                                {submenu && (
                                    <button
                                        onClick={() => toggleSubmenu(label)}
                                        className="text-[#405EA9] focus:outline-none"
                                    >
                                        <svg
                                            className={`w-4 h-4 transition-transform ${
                                                openSubmenus[label] ? "rotate-180" : ""
                                            }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>
                                )}
                            </div>

                            {submenu && openSubmenus[label] && (
                                <ul className="pl-4 text-sm text-[#405EA9] space-y-1">
                                    {submenu.map((item) => (
                                        <li key={item}>
                                            <a href="#" className="block py-1">
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                    <button  onClick={() => setShowModal(true)}
                    className="w-full bg-[#284181] hover:bg-blue-500 text-white font-bold py-2 rounded">
                        BOOK A CALL
                    </button>
                </div>
            )}


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

          <div className="md:w-2/5 bg-[#405EA9] p-6 md:p-8 text-white ">
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





        </header>
    );
}