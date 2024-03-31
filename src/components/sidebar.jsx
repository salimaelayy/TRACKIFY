import React from 'react';
import { MdMoreVert } from "react-icons/md";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen px-7 justify-center  bg-teal-800 flex-col ">
      <div className="flex-col flex">
        <div className="w-56 text-center font-extrabold text-2xl py-6 text-white"><span>FINE</span><span>bank.</span><span>IO</span></div>
        <div className="flex-col justify-start items-start gap-4 flex">
          <div className="px-4 py-3  bg-orange-300 rounded justify-start items-center gap-3 inline-flex">
            <div className="w-6 h-6 relative" />
            <Link to="/dashboard" className="w-32 h-6 font-medium hover:bg-orange-300 hover:bg-opacity-65 text-teal-800 text-base  font-['Inter'] leading-normal">Overview</Link>
          </div>
         
          <div className="px-4 py-3 hover:bg-orange-300 hover:bg-opacity-65 rounded justify-start items-center gap-3 inline-flex">
            <div className="w-6 h-6 relative" />
            <Link to="expenses" className="w-32 h-6   text-white text-opacity-70 text-base font-normal font-['Inter'] leading-normal">Expenses</Link>
          </div>
          <div className="px-4 py-3 hover:bg-orange-300 hover:bg-opacity-65 rounded justify-start items-center gap-3 inline-flex">
            <div className="w-6 h-6 p-0.5 justify-center items-center flex" />
            <Link to="incomes" className="w-32 h-6   text-white text-opacity-70 text-base font-normal font-['Inter'] leading-normal">Incomes</Link>
          </div>

          <div className="px-4 py-3 hover:bg-orange-300 hover:bg-opacity-65 rounded justify-start items-center gap-3 inline-flex">
            <div className="w-6 h-6 px-0.5 py-1 justify-center items-center flex">
              <div className="w-5 h-4 relative">
              </div>
            </div>
            <Link to="transactions" className="w-32 h-6   text-white text-opacity-70 text-base font-normal font-['Inter'] leading-normal">Budget</Link>
          </div>
         
          <div className="px-4 py-3 hover:bg-orange-300 hover:bg-opacity-65 rounded justify-start items-center gap-3 inline-flex">
            <div className="w-6 h-6 relative" />
            <Link to="settings" className="w-32 h-6   text-white text-opacity-70 text-base font-normal font-['Inter'] leading-normal">Settings</Link>
          </div>
        </div>
      </div>
      <div className="flex-col justify-start my-6 items-start gap-11 flex">
        <div className="px-4 py-3  hover:shadow hover:bg-orange-300  opacity-80 bg-white bg-opacity-10 rounded justify-start items-center gap-3 inline-flex">
          <div className="w-6 h-6 justify-start items-center gap-3 flex">
            <div className="w-5 h-5 relative" />
          </div>
          <div className="w-32 h-6 hover:text-teal-800 hover:font-bold  text-amber-50 text-base font-normal font-['Inter'] leading-normal">Logout</div>
        </div>
        <div className="py-8 border-t fixed bottom-0  border-white border-opacity-10 justify-start items-center gap-8 inline-flex">
          <div className="justify-start items-center gap-4 flex">
            <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
            <Link to="settings">
            <div className="flex-col justify-start items-start inline-flex">
              <div className="w-30 text-amber-50 text-base font-normal font-['Inter'] leading-normal">Tanzir Rahman</div>
              <div className="text-white text-opacity-70 text-xs font-normal font-['Inter'] leading-none">View profile</div>
            </div> 
            </Link>
            <div className="flex-col justify-start items-start gap-1 inline-flex">
              <MdMoreVert className='text-white' />
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
