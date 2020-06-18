import actions from '../duck/actions'

const initialState = {
    title: '',
    value: ''
}

const inputsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_INPUT_TITLE: {
            const { title } = action;
            return {
                ...state,
                title,
            }
        }
        case actions.SET_INPUT_VALUE: {
            const { value } = action;
            return {
                ...state,
                value,
            }
        }
        case actions.RESET_INPUT: {
            return initialState;
        }
        default:
            return state;
    }
}

export default inputsReducer