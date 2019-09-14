import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import axios from "axios";

export default class Login extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    login = (e) => {
        e.preventDefault();

        console.log(this.state.email)
        console.log(this.state.password)

        const credentials = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('/auth/login', credentials)
        .then( res => {
            console.log(res.data);
            window.location = '/'
        })
    }

    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    onChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return(
            <div className='login'>
                <div className='tile'>
                    <div className="flexColumnCenter" >
                        <h1 className="loginTitle">Comic Bloggers</h1>
                        <form onSubmit={this.login}>
                            <input placeholder="Email" name="email" onChange={this.onChangeEmail} />
                            <input placeholder="Password" name="password" onChange={this.onChangePassword} />

                            <input type='submit' onClick={this.props.getSession}/>
                            <div id="register">
                              <Link to='/register'>Register</Link>
                            </div>
                            
                        </form>

                        
                    </div>

                </div>
                
                
                
            </div>
        )
    }
}