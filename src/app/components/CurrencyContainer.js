import React  from 'react';
import { useSelector} from 'react-redux';
import './CurrencyContainer.css'

export default () => {
    const currencyPLN = useSelector((state) => state.currency.rates
            .find((rate) => rate.name === "PLN")
            .value)

    return (
        <div className={"header"}>
            <div className={"header_text-box"}>
                <h2>EUR/PLN {currencyPLN}</h2>
            </div>
        </div>
    )
}