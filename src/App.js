import React, { Component } from 'react'
import './App.css';
import {default as CurrencyContainer} from './app/components/CurrencyContainer'
import {default as TransactionContainer} from "./app/components/TransactionContainer";
import {default as InputContainer} from "./app/components/InputContainer";

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
