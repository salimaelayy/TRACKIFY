// ExpenseItem.js
import React from 'react';

const ExpenseItem = ({ expense }) => {
    return (
        <li>
            <div>{expense.name}</div>
            <div>{expense.amount}</div>
        </li>
    );
};

export default ExpenseItem;