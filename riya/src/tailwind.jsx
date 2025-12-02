import React from 'react'
// import "./taiwind.css"
import img from "/src/one.jpg"
import { FaHome } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import { BiSolidLogInCircle } from "react-icons/bi";

const App = () => {
  return (
    <>
    <header className='flex justify-between px-3'>
    <img src={img} alt="Logo" class="h-12 w-auto rounded-3xl "  />
    <ul className='flex items-center'>
    <li className='text-cyan-700 p-2 flex '><FaHome />Home</li>
    <li  className='text-cyan-500 p-2 '>About</li>
    <li className='text-cyan-300 p-2 flex'><IoIosContacts />contect</li>
    <li className='text-cyan-300 p-2 flex'><BiSolidLogInCircle />Logine</li>
    </ul>
    <button className='border-2 bg-cyan-600 h-8 border-cyan-900 text-gray-50  rounded'>Download</button>
 
   {/* </div> */}
   </header>
    </>
  )
}

export default App;