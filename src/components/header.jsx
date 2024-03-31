import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-white w-full flex relative justify-between items-center mx-auto px-8 h-20">
      {/* logo */}
      <div className="inline-flex">
        <Link to="/login">
          <div className="hidden md:block font-extrabold text-3xl">Trackify</div>
          <div className="block md:hidden">Mobile Logo</div>
        </Link>
      </div>

      {/* login */}
      <div className="flex-initial">
        <div className="flex justify-end items-center relative">
          <Link to="/login">
            <button className='border bg-slate-700 p-2 rounded px-8 text-white'>sign in</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
