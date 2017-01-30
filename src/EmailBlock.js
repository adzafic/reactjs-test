import React from 'react';
import {render} from 'react-dom'

export default class EmailBlock extends React.Component{
  constructor(){
    super();
    this.state = {
      email:'',
      error:'',
    };
  }

  changeEmail(e){
    let error ='';
    if(!e.target.value.includes("@") || (!e.target.value.includes(".com") && !e.target.value.includes("es"))){
        error = "email no valido";
    }
    this.setState({
      email: e.target.value,
      error
    });

  }
  render(){
    return (
      <div className="Email">
        <input type="text" placeholder="email" value={this.state.email} onChange={this.changeEmail.bind(this)}/>
        <span className="error">{this.state.error}</span>
      </div>
    );
  }
}
