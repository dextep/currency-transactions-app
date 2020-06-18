import actions from './actions'

const add = payload => ({
    type: actions.ADD_TRANSACTION, payload
})

export default {
    add,
}