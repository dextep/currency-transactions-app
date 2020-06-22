import {transactionsActions, transactionsTypes} from './index';

describe('Transaction Actions', () => {

    it('should return an ADD_TRANSACTION action', () => {
        expect(
            transactionsActions.addTransaction({})
        ).toEqual({type: transactionsTypes.ADD_TRANSACTION, payload: {}})
    });

    it('should return an UPDATE_TRANSACTION action', () => {
        expect(
            transactionsActions.updateTransaction({})
        ).toEqual({type: transactionsTypes.UPDATE_TRANSACTION, payload: {}})
    });

    it('should return an ADD_TRANSACTION action', () => {
        expect(
            transactionsActions.removeTransaction({})
        ).toEqual({type: transactionsTypes.REMOVE_TRANSACTION, id: {}})
    });

    it('should return an SET_SELECTED_TRANSACTION action', () => {
        expect(
            transactionsActions.setSelectedTransaction({})
        ).toEqual({type: transactionsTypes.SET_SELECTED_TRANSACTION, payload: {}})
    });

    it('should create an action to add a transaction', () => {
        const payload = {title: "Test Bill", value: 93.21}
        const expectedAction = {
            type: transactionsTypes.ADD_TRANSACTION,
            payload
        }
        expect(transactionsActions.addTransaction(payload)).toEqual(expectedAction)
    })

    it('should create an action to update a transaction', () => {
        const payload = {id: 6, title: "Test Bill", value: 2.11}
        const expectedAction = {
            type: transactionsTypes.UPDATE_TRANSACTION,
            payload
        }
        expect(transactionsActions.updateTransaction(payload)).toEqual(expectedAction)
    })

    it('should create an action to delete a transaction', () => {
        const id = 6
        const expectedAction = {
            type: transactionsTypes.REMOVE_TRANSACTION,
            id
        }
        expect(transactionsActions.removeTransaction(id)).toEqual(expectedAction)
    })

    it('should create an action to set id of selected transaction', () => {
        const {payload} = 6
        const expectedAction = {
            type: transactionsTypes.SET_SELECTED_TRANSACTION,
            payload
        }
        expect(transactionsActions.setSelectedTransaction(payload)).toEqual(expectedAction)
    })
})