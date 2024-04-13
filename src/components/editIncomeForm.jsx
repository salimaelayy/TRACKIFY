import React, { useState, useEffect } from 'react';
import { MdOutlineAdd, MdOutlineClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { editIncomeAsync, getIncomesAsync } from '../redux/slices/incomeSlice/incomeThunk';

const EditIncomeForm = ({ incomeId, onClose }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const income = useSelector((state) => state.incomes?.income);

  useEffect(() => {
    if (income){
        console.log('Current Income:', income);
      dispatch(getIncomesAsync({ id: incomeId }))
        .then((response) => {
          const fetchedIncome = response.payload;
          setAmount(fetchedIncome.amount);
          setCategory(fetchedIncome.category || '');
          setDescription(fetchedIncome.description);
          setDate(fetchedIncome.date?.split('T')[0] ?? '');
        })
        .catch((error) => {
          console.error('Failed to fetch income:', error);
        });
    }
  }, [dispatch, incomeId, income]);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category) {
      alert('Please select a category');
      return;
    }
    const incomeData = { amount, date, description, categoryId: category };
    try {
      dispatch(editIncomeAsync({ id: incomeId, ...incomeData }));
      onClose();
    } catch (error) {
      console.error('Failed to edit income:', error);
    }
  };

  return (
    <div className="w-5/12 rounded-md max-w-5xl mx-auto bg-white shadow-lg border border-zinc-100 mt-4 p-4">
      <button className="float-right text-3xl block text-secondary" onClick={onClose}>
        <MdOutlineClose />
      </button>
      <form onSubmit={handleSubmit}>
        <div className="mt-4 text-sm text-teal-800 font-light text-center">Edit Income</div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
            Amount Received
          </label>
          <input
            id="amount"
            type="number"
            inputMode="numeric"
            step="0.01"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            placeholder="Enter amount"
            value={amount ?? ''}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
            <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    >
                    <option value="">Select Category</option>
                    <option value="660c02f2ae0c2fcb1121ba28">Salary</option>
                    <option value="660c02f2ae0c2fcb1121ba29">Freelance Work</option>
                    <option value="660c02f2ae0c2fcb1121ba30">Investment</option>
                    </select>
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="bg-teal-800 w-full text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
        >
          <MdOutlineAdd className="inline-block mr-2" /> Save Income
        </button>
      </form>
    </div>
  );
};

export default EditIncomeForm;
