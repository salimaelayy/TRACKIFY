import React from 'react';

const CardInfo = () => {
  return (
    <div className="w-80 flex-col justify-start items-start gap-2 inline-flex">
      <div className="text-zinc-500 text-sm font-normal font-['Inter'] leading-loose">Total Balance</div>
      <div className="px-6 py-4 bg-white rounded-lg shadow flex-col justify-start items-start gap-3 flex">
        <div className="flex-col justify-start items-start gap-3 flex">
          <div className="w-64 pb-2 border-b border-zinc-100 justify-between items-center inline-flex">
            <div className="text-zinc-900 text-base font-extrabold font-['Inter'] capitalize leading-loose">$240,399</div>
            <div className="text-right text-neutral-600 text-xs font-medium font-['Inter'] capitalize leading-tight">All Accounts</div>
          </div>
          <div className="w-64 p-3 bg-teal-600 rounded justify-between items-center inline-flex">
            <div className="flex-col justify-start items-start inline-flex">
              <div className="w-32 text-white text-opacity-70 text-xs font-medium font-['Inter'] capitalize leading-tight">Account type</div>
              <div className="w-32 text-white text-sm font-bold font-['Inter'] capitalize leading-normal">Credit Card</div>
              <div className="w-36 text-white text-opacity-70 text-xs font-medium font-['Inter'] capitalize leading-tight">**** **** **** 2598</div>
            </div>
            <div className="flex-col justify-center items-end gap-2 inline-flex">
              <div className="w-16 h-5 justify-center items-center gap-1 inline-flex">
                <div className="w-16 h-8">
                  <img className="w-full h-full" src="https://via.placeholder.com/43x24" alt="credit card icon" />
                </div>
              </div>
              <div className="justify-start items-center gap-1 inline-flex">
                <div className="w-24 text-right text-white text-xs font-bold font-['Inter'] capitalize leading-normal">$25000</div>
                <div className="p-1 bg-white rounded justify-start items-start gap-1 flex">
                  <div className="w-6 h-6 bg-white rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-64 justify-between items-center inline-flex">
          <div className="h-3 justify-start items-center gap-1 flex">
            <div className="w-2 h-2 py-0.5 origin-top-left rotate-180 justify-center items-center flex" />
            <div className="text-neutral-300 text-xs font-medium font-['Inter'] capitalize leading-tight">Previous</div>
          </div>
          <div className="justify-start items-start gap-1 flex">
            <div className="w-1 h-1 bg-teal-600 rounded-full" />
            <div className="w-1 h-1 bg-neutral-300 rounded-full" />
            <div className="w-1 h-1 bg-neutral-300 rounded-full" />
          </div>
          <div className="h-3 justify-end items-center gap-1 flex">
            <div className="text-zinc-900 text-xs font-medium font-['Inter'] capitalize leading-tight">Next</div>
            <div className="w-2 h-2 py-0.5 justify-center items-center flex" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
