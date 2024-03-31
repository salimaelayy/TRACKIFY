import React from 'react'

const Startistics = () => {
  return (
    <div className="w-96  flex-col justify-start items-start gap-2 inline-flex">
    <div className="text-zinc-500 text-sm font-normal font-['Inter'] leading-loose">Statistics</div>
    <div className="px-6 pt-4 pb-4 bg-white rounded-lg shadow flex-col justify-start items-start gap-3.5 flex">
      <div className="w-96 justify-between items-center inline-flex">
        <div className="justify-start items-center gap-3 flex">
          <div className="text-zinc-900 text-base font-semibold font-['Inter'] leading-normal">Weekly Comparison</div>
          <div className="w-6 h-6 px-1.5 justify-center items-center flex" />
        </div>
        <div className="justify-end items-center gap-6 flex">
          <div className="justify-start items-center gap-2 flex">
            <div className="w-4 h-2 bg-teal-600 rounded-sm" />
            <div className="text-neutral-600 text-xs font-medium font-['Inter'] leading-none">This week</div>
          </div>
          <div className="justify-start items-center gap-2 flex">
            <div className="w-4 h-2 bg-gray-200 rounded-sm" />
            <div className="text-neutral-600 text-xs font-medium font-['Inter'] leading-none">Last week</div>
          </div>
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-4 flex">
        <div className="justify-start items-center gap-4 inline-flex">
          <div className="w-12 text-right text-neutral-400 text-sm font-normal font-['Inter'] leading-tight">$250k</div>
          <div className="w-96 h-px border border-zinc-100"></div>
        </div>
        <div className="justify-start items-end gap-8 inline-flex">
        <div className="justify-start items-end gap-8 inline-flex">
          <div className="flex-col justify-end items-center gap-2.5 inline-flex">
            <div className="justify-start items-end gap-2 inline-flex">
              <div className="w-4 h-28 bg-gray-200 rounded-tl rounded-tr" />
              <div className="w-4 h-36 bg-teal-600 rounded-tl rounded-tr" />
            </div>
            <div className="w-12 text-center text-neutral-400 text-sm font-normal font-['Inter'] leading-tight">17 Sun</div>
          </div>
          <div className="flex-col justify-start items-center gap-2.5 inline-flex">
            <div className="justify-start items-end gap-2 inline-flex">
              <div className="w-4 h-20 bg-gray-200 rounded-tl rounded-tr" />
              <div className="w-4 h-24 bg-teal-600 rounded-tl rounded-tr" />
            </div>
            <div className="w-12 text-center text-neutral-400 text-sm font-normal font-['Inter'] leading-tight">18 Mon</div>
          </div>
          <div className="flex-col justify-start items-center gap-2.5 inline-flex">
            <div className="justify-start items-end gap-2 inline-flex">
              <div className="w-4 h-28 bg-gray-200 rounded-tl rounded-tr" />
              <div className="w-4 h-16 bg-teal-600 rounded-tl rounded-tr" />
            </div>
            <div className="w-12 text-center text-neutral-400 text-sm font-normal font-['Inter'] leading-tight">19 Tue</div>
          </div>
          <div className="flex-col justify-start items-center gap-2.5 inline-flex">
            <div className="justify-start items-end gap-2 inline-flex">
              <div className="w-4 h-28 bg-gray-200 rounded-tl rounded-tr" />
              <div className="w-4 h-28 bg-teal-600 rounded-tl rounded-tr" />
            </div>
            <div className="w-12 text-center text-neutral-400 text-sm font-normal font-['Inter'] leading-tight">20 Wed</div>
          </div>
          <div className="flex-col justify-start items-center gap-2.5 inline-flex">
            <div className="justify-start items-end gap-2 inline-flex">
              <div className="w-4 h-24 bg-gray-200 rounded-tl rounded-tr" />
              <div className="w-4 h-28 bg-teal-600 rounded-tl rounded-tr" />
            </div>
            <div className="w-12 text-center text-neutral-400 text-sm font-normal font-['Inter'] leading-tight">21 Thu</div>
          </div>
          <div className="flex-col justify-start items-center gap-2.5 inline-flex">
            <div className="justify-start items-end gap-2 inline-flex">
              <div className="w-4 h-14 bg-gray-200 rounded-tl rounded-tr" />
              <div className="w-4 h-32 bg-teal-600 rounded-tl rounded-tr" />
            </div>
            <div className="w-12 text-center text-neutral-400 text-sm font-normal font-['Inter'] leading-tight">22 Fri</div>
          </div>
          <div className="flex-col justify-start items-center gap-2.5 inline-flex">
            <div className="justify-start items-end gap-2 inline-flex">
              <div className="w-4 h-20 bg-gray-200 rounded-tl rounded-tr" />
              <div className="w-4 h-28 bg-teal-600 rounded-tl rounded-tr" />
            </div>
            <div className="w-12 text-center text-neutral-400 text-sm font-normal font-['Inter'] leading-tight">23 Sat</div>
          </div>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default Startistics