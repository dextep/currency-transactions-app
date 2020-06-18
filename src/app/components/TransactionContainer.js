import React, { Component } from 'react';
import { connect } from 'react-redux';

class TransactionContainer extends Component {

    render () {
        return (
            <div>
                {transactionList(this.props.transactions.transactions)}
            </div>
        )
    }
}


const transactionList = transactions => (
    <ul>
        {transactions.map( (transaction, i) =>
            <li key={i}>
                {transaction.title} {transaction.value}
            </li>
        )}
    </ul>
)

const mapStateToProps = state => {
    return {
        transactions:  state.transactions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TransactionContainer)
