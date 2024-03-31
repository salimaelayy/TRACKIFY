import React from 'react'
import MonthOverview from "./MonthOverview";
import TransactionsC from './TransactionsC';
import Startistics from './startistics';
import DashboardSearch from './dashboardSearch';
import CardInfo from './cardInfo';
import UpcommingBill from './UpcommingBill';

const OverView = () => {
  return (<>
            <div className="flex items-baseline ">
              <div className="w-1/3 "><CardInfo/></div>
              <div className="w-1/3 "><MonthOverview/></div>
              <div className="w-1/3 "><UpcommingBill/></div>
            </div>
            <div className="flex items-baseline ">
              <div className="w-1/3"><TransactionsC/></div>
              <div className="w-1/2 "><Startistics/></div>
            </div>
        </>
        
  )
}

export default OverView