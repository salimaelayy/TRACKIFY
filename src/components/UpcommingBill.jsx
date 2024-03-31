import React from 'react'

const UpcommingBill = () => {
  return (
      <div className="w-80 h-64 flex-col justify-start items-start gap-2 inline-flex">
    <div className="justify-start items-center gap-32 inline-flex">
      <div className="text-zinc-500 text-sm font-normal font-['Inter'] leading-loose">Upcoming Bill</div>
      <div className="justify-start items-center gap-2 flex">
        <div className="text-zinc-500 text-xs font-medium font-['Inter'] leading-none">View All</div>
        <div className="w-4 h-4 py-1 justify-center items-center flex" />
      </div>
    </div>
    <div className="p-3 px-6 bg-white rounded-lg shadow flex-col justify-start items-start flex">
        <div className="w-72 pt-1 pb-3 border-b border-zinc-100 justify-between items-center inline-flex">
          <div className="justify-start items-center gap-3 flex">
            <div className="p-2 bg-neutral-300 bg-opacity-25 rounded-lg border-r flex-col justify-center items-center gap-0.5 inline-flex">
              <div className="w-7 text-center text-stone-500 text-xs font-medium font-['Inter'] leading-none">May</div>
              <div className="w-7 text-center text-zinc-900 text-xl font-extrabold font-['Inter'] capitalize leading-loose">15</div>
            </div>
            <div className="flex-col justify-start items-start gap-1 inline-flex">
              <div className="w-11 h-4 relative" />
              <div className="flex-col justify-start items-start gap-0.5 flex">
                <div className="w-40 text-neutral-600 text-base font-bold font-['Inter'] capitalize leading-normal">figma - Monthly</div>
                <div className="w-40 text-neutral-400 text-xs font-normal font-['Inter'] leading-none">Last Charge - 14 May, 2022</div>
              </div>
            </div>
          </div>
          <div className="px-2 py-1 bg-white rounded-lg border border-gray-200 justify-start items-start gap-2 flex">
            <div className="w-11 text-center text-neutral-600 text-base font-bold font-['Inter'] capitalize leading-normal">$150</div>
          </div>
        </div>
        <div className="w-56 pt-3 pb-1 justify-between items-center inline-flex">
          <div className="justify-start items-center gap-3 flex">
            <div className="p-2 bg-neutral-300 bg-opacity-25 rounded-lg border-r flex-col justify-center items-center gap-0.5 inline-flex">
              <div className="w-7 text-center text-stone-500 text-xs font-medium font-['Inter'] leading-none">Jun</div>
              <div className="w-7 text-center text-zinc-900 text-xl font-extrabold font-['Inter'] capitalize leading-loose">16</div>
            </div>
            <div className="flex-col justify-start items-start gap-1 inline-flex">
             
              <div className="flex-col justify-start items-start gap-0.5 flex">
                <div className="w-40 text-neutral-600 text-base font-bold font-['Inter'] capitalize leading-normal">Adobe - Yearly</div>
                <div className="w-40 text-neutral-400 text-xs font-normal font-['Inter'] leading-none">Last Charge - 17 Jun, 2023</div>
              </div>
            </div>
          </div>
          <div className="px-2 py-1 bg-white rounded-lg border border-gray-200 justify-start items-start gap-2 flex">
            <div className="w-11 text-center text-neutral-600 text-base font-bold font-['Inter'] capitalize leading-normal">$559</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcommingBill