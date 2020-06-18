import { combineReducers } from 'redux'
import ratesReducer  from './app/currency/duck'
import transactionsReducer  from './app/transactions/duck'
import inputsReducer  from './app/transactions/inputs'

const rootReducer = combineReducers({
    currency: ratesReducer,
    transactions: transactionsReducer,
    inputs: inputsReducer
})

export default rootReducer