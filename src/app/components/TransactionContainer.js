import React, { Component } from 'react';
import { connect } from 'react-redux';
import {transactionActions} from "../transactions/duck";

class TransactionContainer extends Component {

    transactionList = transactions => (
        <ul>
            {transactions.map( (transaction, index) =>
                <li key={index}>
                    {transaction.title}&nbsp;&nbsp;&nbsp;
                    {transaction.value} EUR /&nbsp;
                    {this.exchange(transaction.value, "PLN")} PLN
                    <button onClick={ () => this.props.removeTransaction(index)}>DELETE</button>
                </li>
            )}
        </ul>
    )

    sumValueOfTransactions = () => {
        let sum = 0
        this.props.transactions.transactions.map( (transaction, index) =>
            sum += transaction.value
        )
        return sum;
    }

    maxValueOfTransactions = () => {
        return this.props.transactions.transactions.reduce((a, b) => a.value >= b.value ? a : b);
    }

    exchange = (value, currency) => {
        const currencyValue = this.props.currency.rates
            .find((rate) => rate.name === currency)
            .value
        return Number((currencyValue * value).toFixed(2));
    }

    render () {
        const max = this.maxValueOfTransactions()
        return (
            <div>
                {this.transactionList(this.props.transactions.transactions)}
                {this.sumValueOfTransactions()} EUR /&nbsp;
                {this.exchange(this.sumValueOfTransactions(), "PLN")} PLN &nbsp;
                The highest-value transaction: {max.title} {max.value}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        transactions:  state.transactions,
        currency: state.currency
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeTransaction: (id) => dispatch(transactionActions.removeTransaction(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TransactionContainer)
