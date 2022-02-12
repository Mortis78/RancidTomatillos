import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  clearInputs = () => {
    this.setState({email: '', password: ''});
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  signIn = (event) => {
    event.preventDefault()
    this.props.loginUser(this.state.email, this.state.password)
    this.clearInputs()
  }

  render() {

    const errorMessage = this.props.errorMessage && <p className='error-message'>{this.props.errorMessage}</p>

    return(
      <div className='login-modal'>
        <form className='login-content'>
          <button
            className='close-button'
            onClick={() => this.props.toggleLogin()}
          >
            X
          </button>
          <div className='flex-row'>
            <label htmlFor='email'>Email:</label>
            <input
              type='text'
              id='email'
              name='email'
              value={this.state.email}
              onChange={event => this.handleChange(event)}
            />
          </div>
          <div className='flex-row'>
            <label htmlFor='password'>Password:</label>
            <input
              type='text'
              id='password'
              name='password'
              value={this.state.password}
              onChange={event => this.handleChange(event)}
            />
          </div>
          {errorMessage}
          <button
            className='sign-in-button'
            onClick={event => this.signIn(event)}>Sign In
          </button>
        </form>
      </div>
    )
  }
}


export default Login