import actions from './actions'

const initialState = {
    transactions: [
        { title: "Transaction example", value: 107 },
        { title: "Transaction example1", value: 107 },
        { title: "Transaction example2", value: 107 },
        { title: "Transaction example4", value: 107 },
        { title: "Transaction example5", value: 107 },
        { title: "Transaction example6", value: 107 },
        { title: "Transaction example7", value: 107 },
        { title: "Transaction example8", value: 107 }
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
        default:
            return state
    }
}

export default ratesReducer