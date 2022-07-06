import './App.css';
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title : 'Toilet paper',
      amount : 56.67,
      date: new Date(2021, 7, 5),
    },
    {
      id: 'e2',
      title : 'Car Insurance',
      amount : 294.67,
      date: new Date(2021, 2, 28),
    }
  ]
  return (
      <div>
        <h2>Let's get started</h2>
        <Expenses items = {expenses} />
      </div>
  );
}

export default App;
