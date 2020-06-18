import actions from '../duck/actions'

const setInputTitle = title => ({
    type: actions.SET_INPUT_TITLE, title
})

const setInputValue = value => ({
    type: actions.SET_INPUT_VALUE, value
})

const resetInputs = () => ({
    type: actions.RESET_INPUT
})

export default {
    setInputTitle,
    setInputValue,
    resetInputs
}
