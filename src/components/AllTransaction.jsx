import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchexpensesAsync } from '../redux/slices/expenseSlice/expenseThunk';
import { MdOutlineHouse } from 'react-icons/md';

const AllTransactions = () => {
  const dispatch = useDispatch();
  const { expenses, loading, error } = useSelector((state) => state.expenses);

  useEffect(() => {
    dispatch(fetchexpensesAsync());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col justify-center h-full relative">
      {/* Additional Layout */}
      <div className="w-full flex justify-between px-4 py-2">
        {expenses.map((expense) => (
          <div key={expense.id} className="w-1/4 mx-4 rounded-md shadow-md bg-white p-2 flex items-center">
            <div className="w-12 h-12 shadow-md bg-teal-800 rounded-full flex items-center justify-center">
              <MdOutlineHouse className='h-8 w-8 text-gray-100' />
            </div>
            <div className="ml-2">
              <div className="text-teal-800 text-lg font-bold">{expense.category}</div>
              <div className="text-gray-500 text-sm">{expense.description}</div>
              <div className="text-gray-800 text-base font-semibold">${expense.amount}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTransactions;
