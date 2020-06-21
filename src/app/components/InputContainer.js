import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { transactionsTypes } from '../transactions/duck/index'
import './InputContainer.css'
import {rateActions} from "../currency/duck";

export default () => {
    const dispatch = useDispatch()

    const {id, value: transactionValue, title: transactionTitle} =
        useSelector( (state) => state.transactions.transactions.find(transaction =>
            transaction.id === state.transactions.selectedId
        )) || { value: "", title: ""}

    const currencyPLN = useSelector((state) => state.currency.rates
        .find((rate) => rate.name === "PLN")
        .value)

    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");

     useEffect(() => {
         setTitle(transactionTitle);
         setValue(transactionValue);
     },[id,transactionValue,transactionTitle])

    const addTransaction = () => {
        if(title && value ) {
            dispatch(transactionsTypes.addTransaction({title, value}))
            setTitle("")
            setValue("")
        }
    }
    const updateTransaction = () => {
        if(title && value ) {
            dispatch(transactionsTypes.updateTransaction({id, title, value}))
            resetTransaction()
        }
    }
    const resetTransaction = () => {
        dispatch(transactionsTypes.setSelectedTransaction({id: -1}))
        setTitle("")
        setValue("")
    }

    const updateCurrency = (payload) => dispatch(rateActions.update({name:"PLN", value:payload}))

    return (
        <div className={"inputs-container"}>
            <div className={"inputs-box"}>
                <div>
                    <h3 className={"heading-primary"}>Set Exchange Rate</h3>
                    <input
                        style={{width: "100px", display: 'block'}}
                        min={0.001}
                        max={100}
                        step={0.001}
                        type={"number"}
                        onChange={ e => updateCurrency(e.target.value) } value={currencyPLN}/>
                </div>
                <h3 className={"heading-primary"} style={{paddingTop: '20px'}}>Add Transaction</h3>
                <div>
                    <input
                        style={{textAlign: 'left', width: '250px'}}
                        type="text"
                        placeholder="Transaction Name"
                        value={title}
                        onChange={e =>
                            setTitle(e.target.value)
                        }
                    />
                    <input
                        style={{marginLeft: '20px', textAlign: 'center', width: '190px'}}
                        type="number"
                        placeholder="Amount of EUR"
                        min={0} step={0.1}
                        value={value}
                        onChange={e =>
                            setValue(parseFloat(e.target.value) || '')
                        }
                    />
                </div>
                <div style={{paddingTop: '30px', overflow:'hidden'}}>
                    { id &&
                        <button className={'first-button'}
                            style={{float: 'left'}}
                            onClick={resetTransaction}>
                            Cancel
                        </button>
                    }
                    <button
                        className={'first-button'}
                        style={{float: 'right'}}
                        onClick={id ? updateTransaction : addTransaction }>
                        {id ? "Save" : "Add"}
                    </button>

                </div>
            </div>
        </div>
    )



}
