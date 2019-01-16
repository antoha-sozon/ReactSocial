import React, { Component } from 'react'; 
import './App.css';
 
import Form from './components/Form.js';
import Footer from './components/Footer.js'; 
import Page from './components/Page.js'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 'true',
      login: '',
      password: ''
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
    this.setState({
       [e.target.id]: e.target.value
    }); 
  console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();

    const formLogin = this.state.login;
    const formPassword = this.state.password;

    if (formLogin === 'Vasiliy' && formPassword === 'Pupkin') {
         this.setState({ form: false }, () =>  console.log(this.state));   
      } else {
        alert("Wrong name or password");
      }
   
  } 

 render() {
    const formStatus = this.state.form;

    if (formStatus) {
      return ( 
        <div className="login-content">
          <div className="login-left">
            <div className="logo">
              <a href="#" alt="React JS Social"><img src="./i/logo.png" /></a>
            </div>
            <h1>React JS Social</h1>
            <h2>Join our social network with <br /> blackjack and whores :)</h2>
            <p>If you do not have an account, please <a href="#">register</a>.</p>
          </div>
            <div className="login-right">
            <form className="login-form" onSubmit={this.handleSubmit}>
              <label><input type="text" name="login" id="login" value={this.state.login.value}  onChange={this.handleChange} placeholder="Enter name" required /></label>
              <label><input type="password" name="password" id="password" value={this.state.password.value}  onChange={this.handleChange} placeholder="Enter password" required/></label>
              <p><a href="#">Forgot password?</a></p>
              <button type="submith">Enter</button>
            </form>
          </div>
          <Footer />
        </div>
      ); 
    } else {
      return (
        <Page />
      );
    }
  }
}

export default App;