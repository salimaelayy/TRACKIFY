import React, { useState } from 'react';
import { MdOutlineAdd, MdOutlineClose, MdOutlineRemove } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { addexpenseAsync } from '../redux/slices/expenseSlice/expenseThunk';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddExpenseForm = ({ onClose })=> {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [account, setAccount] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if category is selected
    if (!category) {
      alert('Please select a category');
      return;
    }
    // Add categoryId to the expense object
    const expenseData = { amount, date, description, categoryId: category, account };
    try {
      dispatch(addexpenseAsync(expenseData));
      setAmount('');
      setCategory('');
      setAccount('');
      setDescription('');
      setDate('');
      onClose();
      toast.success('Expense added successfully!');
    } catch (error) {
      console.error('Failed to add expense:', error);
      toast.error('Failed to add expense');
    }
  };
  return (
    <div className="w-5/12 rounded-md max-w-5xl mx-auto bg-white shadow-lg border border-zinc-100 mt-4 p-4">
      <button className='float-right text-3xl block text-secondary' onClick={onClose}><MdOutlineClose/></button>
      <form onSubmit={handleSubmit}>
      <div className="mt-4 text-sm text-teal-800 font-light text-center">New Transaction</div>
            <div className="flex items-center justify-center mb-4">
                <div className="font-bold flex items-center">
                    <span className="text-4xl font-bold ml-1">{amount || "0"}</span>
                    <span className="text-xl font-normal ml-1">MAD</span>
                </div>
            </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount Spent</label>
          <input
            id="amount"
            type="number"
            inputMode="numeric"
            step="0.01"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" 
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
            <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm">
              <option value="">Select Category</option>
              <option value="660c02f2ae0c2fcb1121ba28" >Housing</option>
              <option value="660c02f2ae0c2fcb1121ba28">Food</option>
              <option value="660c02f2ae0c2fcb1121ba28">Utilities</option>
            </select>
        </div>
        
        <div className="mb-4">
          <label htmlFor="account" className="block text-sm font-medium text-gray-700">Account</label>
          <select id="account" value={account} onChange={(e) => setAccount(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm">
            <option value="">Select Account</option>
            <option value="savings">Savings</option>
            <option value="checking">Checking</option>
            {/* Add more accounts */}
          </select>
        </div>
       
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
          <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea id="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
        </div>
        <button type="submit" className="bg-teal-800 w-full text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
          <MdOutlineAdd className="inline-block mr-2" /> Save Expense
        </button>
      </form>
    </div>
  );
};

export default AddExpenseForm;
