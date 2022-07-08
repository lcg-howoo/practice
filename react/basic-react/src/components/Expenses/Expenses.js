import React, {useState} from 'react';
import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] =  useState('2020');
  console.log(props.items)
  const filterChangeHandler = selectedYear => {
    console.log("Expenses.js : ", selectedYear)
    setFilteredYear(selectedYear);
  }

  return (
      <div>
        <Card className='expenses'>
          <ExpenseFilter onChangeFilter={filterChangeHandler} selectedYear = {filteredYear}/>
          {props.items.map(expense => <ExpenseItem title = {expense.title} amount = {expense.amount} date = {expense.date} />)}
        </Card>
      </div>
  );
}

export default Expenses;
