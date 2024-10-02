import logo from './logo.svg';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>Budget tracker</h1>
      <ExpenseForm/>
      <ExpenseList/>
    
    </div>
    
  );
}

export default App;
