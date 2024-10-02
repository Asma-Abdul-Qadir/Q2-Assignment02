import React from 'react';
import Image from "next/image";
import image from "../../../public/image.jpg"


function About() {
  return (
    <>

    <div className='border-purple-300 border-4 absolute flex'>
    <div className='w-70 h-50 p-10'>
    
      <h1 className='text-6xl font-bold m-5'>UI/UX DESIGNER</h1>
      <h2 className='text-3xl font-bold m-5'>ASMA ABDUL QADIR</h2>
    <p className='text-2xl m-5 '>I'm a passionate web developer and UI/UX design student with a keen interest in creating visually stunning and functional digital experiences.I'm dedicated to crafting innovative solutions that meet the needs of users.</p></div>
 
    <div className=' w-50 h-200 justify-end items-center top-10 
     '>
    <Image src={'/image.jpg'} 
    width={1200}
    height={800}
    alt="picture"   
    />

    </div>
    </div>
    
    </>
  )
}

export default About