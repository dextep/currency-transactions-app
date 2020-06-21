import React, { Component } from 'react'
import './App.css';
import {default as CurrencyContainer} from './app/components/CurrencyContainer'
import {default as TransactionContainer} from "./app/components/TransactionContainer";
import {default as InputContainer} from "./app/components/InputContainer";
import { Provider } from 'react-redux'
import store from './store'

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <CurrencyContainer />
                <InputContainer />
                <TransactionContainer />
            </div>
        </Provider>
    );
}
export default App;
