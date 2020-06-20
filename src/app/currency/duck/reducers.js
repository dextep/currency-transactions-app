import actions from './actions'

const initialState = {
    base_currency: "EUR",
    rates: [
        { name: "PLN", value: 4.455 }
    ]
}

const ratesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.UPDATE_RATE:
            return {
                ...state,
                rates: state.rates.map(rate => rate.name === action.payload.name ?
                    { ...rate, value: action.payload.value } :
                    rate
                )
            }
        case actions.RESET_RATES:
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