import React from 'react';
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props) => {
  const resultByFilteredExpenses = () => {
    console.log(props.items);
    if(props.items.length < 1){
      return <p className="expenses-list__fallback">No expenses found.</p>;
    }
    return props.items.map(
        expense =>
            <ExpenseItem key = {expense.id} title = {expense.title} amount = {expense.amount} date = {expense.date} />
    )
  }
  return (
      <ul className='expenses-list'>
        {resultByFilteredExpenses()}
      </ul>
  );
}

export default ExpensesList;
