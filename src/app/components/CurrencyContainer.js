import React  from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { rateActions } from '../currency/duck/index'
import './CurrencyContainer.css'

export default () => {
    const dispatch = useDispatch()
    const currencyPLN = useSelector((state) => state.currency.rates
            .find((rate) => rate.name === "PLN")
            .value)

    const updateCurrency = (payload) => dispatch(rateActions.update({name:"PLN", value:payload}))
    const resetCurrency = () => dispatch(rateActions.reset())

    return (
        <div className={"header"}>
            <div className={"header_text-box"}>
                <h2>EUR/PLN {currencyPLN}</h2>
            </div>
            <div>
                <input min={0.001} max={100} step={0.001} type={"number"} onChange={ e => updateCurrency(e.target.value) } value={currencyPLN}/>
                <button onClick={resetCurrency}>Reset</button>
            </div>
        </div>
    )
}