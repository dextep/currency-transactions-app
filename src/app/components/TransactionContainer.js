import React  from 'react';
import {transactionsTypes} from "../transactions/duck";
import { useSelector, useDispatch } from 'react-redux';
import "./TransactionContainer.css"

export default () => {

    const dispatch = useDispatch()
    const transactions = useSelector((state) => state.transactions.transactions)
    const currency = useSelector((state) =>  state.currency)

    const removeTransaction = (id) => dispatch(transactionsTypes.removeTransaction(id))
    const transactionClicked = (id) => dispatch(transactionsTypes.setSelectedTransaction({id}))

    const sumValueOfTransactions = () => {
        let sum = 0
        transactions.map( (transaction) =>
                sum += transaction.value
        )
        return sum;
    }

    const highestValueOfTransactions = () => {
        if( transactions.length > 0){
            return transactions.reduce((a, b) => a.value >= b.value ? a : b, {value: 0});
        }
    }

    const exchange = (value, currencyCode) => {
        const currencyValue = currency.rates
            .find((rate) => rate.name === currencyCode)
            .value
        return Number((currencyValue * value).toFixed(2));
    }

    const transactionTable = transactions => (
        <table className={"transaction-table"}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>EUR</th>
                    <th>PLN</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {transactions.map( (transaction, index) =>
                <tr key={index}>
                    <td>{index}</td>
                    <td>{transaction.title}</td>
                    <td>{transaction.value.toFixed(2)}</td>
                    <td>{exchange(transaction.value, "PLN")}</td>
                    <td><button onClick={() => transactionClicked(transaction.id)}>EDIT</button></td>
                    <td><button onClick={() => removeTransaction(transaction.id)}>DELETE</button></td>
                </tr>
            )}
            </tbody>
        </table>
    )

    if(transactions.length === 0) {
        return (
            <div className={"transactions-container"}>
                <p>There is no transaction yet. Please add one.</p>
            </div>
        )
    }

    const highestTransaction = highestValueOfTransactions()
    return (
        <div className={"transactions-container"}>
            <div className={"transaction-table-container"}>
                {transactionTable(transactions)}
            </div>
            <div className={"transaction-info-container"}>
                <div style={{paddingTop: "1rem"}}>
                    <p>The sum of all transactions:</p>
                    <b>{sumValueOfTransactions().toFixed(2)} EUR /&nbsp; {exchange(sumValueOfTransactions(), "PLN")} PLN &nbsp;</b>
                </div>
                <div style={{paddingTop: "1rem"}}>
                    <p>The highest-value transaction:</p>
                    {
                        highestTransaction ?
                            <b>
                                <p>{highestTransaction.title}</p>
                                <p>
                                    {highestTransaction.value.toFixed(2)} EUR /&nbsp;
                                    {exchange(highestTransaction.value, "PLN")} PLN&nbsp;
                                </p>
                            </b>
                            : `none`
                    }
                </div>
            </div>
        </div>
    )
}
