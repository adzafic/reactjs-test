import React from 'react';
import {render} from 'react-dom';

export default class PayPalButton extends React.Component {
  constructor(){
    super();
    this.env= 'sandbox';
    this.client = {
    
    };
  }

  pay(){
    console.log(paypal);
  }
  render() {
    return (
      <div>
        <button onClick={this.pay.bind(this)}>Pay Pal</button>
      </div>
    );
  }
}


    /*return (
        <paypal.Button.react
            client={this.client}
            payment={this.payment}
            commit={true}
            onAuthorize={this.onAuthorize} />
    );
*/
