import React, { Component } from 'react';
import { connect } from 'react-redux';
import { transactionActions } from '../transactions/duck/index'
import { inputTypes } from '../transactions/inputs/index'


class InputContainer extends Component {
    render () {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Transaction Name"
                    value={this.props.title}
                    onChange={ e => this.props.setInputTitle(e.target.value) }
                />
                <input
                    type="number"
                    value={this.props.value}
                    onChange={ e => this.props.setInputValue(e.target.value) }
                />
                <button onClick={ () => {
                    this.props.addTransaction(this.props)
                }}>Add Transaction</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        transactions: state.transactions,
        title: state.inputs.title,
        value: state.inputs.value,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTransaction: (payload) => dispatch(transactionActions.add({title: payload.title, value: payload.value })),
        setInputTitle: (title) => dispatch(inputTypes.setInputTitle(title)),
        setInputValue: (value) => dispatch(inputTypes.setInputValue(value)),
        resetInputs: () => dispatch(inputTypes.resetInputs())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InputContainer)
