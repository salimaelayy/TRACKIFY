import React from 'react';

const TransactionsC = () => {
  return (
    <div>
      <div className="w-80 flex-col justify-start items-start gap-2 inline-flex">
        <div className="w-80 justify-between  inline-flex">
          <div className="text-zinc-500 text-sm font-normal font-['Inter'] leading-loose">Recent Transaction</div>
          <div className="justify-start items-center gap-2 flex">
            <div className="text-zinc-500 text-xs font-medium font-['Inter'] leading-none">View All</div>
            <div className="w-4 h-4 py-1 justify-center items-center flex" />
          </div>
        </div>
        <div className="px-6 pt-4 pb-2 bg-white rounded-lg shadow flex-col justify-start items-start gap-3 flex">
          <div className="w-72 border-b justify-start items-start gap-5 inline-flex">
            <div className="p-2 border-b-2 border-teal-600 flex-col justify-start items-start gap-2 inline-flex">
              <div className="text-teal-600 text-base font-bold font-['Inter'] capitalize leading-normal">All</div>
            </div>
            <div className="p-2 border-b-2 flex-col justify-start items-start gap-2 inline-flex">
              <div className="text-neutral-600 text-base font-bold font-['Inter'] capitalize leading-normal">Revenue</div>
            </div>
            <div className="p-2 border-b-2 flex-col justify-start items-start gap-2 inline-flex">
              <div className="text-neutral-600 text-base font-bold font-['Inter'] capitalize leading-normal">Expenses</div>
            </div>
          </div>
          <div className="flex-col justify-start items-start flex">
            <div className="py-4 justify-start items-center gap-4 inline-flex">
              <div className="justify-start items-center gap-4 flex">
                <div className="p-2 bg-neutral-300 bg-opacity-25 rounded-lg justify-start items-start gap-2 flex">
                  <div className="w-6 h-6 px-1 py-0.5 justify-center items-center flex" />
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <div className="w-32 text-zinc-900 text-base font-semibold font-['Inter'] leading-normal">Keyboard</div>
                  <div className="text-neutral-400 text-xs font-normal font-['Inter'] leading-none">Gadget & Gear</div>
                </div>
              </div>
              <div className="flex-col justify-center items-end inline-flex">
                <div className="text-right text-neutral-600 text-base font-semibold font-['Inter'] leading-normal">$22.00</div>
                <div className="text-neutral-400 text-xs font-normal font-['Inter'] leading-none">17 May 2023</div>
              </div>
            </div>
            <div className="py-4 justify-start border-t  items-center gap-4 inline-flex">
              <div className="justify-start items-center gap-4 flex">
                <div className="p-2 bg-neutral-300 bg-opacity-25 rounded-lg justify-start items-start gap-2 flex">
                  <div className="w-6 h-6 px-1 py-0.5 justify-center items-center flex" />
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <div className="w-32 text-zinc-900 text-base font-semibold font-['Inter'] leading-normal">Mouse</div>
                  <div className="text-neutral-400 text-xs font-normal font-['Inter'] leading-none">Logitech</div>
                </div>
              </div>
              <div className="flex-col justify-center items-end inline-flex">
                <div className="text-right text-neutral-600 text-base font-semibold font-['Inter'] leading-normal">$15.00</div>
                <div className="text-neutral-400 text-xs font-normal font-['Inter'] leading-none">17 May 2023</div>
              </div>
            </div>
            <div className="py-1 justify-start border-t  items-center gap-4 inline-flex">
              <div className="justify-start items-center gap-4 flex">
                <div className="p-2 bg-neutral-300 bg-opacity-25 rounded-lg justify-start items-start gap-2 flex">
                  <div className="w-6 h-6 px-1 py-0.5 justify-center items-center flex" />
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <div className="w-32 text-zinc-900 text-base font-semibold font-['Inter'] leading-normal">Headphones</div>
                  <div className="text-neutral-400 text-xs font-normal font-['Inter'] leading-none">Sony</div>
                </div>
              </div>
              <div className="flex-col justify-center items-end inline-flex">
                <div className="text-right text-neutral-600 text-base font-semibold font-['Inter'] leading-normal">$30.00</div>
                <div className="text-neutral-400 text-xs font-normal font-['Inter'] leading-none">17 May 2023</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsC;
