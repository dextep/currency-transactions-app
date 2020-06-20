import React, { Component } from 'react'
import './App.css';
import CurrencyContainer from './app/components/CurrencyContainer'
import TransactionContainer from "./app/components/TransactionContainer";
import InputContainer from "./app/components/InputContainer";

class App extends Component {
  render() {
    return (
        <div className="App">
            <CurrencyContainer />
            <InputContainer />
            <TransactionContainer />
        </div>
    );
  }
}
export default App;
