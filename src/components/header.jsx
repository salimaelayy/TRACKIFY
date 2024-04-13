import React from 'react';
import { Link } from 'react-router-dom';
import logo_light from '../assets/Trackify-white.png'
import logo_icon from '../assets/icon.png'

const Header = () => {
  return (
    <nav className="bg-secondary bg-opacity-85 w-full flex relative justify-between items-center mx-auto px-8 h-16">
      {/* logo */}
      <div className="inline-flex">
        <Link to="/login">
          <div className="hidden md:block font-extrabold text-3xl"><img src={logo_light} alt="" className='w-32'/></div>
          <div className="block md:hidden"><img src={logo_icon} alt="" className='w-16'/></div>
        </Link>
      </div>

      {/* login */}
      <div className="flex-initial">
        <div className="flex justify-end items-center relative">
          <Link to="/login">
            <button className='bg-accent  w-36 font-medium text-secondary shadow hover:shadow-md hover:bg-yellow-200 px-4 py-2 rounded-md float-right'>sign in</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
