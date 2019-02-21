import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            inputText: ''
          };
    }

    handleInputChanges = e => {
        this.setState({ input: e.target.value })
    }

    signIn = e => {
        e.preventDefault();
        localStorage.setItem('user', this.state.inputText)
    }

    render() {
        return (
            <div className='loginDiv'>
                <input
                placeholder='User name'
                value={this.inputText}
                onChange={this.handleInputChanges} 
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