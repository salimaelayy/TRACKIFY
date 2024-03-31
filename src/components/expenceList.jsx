// ExpenseList.js
import React from 'react';
import ExpenseItem from '../components/Expense_Item';

const ExpenseList = ({ expenses }) => {
    
    return (
        <div>
        <h2>Expense List</h2>
        <div>
  <div className="gap-[8px] w-full flex relative max-w-[352px] box-border items-start flex-col justify-start">
    <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-left mb-0">
      <p className="text-[#878787] text-[22px] not-italic mt-0 text-left font-['Inter',_sans-serif] font-normal leading-[32px] mb-0 tracking-[0px] normal-case">Total Balance</p>
    </div>
    <div className="gap-[20px] w-full flex px-[24px] py-[20px] relative max-w-[352px] [box-shadow:0px_20px_25px_0px_rgba(76,103,100,0.1)] box-border items-start rounded-tl-[8px] rounded-br-[8px] rounded-tr-[8px] rounded-bl-[8px] flex-col justify-start bg-[#ffffff]">
      <div className="gap-[12px] w-full flex relative max-w-[304px] box-border items-start flex-col justify-start">
        <div className="gap-[68px] w-full flex pl-0 pr-0 py-0 relative max-w-[304px] box-border items-center [border-bottom:1px_solid_#f3f3f3] justify-between">
          <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-left mb-0">
            <p className="text-[#191919] text-[22px] not-italic mt-0 text-left font-['Inter',_sans-serif] font-extrabold leading-[32px] mb-0 tracking-[0px] normal-case">$240,399</p>
          </div>
          <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-right mb-0">
            <p className="text-[#525256] text-[14px] not-italic mt-0 text-right font-['Inter',_sans-serif] font-medium leading-[20px] mb-0 tracking-[0px] normal-case">All Accounts</p>
          </div>
        </div>
        <div className="gap-[8px] w-full flex p-[16px] relative max-w-[304px] box-border items-center rounded-tl-[4px] rounded-br-[4px] rounded-tr-[4px] rounded-bl-[4px] justify-between bg-[#299d91]">
          <div className="w-full flex relative max-w-[136px] box-border items-start flex-col justify-start">
            <div className="w-full max-w-[120px] mt-0 min-h-[auto] text-left mb-0">
              <p className="text-[#ffffff] text-[14px] not-italic mt-0 text-left font-['Inter',_sans-serif] font-medium leading-[20px] mb-0 tracking-[0px] normal-case">Account type</p>
            </div>
            <div className="w-full max-w-[120px] mt-0 min-h-[auto] text-left mb-0">
              <p className="text-[#ffffff] text-[16px] not-italic mt-0 text-left font-['Inter',_sans-serif] font-bold leading-[24px] mb-0 tracking-[0px] normal-case">Credit Card</p>
            </div>
            <div className="w-full max-w-[136px] mt-0 min-h-[auto] text-left mb-0">
              <p className="text-[#ffffff] text-[14px] not-italic mt-0 text-left font-['Inter',_sans-serif] font-medium leading-[20px] mb-0 tracking-[0px] normal-case">**** **** **** 2598</p>
            </div>
          </div>
          <div className="gap-[12px] w-full flex relative max-w-[128px] box-border items-end flex-col justify-center">
            <div className="gap-[8px] w-full flex relative max-w-[48px] box-border items-center justify-center">
              <div className="w-full overflow-hidden max-w-[48px] box-border items-start flex-col justify-start">
                <img
                  src="./assets/I40859864085989.png"
                  alt="rectangle"
                  width="43"
                  height="24"
                  className="w-full h-auto m-0 block max-w-[43px]"
                  />
              </div>
            </div>
            <div className="gap-[12px] w-full flex relative max-w-[128px] box-border items-center justify-start">
              <div className="w-full max-w-[92px] mt-0 min-h-[auto] text-right mb-0">
                <p className="text-[#ffffff] text-[16px] not-italic mt-0 text-right font-['Inter',_sans-serif] font-bold leading-[24px] mb-0 tracking-[0px] normal-case">$25000</p>
              </div>
              <div className="gap-[8px] w-full flex p-[4px] relative max-w-[24px] box-border items-start rounded-tl-[20px] rounded-br-[20px] rounded-tr-[20px] rounded-bl-[20px] justify-start bg-[#ffffff]">
                <img
                  src="./assets/I405547918422.svg"
                  alt="instance"
                  width="16"
                  height="16"
                  className="w-full overflow-hidden max-w-[16px] box-border items-start flex-col justify-start"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gap-[48px] w-full flex relative max-w-[304px] box-border items-center justify-between">
        <div className="gap-[4px] w-full flex relative max-w-[80px] box-border items-center justify-start">
          <img
            src="./assets/4055482.svg"
            alt="instance"
            width="16"
            height="16"
            className="w-full overflow-hidden max-w-[16px] transform rotate-[180.00deg] box-border items-start flex-col justify-start"
            />
          <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-left mb-0">
            <p className="text-[#d1d1d1] text-[14px] not-italic mt-0 text-left font-['Inter',_sans-serif] font-medium leading-[20px] mb-0 tracking-[0px] normal-case">Previous</p>
          </div>
        </div>
        <div className="gap-[8px] w-full flex relative max-w-[40px] box-border items-start justify-start">
        <img
            src="./assets/4055485.svg"
            alt="ellipse"
            width="8"
            height="8"
            className="w-full h-auto m-0 block max-w-[8px] rounded-[100%]"
            />
          <img
            src="./assets/4055486.svg"
            alt="ellipse"
            width="8"
            height="8"
            className="w-full h-auto m-0 block max-w-[8px] rounded-[100%]"
            />
          <img
            src="./assets/4055487.svg"
            alt="ellipse"
            width="8"
            height="8"
            className="w-full h-auto m-0 block max-w-[8px] rounded-[100%]"
            />
        </div>
        <div className="gap-[4px] w-full flex relative max-w-[80px] box-border items-center justify-end">
          <div className="w-full max-w-[auto] mt-0 min-h-[auto] text-left mb-0">
            <p className="text-[#191919] text-[14px] not-italic mt-0 text-left font-['Inter',_sans-serif] font-medium leading-[20px] mb-0 tracking-[0px] normal-case">Next</p>
          </div>
          <img
            src="./assets/4055490.svg"
            alt="instance"
            width="16"
            height="16"
            className="w-full overflow-hidden max-w-[16px] box-border items-start flex-col justify-start"
            />
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
    );
};

export default ExpenseList;

