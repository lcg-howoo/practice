import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const addExpenseHandler = expense => {
    const expenseData = {
      ...expense,
      id: Math.random().toString(),
    }
    console.log("expenseData : ", expenseData);
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses]
    });
  }

  return (
      <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expenses}/>
      </div>
  );
}

export default App;
