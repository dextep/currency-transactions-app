import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { transactionsTypes } from '../transactions/duck/index'
import { inputTypes } from '../transactions/inputs/index'

export default () => {
    const dispatch = useDispatch()

    const id = useSelector( (state) => state.inputs.id )
    const title = useSelector( (state) => state.inputs.title )
    const value = useSelector( (state) => state.inputs.value )

    const setInputTitle = (title) => dispatch(inputTypes.setInputTitle(title))
    const setInputValue = (value) => dispatch(inputTypes.setInputValue(value))
    const resetInputs = () => dispatch(inputTypes.resetInputs())

    const addTransaction = (title, value) => dispatch(transactionsTypes.addTransaction({title, value}))
    const updateTransaction = (id, title, value) => dispatch(transactionsTypes.updateTransaction(id, {title, value}))
    const removeTransaction = (id) => dispatch(transactionsTypes.removeTransaction(id))

    return (
        <div>
            <input
                type="text"
                placeholder="Transaction Name"
                value={title}
                onChange={ e => setInputTitle(e.target.value) }
            />
            <input
                type="number"
                placeholder="Amount of EUR"
                value={value}
                onChange={ e => setInputValue(parseFloat(e.target.value)) }
            />
            <button
                onClick={id === -1 ? addTransaction : updateTransaction}>
                {id === -1 ? "Add Transaction" : "Update Transaction"}
            </button>
            {id !== -1 &&
                <>
                    <button
                        onClick={removeTransaction}>
                        Remove Transaction
                    </button>
                    <button
                        onClick={resetInputs}>
                        Cancel
                    </button>
                </>
            }
        </div>
    )



    // addTransaction = () => {
    //     if(this.props.title && this.props.value ) {
    //         this.props.addTransaction(this.props.title, this.props.value)
    //         this.props.resetInputs()
    //     }
    // }
    //
    // updateTransaction = () => {
    //     if(this.props.title && this.props.value ) {
    //         this.props.updateTransaction(this.props.id, this.props.title, this.props.value)
    //         this.props.resetInputs()
    //     }
    // }
    //
    // removeTransaction = () => {
    //     this.props.removeTransaction(this.props.id)
    //     this.props.resetInputs()
    // }
}

// const mapStateToProps = state => {
//     return {
//         id: state.inputs.id,
//         title: state.inputs.title,
//         value: state.inputs.value,
//     }
// }
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         addTransaction: (title, value) => dispatch(transactionsTypes.addTransaction({title, value})),
//         updateTransaction: (id, title, value) => dispatch(transactionsTypes.updateTransaction(id, {title, value})),
//         removeTransaction: (id) => dispatch(transactionsTypes.removeTransaction(id)),
//
//         setInputTitle: (title) => dispatch(inputTypes.setInputTitle(title)),
//         setInputValue: (value) => dispatch(inputTypes.setInputValue(value)),
//         resetInputs: () => dispatch(inputTypes.resetInputs())
//     }
// }
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(InputContainer)
