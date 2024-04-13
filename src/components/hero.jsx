import React from 'react'
import Mockup from "../assets/mockup.png"
import ButtonAccent from '../pages/ButtonAccent'

const Hero = () => {
  return (
    <><section className=" h-screen bg-background text-primary py-20">
    <div className="container mx-auto px-8">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2 lg:mr-10">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">Develop & deploy code with <span className="text-accent">Buddy</span></h1>
          <p className="text-lg lg:text-xl mb-8">Automate your web development routine and build better websites faster.</p>
          <div className="inline-flex">
            <ButtonAccent classname="bg-accent align-center  font-medium text-primary shadow hover:shadow-md hover:bg-yellow-200 px-8 py-2 rounded-md float-right" buttontext="Get started"/></div>
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