import {Component} from 'react'; 
import './rates-list-item.css';

class RatesListItem extends Component {
    render() {
      const {rates} = this.props

      return (
        <div className='currency-block'>
          {Object.entries(rates).map(([currency, rate]) => (
            <div key={currency} className='currency-item'>
              <p className='currency-name'>{currency}</p>
              <p>{rate}</p>
            </div>
          ))}
        </div>
      );
    }
  }

export default RatesListItem;