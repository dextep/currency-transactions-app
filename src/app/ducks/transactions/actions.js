import types from './types'

const addTransaction = payload => ({
    type: types.ADD_TRANSACTION,
    payload
})

const updateTransaction = (payload) => ({
    type: types.UPDATE_TRANSACTION,
    payload
})

const removeTransaction = id => ({
    type: types.REMOVE_TRANSACTION,
    id
})

const setSelectedTransaction = payload => ({
    type: types.SET_SELECTED_TRANSACTION,
    payload
})

export default {
    addTransaction,
    updateTransaction,
    removeTransaction,
    setSelectedTransaction
}