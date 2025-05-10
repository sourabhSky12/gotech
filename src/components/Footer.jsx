  
  {/* 
  function Footer() {
    return (
      <>
       <div class="flex primebgcolor text-amber-50 h-40vh flex-row">
        <div class="flex flex-1/5">
        SVG-icon
        </div>
        <div class="flex-1/5">
        
          <h3 class="block">SERVICES</h3>
          <ul>
                <li>cloud & DevOPS Services</li>
                <li>AI & ML DEVELOPMENT</li>
  
                <li>UI/UX DESIGN </li>
                <li>E-COMMERCE App Development</li>
                <li>Cross-Platform App Development</li>
        </ul>
        </div>
        <div class=" flex-1/5 " >
        <div class="text-white">
  <h3 class="text-base font-semibold mb-4">TECH STACK</h3>
  <ul class="space-y-2">
    <li>Angular</li>
    <li>Node</li>
    <li>.NET</li>
    <li>Python</li>
    <li>iOS</li>
    <li>React Native</li>
    <li>React</li>
    <li>PHP</li>
    <li>Java</li>
    <li>Rails</li>
    <li>Android</li>
    <li>Flutter</li>
  </ul>
</div>
 
        </div>
        <div class="flex flex-1/5">
        <ul>
            <li><h3>COMPANY</h3></li>
                <li>Home</li>
                <li>Services</li>
                <li>Contact</li>
                <li>About Us</li>
                <li>Technologies</li>
                <li>Blogs</li>
              
        </ul>
        </div>
        <div class="flex flex-1/5">CONTACT</div>

       </div>
      </>
      
      
    );
  }
  export default Footer;
  */}

  import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1e3a8a] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-8">
        {/* Logo and Copyright */}
        <div>
          <img className="w-20 h-20" src="Logo.webp" alt="go icon"/>
          {/* <h2 className="text-xl font-bold mb-2">GO TECH SOLUTION</h2> */}
          <p className="pt-3">© 2024 Go-tech Solution Inc. All Rights Reserved.</p>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-3">SERVICES</h3>
          <ul className="space-y-2 text-sm">
            <li>Cloud & DevOps Services</li>
            <li>AI & ML Development</li>
            <li>UI/UX Design</li>
            <li>E-Commerce App Development</li>
            <li>Cross-Platform App Development</li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="font-semibold mb-3">TECH STACK</h3>
         
          <ul className="space-y-2 text-sm">
            <li>Angular</li>
            <li>Node</li>
            <li>.NET</li>
            <li>Python</li>
            <li>iOS / React Native</li>
            <li>React / PHP / Java</li>
            <li>Rails / Android / Flutter</li>
          
          </ul>
         
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold mb-3">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Services</li>
            <li>Contact</li>
            <li>About Us</li>
            <li>Technologies</li>

            <li>Blogs</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3">CONTACTS</h3>
          <ul className="text-sm space-y-2">
            <li>Email: career@go-techsolution.com</li>
            <li>Phone: +91-8769365375</li>
            <li>
              Address: 515-517, 5th Floor, Amrit Shree, University Road, Udaipur,
              Rajasthan 313001
            </li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
            <FaInstagram className="hover:text-gray-300 cursor-pointer" />
            <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
            <FaYoutube className="hover:text-gray-300 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center mt-10 text-sm border-t border-white/20 pt-4">
        © 2025 Go-tech Solution Inc. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
