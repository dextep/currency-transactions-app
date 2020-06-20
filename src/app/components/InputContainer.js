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
                    placeholder="Amount of EUR"
                    value={this.props.value}
                    onChange={ e => this.props.setInputValue(parseFloat(e.target.value)) }
                />
                <button
                    onClick={this.props.id === -1 ? this.addTransaction : this.updateTransaction}>
                    {this.props.id === -1 ? "Add Transaction" : "Update Transaction"}
                </button>
                {this.props.id !== -1 &&
                    <>
                        <button
                            onClick={this.removeTransaction}>
                            Remove Transaction
                        </button>
                        <button
                            onClick={this.props.resetInputs}>
                            Cancel
                        </button>
                    </>
                }
            </div>
        )
    }


    addTransaction = () => {
        if(this.props.title && this.props.value ) {
            this.props.addTransaction(this.props.title, this.props.value)
            this.props.resetInputs()
        }else{
            alert("Fill required fields")
        }
    }

    updateTransaction = () => {
        if(this.props.title && this.props.value ) {
            this.props.updateTransaction(this.props.id, this.props.title, this.props.value)
            this.props.resetInputs()
        }else{
            alert("Fill required fields")
        }
    }

    removeTransaction = () => {
        this.props.removeTransaction(this.props.id)
        this.props.resetInputs()
    }
}

const mapStateToProps = state => {
    return {
        id: state.inputs.id,
        title: state.inputs.title,
        value: state.inputs.value,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTransaction: (title, value) => dispatch(transactionActions.addTransaction({title, value})),
        updateTransaction: (id, title, value) => dispatch(transactionActions.updateTransaction(id, {title, value})),
        removeTransaction: (id) => dispatch(transactionActions.removeTransaction(id)),

        setInputTitle: (title) => dispatch(inputTypes.setInputTitle(title)),
        setInputValue: (value) => dispatch(inputTypes.setInputValue(value)),
        resetInputs: () => dispatch(inputTypes.resetInputs())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InputContainer)
