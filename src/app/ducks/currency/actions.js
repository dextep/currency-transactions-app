import types from './types'

const update = payload => ({
    type: types.UPDATE_RATE, payload
})

const reset = () => ({
    type: types.RESET_RATES
})

export default {
    update,
    reset
}