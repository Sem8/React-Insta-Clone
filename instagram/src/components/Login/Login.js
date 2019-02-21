import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            inputText: ''
          };
    }

    handleInputChanges = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    signIn = e => {
        e.preventDefault();
        localStorage.setItem('user', this.state.inputText);
        window.location.reload();
    }

    render() {
        return (
            <div className='loginDiv'>
                <input
                placeholder='User name'
                value={this.state.inputText}
                onChange={this.handleInputChanges}
                name="inputText" 
                />
                <input
                placeholder='Password' />
                <button onClick={this.signIn}>
                    Log In
                </button>

            </div>
        )
    }
}

export default Login