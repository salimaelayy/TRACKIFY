import React from 'react';

const DashboardSearch = () => {
  return (
    <div className="w-full h-12 pl-4 pb-2 border-b pr-6  border-gray-300 flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <div className="text-zinc-900 text-xl font-bold font-['Inter']">Hello Tanzir</div>
        <div className="flex gap-1 items-center">
          <div className="w-4 h-4 bg-gray-400 rounded-full" />
          <div className="text-sm text-neutral-400 font-normal font-['Inter']">May 19, 2023</div>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="w-96  h-10 justify-start items-center gap-10 inline-flex">
          <div className="justify-start items-center gap-8 flex">
            <div className="w-6 h-6 relative flex-col justify-start items-start inline-flex" />
          </div>
          <div className="pl-8  pr-3 py-2 bg-white rounded-md shadow justify-start items-start gap-44 flex flex-grow">
            <input
              type="text"
              placeholder="Search here"
              className="w-full text-neutral-400 text-base font-normal font-['Inter'] leading-normal outline-none"
            />
            <div className="w-6 h-6 relative" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSearch;
