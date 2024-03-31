import React from 'react'
import Mockup from "../assets/mockup.png"

const Hero = () => {
  return (
    <><section className="bg-gradient-to-b h-screen from-blue-500 to-indigo-600 text-white py-20">
    <div className="container mx-auto px-8">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2 lg:mr-10">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">Develop & deploy code with <span className="text-yellow-300">Buddy</span></h1>
          <p className="text-lg lg:text-xl mb-8">Automate your web development routine and build better websites faster.</p>
          <a href="#" className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-blue-500 hover:text-white">Get Started</a>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img src={Mockup} alt="Hero Image" className=" " />
        </div>
      </div>
    </div>
  </section></>
  )
}

export default Hero