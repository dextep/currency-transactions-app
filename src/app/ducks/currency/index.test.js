import {ratesTypes, rateActions} from './index';

describe('Currency Actions', () => {

    it('should return an UPDATE_RATE action', () => {
        expect(
            rateActions.update({})
        ).toEqual({type: ratesTypes.UPDATE_RATE, payload: {}})
    });

    it('should return an RESET_RATES action', () => {
        expect(
            rateActions.reset({})
        ).toEqual({type: ratesTypes.RESET_RATES})
    });

    it('should create an action to update a currency', () => {
        const payload = {name: "PLN", value: 4.21}
        const expectedAction = {
            type: ratesTypes.UPDATE_RATE,
            payload
        }
        expect(rateActions.update(payload)).toEqual(expectedAction)
    })

    it('should create an action to reset a currency', () => {
        const expectedAction = {
            type: ratesTypes.RESET_RATES
        }
        expect(rateActions.reset()).toEqual(expectedAction)
    })
})