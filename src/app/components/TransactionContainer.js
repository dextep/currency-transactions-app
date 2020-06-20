import React, { Component } from 'react';
import { connect } from 'react-redux';
import {transactionActions} from "../transactions/duck";
import {inputTypes} from "../transactions/inputs";

class TransactionContainer extends Component {

    transactionList = transactions => (
        <ul>
            {transactions.map( (transaction, index) =>
                <li key={index}
                    role={"button"}
                    onClick={ () => this.transactionClicked(transaction,index)}>
                        {transaction.title}&nbsp;&nbsp;&nbsp;
                        {transaction.value} EUR /&nbsp;
                        {this.exchange(transaction.value, "PLN")} PLN
                </li>
            )}
        </ul>
    )

    transactionClicked = (transaction, index) => {
        this.props.setInputId(index)
        this.props.setInputTitle(transaction.title)
        this.props.setInputValue(transaction.value)
    }

    sumValueOfTransactions = () => {
        let sum = 0
        this.props.transactions.map( (transaction, index) =>
            sum += transaction.value
        )
        return sum;
    }

    maxValueOfTransactions = () => {
        if(this.props.transactions.length > 0)
        return this.props.transactions.reduce((a, b) => a.value >= b.value ? a : b);
    }

    exchange = (value, currency) => {
        const currencyValue = this.props.currency.rates
            .find((rate) => rate.name === currency)
            .value
        return Number((currencyValue * value).toFixed(2));
    }

    render () {

        if(this.props.transactions.length === 0) {
            return (
                <div>
                    <p>There is no transaction yet. Please add one.</p>
                </div>
            )
        }

        const max = this.maxValueOfTransactions()
        return (
            <div>
                {this.transactionList(this.props.transactions)}
                {this.sumValueOfTransactions()} EUR /&nbsp;
                {this.exchange(this.sumValueOfTransactions(), "PLN")} PLN &nbsp;
                The highest-value transaction:
                {max ? `${max.title} ${max.value}` : `none`}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        transactions:  state.transactions.transactions,
        currency: state.currency
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeTransaction: (id) => dispatch(transactionActions.removeTransaction(id)),

        setInputId: (id) => dispatch(inputTypes.setInputId(id)),
        setInputTitle: (title) => dispatch(inputTypes.setInputTitle(title)),
        setInputValue: (value) => dispatch(inputTypes.setInputValue(value))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TransactionContainer)
