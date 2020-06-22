import { combineReducers } from 'redux'
import ratesReducer  from './app/ducks/currency'
import transactionsReducer  from './app/ducks/transactions'

const rootReducer = combineReducers({
    currency: ratesReducer,
    transactions: transactionsReducer
})

export default rootReducer