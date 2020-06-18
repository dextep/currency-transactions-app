import actions from './actions'

const update = payload => ({
    type: actions.UPDATE_RATE, payload
})

const reset = () => ({
    type: actions.RESET_RATES
})

export default {
    update,
    reset
}