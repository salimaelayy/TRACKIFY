import React from 'react'

const Goals = () => {
  return (
    <div><div className="w-80 h-64 flex-col justify-start items-start gap-2 inline-flex">
    <div className="text-zinc-500 text-base font-normal font-['Inter'] leading-loose">Goals</div>
    <div className="px-6 py-5 bg-white rounded-lg shadow flex-col justify-start items-start gap-5 flex">
      <div className="w-72 pb-3 border-b border-zinc-100 justify-between items-center inline-flex">
        <div className="justify-start items-center gap-2 flex">
          <div className="text-zinc-900 text-xl font-extrabold font-['Inter'] capitalize leading-loose">$20,000</div>
          <div className="p-2 bg-neutral-300 bg-opacity-25 rounded justify-start items-start gap-2 flex">
            <div className="w-4 h-4 px-0.5 py-0.5 flex-col justify-center items-end inline-flex" />
          </div>
        </div>
        <div className="text-right text-neutral-600 text-sm font-medium font-['Inter'] capitalize leading-tight">May, 2023</div>
      </div>
      <div className="h-32 justify-start items-start gap-4 inline-flex">
        <div className="h-32 flex-col justify-center items-start gap-6 inline-flex">
          <div className="justify-start items-start gap-1 inline-flex">
            <div className="w-6 h-6 px-1 pt-1 pb-0.5 justify-center items-center flex" />
            <div className="flex-col justify-start items-start gap-1 inline-flex">
              <div className="w-28 text-zinc-500 text-xs font-normal font-['Inter'] leading-none">Target Achieved</div>
              <div className="w-28 text-zinc-900 text-base font-bold font-['Inter'] capitalize leading-normal">$12,500</div>
            </div>
          </div>
          <div className="justify-start items-start gap-1 inline-flex">
            <div className="w-6 h-6 relative" />
            <div className="flex-col justify-start items-start gap-1 inline-flex">
              <div className="w-28 text-zinc-500 text-xs font-normal font-['Inter'] leading-none">This month Target</div>
              <div className="w-28 text-zinc-900 text-base font-bold font-['Inter'] capitalize leading-normal">$20,000</div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-center gap-3.5 inline-flex">
          <div className="flex-col justify-start items-center gap-1.5 flex">
            <div className="flex-col justify-start items-center flex">
              <div className="flex-col justify-start items-start flex" />
              <img className="w-9 h-9" src="https://via.placeholder.com/36x36" />
            </div>
            <div className="w-36 justify-between items-center inline-flex">
              <div className="w-6 text-center text-neutral-300 text-xs font-medium font-['Inter'] leading-none">$0</div>
              <div className="w-7 text-center text-zinc-900 text-base font-semibold font-['Inter'] leading-normal">12K</div>
              <div className="w-8 text-right text-neutral-300 text-xs font-medium font-['Inter'] leading-none">$20k</div>
            </div>
          </div>
          <div className="text-zinc-900 text-xs font-medium font-['Inter'] leading-none">Target vs Achievement</div>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default Goals