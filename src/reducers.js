import { combineReducers } from 'redux'
import ratesReducer  from './app/currency/duck'
import transactionsReducer  from './app/transactions/duck'

const rootReducer = combineReducers({
    currency: ratesReducer,
    transactions: transactionsReducer
})

export default rootReducer