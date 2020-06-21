import actions from './actions'

const addTransaction = payload => ({
    type: actions.ADD_TRANSACTION,
    payload
})

const updateTransaction = (payload) => ({
    type: actions.UPDATE_TRANSACTION,
    payload
})

const removeTransaction = id => ({
    type: actions.REMOVE_TRANSACTION,
    id
})

const setSelectedTransaction = payload => ({
    type: actions.SET_SELECTED_TRANSACTION,
    payload
})

export default {
    addTransaction,
    updateTransaction,
    removeTransaction,
    setSelectedTransaction
}