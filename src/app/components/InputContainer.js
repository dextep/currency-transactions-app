import React, { Component } from 'react';
import { connect } from 'react-redux';
import { transactionActions } from '../transactions/duck/index'
import { inputTypes } from '../transactions/inputs/index'


class InputContainer extends Component {

    addTransaction = () => {
        if(this.props.title && this.props.value ) {
            this.props.addTransaction(this.props.title, this.props.value)
            this.props.resetInputs()
        }else{
            alert("Fill required fields")
        }
    }

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
                    placeholder="Amount of EUR"
                    value={this.props.value}
                    onChange={ e => this.props.setInputValue(e.target.value) }
                />
                <button onClick={this.addTransaction}>Add Transaction</button>
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
        addTransaction: (title, value) => dispatch(transactionActions.addTransaction({title: title, value: value})),
        setInputTitle: (title) => dispatch(inputTypes.setInputTitle(title)),
        setInputValue: (value) => dispatch(inputTypes.setInputValue(value)),
        resetInputs: () => dispatch(inputTypes.resetInputs())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InputContainer)
