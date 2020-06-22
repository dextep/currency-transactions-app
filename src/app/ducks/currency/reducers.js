import types from './types'

const initialState = {
    base_currency: "EUR",
    rates: [
        { name: "PLN", value: 4.455 }
    ]
}

const ratesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_RATE:
            return {
                ...state,
                rates: state.rates.map(rate => rate.name === action.payload.name ?
                    { ...rate, value: action.payload.value } :
                    rate
                )
            }
        case types.RESET_RATES:
            return {
                base_currency: "EUR",
                rates: [
                    { name: "PLN", value: 4.455 }
                ]
            }
        default:
            return state
    }
}

export default ratesReducer