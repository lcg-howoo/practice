import React, {useState} from 'react';
import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] =  useState('2020');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(item => item.date.getFullYear().toString() === filteredYear);

  return (
      <div>
        <Card className='expenses'>
          <ExpenseFilter onChangeFilter={filterChangeHandler} selectedYear = {filteredYear}/>
          {/*{filteredExpenses.length < 1 ?*/}
          {/*    <p>No expenses found.</p> : filteredExpenses.map(*/}
          {/*    expense =>*/}
          {/*        <ExpenseItem key={expense.id} title = {expense.title} amount = {expense.amount} date = {expense.date} />*/}
          {/*)}*/}
          {/*{filteredExpenses.length < 1 && <p>No expenses found.</p>}*/}
          {/*{filteredExpenses.length > 0 && filteredExpenses.map(*/}
          {/*    expense =>*/}
          {/*        <ExpenseItem key={expense.id} title = {expense.title} amount = {expense.amount} date = {expense.date} />*/}
          {/*)}*/}
          <ExpensesList items={filteredExpenses} />
        </Card>
      </div>
  );
}

export default Expenses;
