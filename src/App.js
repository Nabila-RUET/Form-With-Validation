import React, { Component } from 'react';
import Formsy from 'formsy-react';
import InputField from './formsy.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canSubmit: false
    }
  }
  setDisable = () => {
    this.setState({ canSubmit: false })
  }
  setEnable = () => {
    this.setState({ canSubmit: true })
  }
  submit(model) {
    //fetch('http://example.com/',{method:'post',body:JSON.stringify(model)});
  }
  input=()=>{
    return(
    <InputField
    name="email"
    validations="isEmail"
    validationError="This is not a valid mail"
    required />
    )
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Form with formsy</h1>
        </header>

        <Formsy 
          onValidSubmit={this.submit} onValid={this.setEnable} onInvalid={this.setDisable}>
          {this.input()}
          <button  style={{backgroundColor:'skyblue',color:'black'}} type="submit" disabled={!this.state.canSubmit}>Submit</button>
        </Formsy>
      </div>
    );
  }
}

export default App;
