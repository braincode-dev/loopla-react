import {Component} from 'react';
import RatesListItem from '../rates-list-item/rates-list-item';
import './rates-list.css';

class RatesList extends Component {

    render() {

        const { result } = this.props.data;
        const base = result ? result.base : '';
        const date = result ? result.date : '';
        const rates = result ? result.rates : {};

        return(
            <div className='wrapper-widget'>
                <div className='widget-header'>
                    <img src="/usd.png" alt="USD flag" />
                    <h3>US Dollar Exchange Rates</h3>
                </div>
                <div className='widget-content'>
                    <p>1 {base} =</p>
                    <RatesListItem rates={rates}/>
                </div>
                <div className='widget-footer'>
                    <span>Rates</span> {date}
                </div>
            </div>
        )
    }
}

export default RatesList;