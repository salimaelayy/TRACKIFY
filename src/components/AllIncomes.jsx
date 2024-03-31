import React from 'react';
import { MdOutlineHouse } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { ImConnection } from "react-icons/im";
import { MdOutlineAdd } from "react-icons/md";
import { Link } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";

const AllIncomes = () => {
  return (
    <div className="flex flex-col justify-center h-full relative">
      {/* Additional Layout */}
      <div className="w-full flex justify-between px-4 py-2 bg-gray-200">
        <div className="w-1/4 mx-4 rounded-md shadow-md bg-white p-2 flex items-center">
          <div className="w-12 h-12 shadow-md bg-teal-800 rounded-full flex items-center justify-center">
            <MdOutlineHouse className='h-8 w-8 text-gray-100' />
          </div>
          <div className="ml-2">
            <div className="text-teal-800 text-lg font-bold">Rent</div>
            <div className="text-gray-500 text-sm">Housing</div>
            <div className="text-gray-800 text-base font-semibold">$50,000</div>
          </div>
        </div>

        <div className="w-1/4 mx-4 rounded-md shadow-md bg-white p-2 flex items-center">
          <div className="w-12 h-12 shadow-md bg-teal-800 rounded-full flex items-center justify-center">
            <MdOutlineHouse className='h-8 w-8 text-gray-100' />
          </div>
          <div className="ml-2">
            <div className="text-teal-800 text-lg font-bold">Rent</div>
            <div className="text-gray-500 text-sm">Housing</div>
            <div className="text-gray-800 text-base font-semibold">$50,000</div>
          </div>
        </div>

        <div className="w-1/4 mx-4 rounded-md shadow-md bg-white p-2 flex items-center">
          <div className="w-12 h-12 shadow-md bg-teal-800 rounded-full flex items-center justify-center">
            <MdOutlineHouse className='h-8 w-8 text-gray-100' />
          </div>
          <div className="ml-2">
            <div className="text-teal-800 text-lg font-bold">Rent</div>
            <div className="text-gray-500 text-sm">Housing</div>
            <div className="text-gray-800 text-base font-semibold">$50,000</div>
          </div>
        </div>

        <div className="w-1/4 mx-4 rounded-md shadow-md bg-white p-2 flex items-center">
          <div className="w-12 h-12 shadow-md bg-teal-800 rounded-full flex items-center justify-center">
            <MdOutlineHouse className='h-8 w-8 text-gray-100' />
          </div>
          <div className="ml-2">
            <div className="text-teal-800 text-lg font-bold">Rent</div>
            <div className="text-gray-500 text-sm">Housing</div>
            <div className="text-gray-800 text-base font-semibold">$50,000</div>
          </div>
        </div>
      </div>

      <div className="w-full rounded-md max-w-5xl mx-auto bg-white shadow-lg border border-zinc-100 mt-4">
        <header className="px-5 py-4 border-b border-zinc-100">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-zinc-900">Incomes</h2>
            <button className="px-4 py-1 rounded-md bg-orange-300 text-white hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
              <MdOutlineAdd />
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="text-xs font-semibold uppercase text-teal-800 ">
                <tr>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Income</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Category</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Date</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Amount</div>
                  </th>
                  
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Edit</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-zinc-100">
                <tr>
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 shadow-md bg-teal-800 rounded-full flex items-center justify-center">
                        <MdOutlineHouse className='h-6 w-6  text-gray-100' />
                      </div>
                      <div className="font-medium text-zinc-900 ml-2">Salary</div>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">Income</td>
                  <td className="p-2 whitespace-nowrap">2024-03-27</td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-center font-medium text-green-500">$3,500.00</div>
                  </td>
                  <td className="p-2 whitespace-nowrap flex items-center justify-center">
                    <Link to=" ">
                      <CiEdit className='w-6 h-6 text-teal-800'/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 shadow-md bg-teal-800 rounded-full flex items-center justify-center">
                        <FaShoppingCart className='h-6 w-6  text-gray-100' />
                      </div>
                      <div className="font-medium text-zinc-900  ml-2">Freelance Work</div>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">Income</td>
                  <td className="p-2 whitespace-nowrap">2024-03-28</td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-center font-medium text-green-500">$500.00</div>
                  </td>
                  <td className="p-2 whitespace-nowrap flex items-center justify-center">
                    <Link to=" ">
                      <CiEdit className='w-6 h-6 text-teal-800'/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 shadow-md bg-teal-800 rounded-full flex items-center justify-center">
                        <ImConnection className='h-6 w-6  text-gray-100' />
                      </div>
                      <div className="font-medium text-zinc-900 ml-2">Investment</div>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">Income</td>
                  <td className="p-2 whitespace-nowrap">2024-03-29</td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-center font-medium text-green-500">$200.00</div>
                  </td>
                  <td className="p-2 whitespace-nowrap flex items-center justify-center">
                    <Link to=" ">
                      <CiEdit className='w-6 h-6 text-teal-800'/>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <button className="px-2 py-1 mr-1 rounded-md border shadow border-teal-800 text-teal-800 text-xs hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
          &lt;
        </button>
        <button className="px-1 py-1 mx-1 rounded-md bg-teal-800 text-white text-xs hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
          1
        </button>
        <button className="px-1 py-1 mx-1 rounded-md bg-gray-200 text-gray-800 text-xs hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
          2
        </button>
        <button className="px-1 py-1 mx-1 rounded-md bg-gray-200 text-gray-800 text-xs hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
          3
        </button>
        <button className="px-1 py-1 mx-1 rounded-md bg-gray-200 text-gray-800 text-xs hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
          4
        </button>
        <button className="px-1 py-1 mx-1 rounded-md bg-gray-200 text-gray-800 text-xs hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
          5
        </button>
        <button className="px-2 py-1 ml-1 rounded-md border shadow border-teal-800 text-teal-800  text-xs hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default AllIncomes;
