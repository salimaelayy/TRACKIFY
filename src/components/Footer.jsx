import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../assets/icon.png'


const Footer = () => {
  return (
    <div>
      <footer className="bg-secondary text-background">
        <div className="container flex justify-between items-center mx-auto py-4 px-4">
          {/* Footer content */}
          <div className="flex items-center">
            <img className='w-8 mx-3' src={icon}/>
            <span className='text-xl font-black text-primary'>Trackify</span>
          </div>
          <p className="text-right  text-primary  flex-grow">&copy; 2024 Trackify All rights reserved by <Link target="_blank" to="https://www.linkedin.com/in/salima-el-ayyachi-fullstack-mern-developer/"> Salima El Ayyachi</Link> </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer