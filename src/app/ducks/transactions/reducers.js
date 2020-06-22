import types from './types'

const initialState = {
    selectedId: -1,
    seq: 7,
    transactions: [
        { id: 1, title: "Expense repayment", value: 100 },
        { id: 2, title: "Local Council", value: 247 },
        { id: 3, title: "Electricity bill", value: 20 },
        { id: 4, title: "T-mobile bill", value: 29 },
        { id: 5, title: "Grocery Expenses", value: 43.22 },
        { id: 6, title: "Charity Donation", value: 150 }
    ]
}

const ratesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TRANSACTION: {
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
        case types.UPDATE_TRANSACTION: {
            const {payload} = action;
            const transactions = [...state.transactions];
            const index = state.transactions.findIndex( transaction => transaction.id === payload.id)
            transactions[index] = payload;
            return {
                ...state,
                transactions
            }
        }
        case types.REMOVE_TRANSACTION: {
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
        case types.SET_SELECTED_TRANSACTION: {
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