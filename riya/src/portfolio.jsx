import React from 'react'
import "./portfolio.css"
import img from "./assets/img.jpg"
import { FaLinkedin } from "react-icons/fa6";
import { TbBrandGmail } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";


const portfolio = () => {
  return (
    <>
    <header className='flex gap-40  h-10 bg-blue-800 text-amber-50 border border-b-blue-200 border-dotted'>
      <i className='ml-8'> My portfolio</i>  
<ul className='flex gap-5 ml-7 '>
    <li className=' hover:underline'>Home</li>
    <li className=' hover:underline'>Skill</li>
    <li className=' hover:underline'>Project</li>
    <li className=' hover:underline'>Eduction</li> 
    <li className=' hover:underline'>contact</li>
</ul>
    </header>
<section className='bg-blue-950 h-96 flex  '>
   <div className='w-auto border-amber-600 ' >
    <h3 className='text-cyan-100 ml-8 pt-3 flex  ' >Coder</h3>
    <h1 className='text-amber-50 ml-8 text-3xl'>HI,I'M</h1>
    <h1 className='text-cyan-500 ml-8 text-3xl'>RIYA</h1>
    <h1 className='text-cyan-300 ml-8 text-3xl'>VERMA</h1>
    <p className='mr-40 ml-8 text-sm text-cyan-200'>continuously improving my skill to build responsive and scalable web application beinding both forntend and backend development.passionate about full-stack development and creating impactful project</p>
  <div className='flex '>
   <h1 className='flex text-amber-50 gap-4 ml-10 mt-5'><FaLinkedin /><TbBrandGmail /><FaGithub /></h1>
<button className='text-amber-50 border ml-3  mt-3 rounded p-1 text-xs bg-blue-900 hover:bg-blue-700'>Get Cv</button>
</div>
</div>
<img src={img} alt=""className="w-50 h-50  mt-10 mr-10 rounded-full object-cover"/>
</section>
    </>
  )
}

export default portfolio