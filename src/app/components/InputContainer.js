import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { transactionsTypes } from '../transactions/duck/index'
import './InputContainer.css'

export default () => {
    const dispatch = useDispatch()

    const {id, value: transactionValue, title: transactionTitle} =
        useSelector( (state) => state.transactions.transactions.find(transaction =>
            transaction.id === state.transactions.selectedId
        )) || { value: "", title: ""}

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

    return (
        <div className={"inputs-container"}>
            <div className={"inputs-box"}>
                <h3>Transaction insert:</h3>
                <input
                    type="text"
                    placeholder="Transaction Name"
                    value={title}
                    onChange={e =>
                        setTitle(e.target.value)
                    }
                />
                <input
                    type="number"
                    placeholder="Amount of EUR"
                    min={0} step={0.1}
                    value={value}
                    onChange={e =>
                        {
                            // if(Number.isNaN(e.target.value)){
                            // }

                            setValue(parseFloat(e.target.value) || '')
                        }
                    }
                />
                <button
                    onClick={id ? updateTransaction : addTransaction }>
                    {id ? "Save" : "Add Transaction"}
                </button>
                { id &&
                    <button
                        onClick={resetTransaction}
                        >
                        Cancel
                    </button>
                }
            </div>
        </div>
    )



}
