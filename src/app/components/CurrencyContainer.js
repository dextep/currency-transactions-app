import React, { Component } from 'react';
import { connect } from 'react-redux';
import { rateActions } from '../currency/duck/index'

class CurrencyContainer extends Component {
    render () {
        return (
            <div>
                <h2>EUR/PLN {this.props.currency("PLN")}</h2>
                <input min={0.01} max={100} step={0.02} type={"number"} onChange={ e => this.props.onUpdate(e.target.value) } value={this.props.currency("PLN")}/>
                <button onClick={this.props.onReset}>Reset</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currency: (currency) => state.currency.rates
            .find((rate) => rate.name === currency)
            .value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdate: (payload) => dispatch(rateActions.update({name:"PLN",value:payload})),
        onReset: () => dispatch(rateActions.reset())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrencyContainer)
