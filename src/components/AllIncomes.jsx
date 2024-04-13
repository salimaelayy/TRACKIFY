import React, { useEffect, useState } from 'react';
import { MdOutlineAdd, MdOutlineDeleteOutline, MdOutlineEdit, MdOutlineHouse } from "react-icons/md";
import { Link } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { fetchIncomesAsync } from '../redux/slices/incomeSlice/incomeThunk';
import AddIncomeForm from './AddIncomeForm';
import EditIncomeForm from './editIncomeForm'; 

const AllIncomes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const dispatch = useDispatch();
  const { incomes, loading, error } = useSelector((state) => state.incomes);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editIncome, setEditIncome] = useState(null); 

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = incomes.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(fetchIncomesAsync());
  }, []);

  const handleEditIncome = (income) => {
    console.log('Editing income:', income);
    setEditIncome(income);
    setIsFormVisible(true);
  };

  const handleAddIncome = () => {
    setEditIncome(null); 
    setIsFormVisible(true);
  };

  return (
    <div className="flex flex-col justify-center h-full relative">
    <div className="w-full rounded-md max-w-5xl mx-auto bg-white shadow-lg border border-zinc-100 mt-4">
      <div className={`fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50 ${isFormVisible ? 'visible' : 'hidden'}`}>
        {isFormVisible && !editIncome ? <AddIncomeForm onClose={() => setIsFormVisible(false)} /> : null}
        {isFormVisible && editIncome ? <EditIncomeForm incomeId={editIncome._id} onClose={() => setIsFormVisible(false)} /> : null}
      </div>
      <header className="px-5 py-4 border-b border-zinc-100">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-zinc-900">Incomes</h2>
          <button
            onClick={handleAddIncome} 
            className="px-4 py-1 rounded-md bg-accent text-white hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            <MdOutlineAdd />
          </button>
        </div>
      </header>
        <div className="p-3">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="text-xs font-semibold uppercase text-teal-800">
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
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Delete</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-zinc-100">
                {currentItems.map((income) => (
                  <tr key={income._id}>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 shadow-md bg-teal-800 rounded-full flex items-center justify-center">
                          <MdOutlineHouse className='h-6 w-6 text-gray-100' />
                        </div>
                        <div className="font-medium text-zinc-900 ml-2">{income.description}</div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">{income.category}</td>
                    <td className="p-2 whitespace-nowrap">{income.date ? income.date.split('T')[0] : ''}</td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-center font-medium text-secondary">${income.amount}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap flex items-center justify-center">
                      <button onClick={() => handleEditIncome(income)}>
                        <MdOutlineEdit className='w-6 h-6 text-accent' />
                      </button>
                    </td>
                    <td className="p-2 whitespace-nowrap" style={{ textAlign: 'center' }}>
                      <button onClick={() => handleEditExpense(expense)}>
                          <MdOutlineDeleteOutline className='w-6 h-6 text-red-500' />
                      </button>
                  </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <button className="px-2 py-1 mr-1 rounded-md border shadow border-teal-800 text-teal-800 text-xs hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50" onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}>
          &lt;
        </button>
        {Array.from(Array(Math.ceil(incomes.length / itemsPerPage)).keys()).map((pageNumber) => (
          <button
            key={`page-${pageNumber + 1}`}
            className={`px-1 py-1 mx-1 rounded-md bg-teal-800 text-white text-xs hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50${currentPage === pageNumber + 1 ? 'bg-gold' : ''}`}
            onClick={() => handlePageChange(pageNumber + 1)}
          >
            {pageNumber + 1}
          </button>
        ))}
        <button className="px-2 py-1 ml-1 rounded-md border shadow border-teal-800 text-teal-800  text-xs hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50" onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === Math.ceil(incomes.length / itemsPerPage)}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default AllIncomes;
