import actions from './actions'

const initialState = {
    transactions: [
        { title: "Transaction example", value: 107 },
        { title: "Transaction example1", value: 207 },
        { title: "Transaction example8", value: 607 },
        { title: "Transaction example4", value: 307 },
        { title: "Transaction example5", value: 407 },
        { title: "Transaction example6", value: 507 }
    ]
}

const ratesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_TRANSACTION:
            return {
                transactions: [
                    ...state.transactions,
                    action.payload
                ]

            }
        case actions.REMOVE_TRANSACTION:
            const { index } = action;
            const transactions = [];
            state.transactions.forEach((transaction, i) => {
                if(index !== i) {
                    transactions.push(transaction)
                }
            })
            return {
                transactions,
            }
        default:
            return state
    }
}

export default ratesReducer