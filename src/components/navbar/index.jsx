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

const SubInfo = () => {
    return (
<>
    <div>company</div>

    <div>
        Learn more about our mission, values, and the talented team behind our success. See how our commitment to excellence shapes every project we undertake.
    </div>

</>
        )
}
const navItems = [
    { label: "SERVICES", path: "/services", submenu: servicesSubmenu , subInfo: <SubInfo/>},
    { label: "INDUSTRIES", path: "/industries" , submenu: servicesSubmenu , subInfo: <SubInfo/>},
    { label: "TECH STACK", path: "/tech-stack" , submenu: servicesSubmenu, subInfo: <SubInfo/>},
    { label: "COMPANY", path: "/company" , submenu: servicesSubmenu, subInfo: <SubInfo/>},
    { label: "PROJECTS", path: "/projects" , submenu: servicesSubmenu, subInfo: <SubInfo/>}
];
export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openSubmenus, setOpenSubmenus] = useState({});

    const toggleSubmenu = (label) => {
        setOpenSubmenus((prev) => ({
            ...prev,
            [label]: !prev[label]
        }));
    };

    return (
        <header className="bg-gray-900 text-white shadow-md">
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
                <nav className="hidden md:flex space-x-6 relative items-center">
                    {navItems.map(({ label, path, submenu, subInfo }) => (
                        <div key={label} className="group relative">
                            <a
                                href={path}
                                className="hover:text-blue-400 transition-colors"
                            >
                                {label}
                            </a>
                            {submenu && (
                                <>
                                <div className="absolute left-0 mt-2 w-64 bg-white text-gray-800 rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 z-50">
                                    <ul className="py-2">

                                        <div> {subInfo}</div>
                                        {submenu.map((item) => (
                                            <li key={item}>
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
                                </>
                                )}
                        </div>
                    ))}
                    <button className="ml-4 bg-[#284181] hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
                        BOOK A CALL
                    </button>
                </nav>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden focus:outline-none"
                >
                    <svg
                        className="w-6 h-6 text-white"
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
                                <a href={path} className="text-white font-semibold">
                                    {label}
                                </a>
                                {submenu && (
                                    <button
                                        onClick={() => toggleSubmenu(label)}
                                        className="text-white focus:outline-none"
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
                                <ul className="pl-4 text-sm text-gray-300 space-y-1">
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
                    <button className="w-full bg-[#284181] hover:bg-blue-500 text-white font-bold py-2 rounded">
                        BOOK A CALL
                    </button>
                </div>
            )}
        </header>
    );
}