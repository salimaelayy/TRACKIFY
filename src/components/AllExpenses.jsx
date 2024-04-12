// AllExpenses.jsx
import React, { useEffect, useState } from 'react';
import { MdOutlineHouse } from "react-icons/md";
import { MdOutlineAdd } from "react-icons/md";
import { Link } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import AddExpenseForm from './AddEpenseForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchexpensesAsync } from '../redux/slices/expenseSlice/expenseThunk';
import EditExpenseForm from './editExpenseForm';

const AllExpenses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const dispatch = useDispatch();
  const { expenses, loading, error } = useSelector((state) => state.expenses);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editExpense, setEditExpense] = useState(null); // State to track the expense being edited

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = expenses.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(fetchexpensesAsync());
  }, []);

  const handleEditExpense = (expense) => {
    setEditExpense(expense);
    setIsFormVisible(true);
  };
  



  return (
    
    <div className="flex flex-col justify-center h-full relative">
      <div className="w-full flex justify-between px-4 py-2 ">
        {currentItems.map((expense) => (
          <div key={expense._id} className="w-1/4 mx-4 rounded-md shadow-md bg-white p-2 flex items-center">
            <div className="w-12 h-12 shadow-md bg-teal-800 rounded-full flex items-center justify-center">
              <MdOutlineHouse className='h-8 w-8 text-gray-100' />
            </div>
            <div className="ml-2">
              <div className="text-teal-800 text-lg font-bold">Rent</div>
              <div className="text-gray-500 text-sm">Housing</div>
              <div className="text-gray-800 text-base font-semibold">$50,000</div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full rounded-md max-w-5xl mx-auto bg-white shadow-lg border border-zinc-100 mt-4">
        <div className={`fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50 ${isFormVisible ? 'visible' : 'hidden'}`}>
          {isFormVisible && !editExpense ? <AddExpenseForm onClose={() => setIsFormVisible(false)} /> : null}
          {isFormVisible && editExpense ? <EditExpenseForm expense={editExpense} expenseId={editExpense._id}  onClose={() => setIsFormVisible(false)} /> : null}


        </div>
        
        <header className="px-5 py-4 border-b border-zinc-100">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-zinc-900">Expenses</h2>
            <button
              onClick={() => setIsFormVisible(!isFormVisible)}
              className="px-4 py-1 rounded-md bg-orange-300 text-white hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
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
                    <div className="font-semibold text-left">Expense</div>
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
              {currentItems.map((expense) => (
                <tr key={expense._id}>
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 shadow-md bg-teal-800 rounded-full flex items-center justify-center"><MdOutlineHouse className='h-6 w-6 text-gray-100' /></div>
                      <div className="font-medium text-zinc-900 ml-2">{expense.description}</div>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">{expense.category}</td>
                  <td className="p-2 whitespace-nowrap">{expense.date ? expense.date.split('T')[0] : ''}</td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-center font-medium text-orange-300">${expense.amount}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap flex items-center justify-center">
                    <button onClick={() => handleEditExpense(expense)}>
                      <CiEdit className='w-6 h-6 text-teal-800' />
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
        {Array.from(Array(Math.ceil(expenses.length / itemsPerPage)).keys()).map((pageNumber) => (
            <button
              key={`page-${pageNumber + 1}`}
              className={`px-1 py-1 mx-1 rounded-md bg-teal-800 text-white text-xs hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50${currentPage === pageNumber + 1 ? 'bg-gold' : ''}`}
              onClick={() => handlePageChange(pageNumber + 1)}
            >
              {pageNumber + 1}
            </button>
          ))}
        <button className="px-2 py-1 ml-1 rounded-md border shadow border-teal-800 text-teal-800  text-xs hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50" onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === Math.ceil(expenses.length / itemsPerPage)}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default AllExpenses;
