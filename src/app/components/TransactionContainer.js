import React, { Component } from 'react';
import { connect } from 'react-redux';
import {transactionsTypes} from "../transactions/duck";
import { useSelector, useDispatch } from 'react-redux';
import "./TransactionContainer.css"

export default () => {
    const dispatch = useDispatch()

    const transactions = useSelector((state) => state.transactions.transactions)
    const currency = useSelector((state) =>  state.currency)

    const removeTransaction = (id) => dispatch(transactionsTypes.removeTransaction(id))

    const transactionClicked = (transaction, index) => {
        // setInputId(index)
        // setInputTitle(transaction.title)
        // setInputValue(transaction.value)
    }

    const sumValueOfTransactions = () => {
        let sum = 0
        transactions.map( (transaction, index) =>
            sum += transaction.value
        )
        return sum;
    }

    const maxValueOfTransactions = () => {
        if( transactions.length > 0){
            return  transactions.reduce((a, b) => a.value >= b.value ? a : b, {value: 0});
        }
    }

    const exchange = (value, currencyCode) => {
        const currencyValue = currency.rates
            .find((rate) => rate.name === currencyCode)
            .value
        return Number((currencyValue * value).toFixed(2));
    }

    if(transactions.length === 0) {
        return (
            <div>
                <p>There is no transaction yet. Please add one.</p>
            </div>
        )
    }

    const transactionTable = transactions => (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>EUR</th>
                    <th>PLN</th>
                </tr>
            </thead>
            <tbody>
            {transactions.map( (transaction, index) =>
                <tr key={index}
                    onClick={ () => transactionClicked(transaction,index)}>
                    <td>{index}</td>
                    <td>{transaction.title}</td>
                    <td>{transaction.value}</td>
                    <td>{exchange(transaction.value, "PLN")}</td>
                    <td><button onClick={() => removeTransaction(index)}>DELETE</button></td>
                </tr>
            )}
            </tbody>
        </table>
    )

    const max = maxValueOfTransactions
    return (
        <div>
            {transactionTable(transactions)}
            {sumValueOfTransactions()} EUR /&nbsp;
            {exchange(sumValueOfTransactions(), "PLN")} PLN &nbsp;
            The highest-value transaction:
            {max ? `${max.title} ${max.value}` : `none`}
        </div>
    )

}

// const mapStateToProps = state => {
//     return {
//         transactions:  state.transactions.transactions,
//         currency: state.currency
//     }
// }
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         removeTransaction: (id) => dispatch(transactionsTypes.removeTransaction(id))
//     }
// }
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(TransactionContainer)
