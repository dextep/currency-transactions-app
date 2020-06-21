import actions from './actions'

const initialState = {
    selectedId: -1,
    seq: 7,
    transactions: [
        { id: 1, title: "Transaction example", value: 107 },
        { id: 2, title: "Transaction example1", value: 207 },
        { id: 3, title: "Transaction example8", value: 607 },
        { id: 4, title: "Transaction example4", value: 307 },
        { id: 5, title: "Transaction example5", value: 407 },
        { id: 6, title: "Transaction example6", value: 507 }
    ]
}

const ratesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_TRANSACTION: {
            const {payload} = action;
            payload["id"] = state.seq;
            state.seq += 1
            return {
                ...state,
                transactions: [
                    ...state.transactions,
                    action.payload
                ]
            }
        }
        case actions.UPDATE_TRANSACTION: {
            const {payload} = action;
            const transactions = [...state.transactions];
            const index = state.transactions.findIndex( transaction => transaction.id === payload.id)
            transactions[index] = payload;
            return {
                ...state,
                transactions
            }
        }
        case actions.REMOVE_TRANSACTION: {
            const {id} = action;
            const transactions = [];
            state.transactions.map(transaction => transaction.id !== id &&
                transactions.push(transaction)
            )
            return {
                ...state,
                transactions
            }
        }
        case actions.SET_SELECTED_TRANSACTION: {
            const {id} = action.payload;
            return {
                ...state,
                selectedId: id
            }
        }
        default:
            return state
    }
}

export default ratesReducer