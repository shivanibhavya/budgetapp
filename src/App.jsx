import React from 'react';
import { GlobalProvider } from './components/GlobalState';
import Header from './components/Header';
import Balance from './components/Balance';
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';
import IncomeExpenses from './components/IncomeExpenses';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <AddTransaction />
        <TransactionList />
      </div>
    </GlobalProvider>
  );
}

export default App;
