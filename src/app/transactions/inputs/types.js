import actions from '../duck/actions'

const setInputId = id => ({
    type: actions.SET_INPUT_ID,
    id
})

const setInputTitle = title => ({
    type: actions.SET_INPUT_TITLE,
    title
})

const setInputValue = value => ({
    type: actions.SET_INPUT_VALUE,
    value
})

const resetInputs = () => ({
    type: actions.RESET_INPUT
})

export default {
    setInputId,
    setInputTitle,
    setInputValue,
    resetInputs
}
