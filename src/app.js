import React from 'react';
import {render} from 'react-dom';
import Head from './Head';
import EmailBlock from './EmailBlock';
import PayPalButton from './PayPalButton';

class App extends React.Component{
  render(){
    return (
      <div>
        <Head />
        <EmailBlock />
        <PayPalButton />
      </div>

    );
  }
}

render(<App/>, document.getElementById('app'));
