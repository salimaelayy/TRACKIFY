import React from 'react';

const MonthOverview = () => {
  return (
    <div className="w-80 flex-col gap-2 inline-flex">
      <div className="w-80 text-zinc-500 text-sm font-normal font-['Inter'] leading-loose">Month Overview</div>
      <div className="px-4 py-3 w-80 h-48 bg-white rounded-lg shadow flex-col justify-center items-center gap-3">
        
        <div className="text-center text-slate-700 text-xs font-medium font-['Inter']">$12,500</div>
        <div className="flex w-full ">
          <div className="w-7 h-18 m-3 bg-slate-100 rounded-lg" />
          <div className="w-7 h-27 m-3 bg-slate-100 rounded-lg" />
          <div className="w-7 h-18 m-3 bg-slate-100 rounded-lg" />
          <div className="w-7 h-9 m-3 bg-slate-100 rounded-lg" />
          <div className="w-7 h-24 m-3 bg-teal-400 rounded-lg shadow" />
          <div className="w-7 h-15 m-3 bg-slate-100 rounded-lg" />
        </div>
        <div className="flex justify-around w-full">
          <div className="text-slate-400 px-1 text-xs font-normal font-['Inter']">Aug</div>
          <div className="text-slate-400 px-1 text-xs font-normal font-['Inter']">Sep</div>
          <div className="text-slate-400 px-1 text-xs font-normal font-['Inter']">Oct</div>
          <div className="text-slate-400 px-1 text-xs font-normal font-['Inter']">Nov</div>
          <div className="text-slate-400 px-1 text-xs font-normal font-['Inter']">Dec</div>
          <div className="text-slate-400 px-1 text-xs font-normal font-['Inter']">Jan</div>
        </div>
      </div>
    </div>
  );
};

export default MonthOverview;
