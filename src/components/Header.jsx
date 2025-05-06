import { useState } from "react"

function Header()
{
  // const services =[ {name:"Custom Software Development", path:"",},
  //                   {name:"Startup MVP Development", path:""},
  //                   {name:"Web Development", path:""},
  //                   {name:"Mobile App Development", path:""},
  //                   {name:"Android App Development", path:""},
  //                   {name:"Cross-Platform App Development", path:""}
  // ]

 return(
  <>
    
        <div class="flex items-center ">
        <div class="flex-1/4">
         <img width="50px" height=" 50px" class="ml-40 mt-2" src="Logo.webp" alt="logo" />
        </div>
        <div class="flex-1/2">
       
        <ul class="flex flex-wrap items-center justify-center text-indigo-800 decoration-solid ">
          

          
        <li class="m-4">SERVICES</li>

          <li class="m-4">INDUSTRIES</li>
          <li class="m-4">TECH STACK</li>
          <li class="m-4">COMPANY</li>
          <li class="m-4">PROJECTS</li>
        </ul>
        
        
        </div>
        <div class="flex-1/4">
        <button class="bg-[#284181] hover:bg-blue-500 text-white font-bold py-3 px-6 border border-blue-700 rounded">BOOK A CALL</button>
        </div>
        
        </div>
        
      <br />
      <br />

  </>
 )   
}
export default Header