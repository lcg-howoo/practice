import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isClickedAddExpenseButton, setIsClickedAddExpenseButton] = useState(false);
  const conditionalRenderComponent = () => {
    if (isClickedAddExpenseButton) {
      return <ExpenseForm onSaveExpenseData={props.onAddExpense} onBackToAddButtonComponent = {cancelShowAddNewForm}/>;
    }
    return <button onClick={showAddNewForm}>Add New Expense</button>;
  }

  const showAddNewForm = () => {
    setIsClickedAddExpenseButton(true);
  }

  const cancelShowAddNewForm = () => {
    setIsClickedAddExpenseButton(false);
  }

  return (
      <div className='new-expense'>
        {conditionalRenderComponent()}
      </div>
  );
}

export default NewExpense;
