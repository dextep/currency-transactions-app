import actions from './actions'

const addTransaction = payload => ({
    type: actions.ADD_TRANSACTION,
    payload
})

const removeTransaction = index => ({
    type: actions.REMOVE_TRANSACTION,
    index
})

export default {
    addTransaction,
    removeTransaction
}