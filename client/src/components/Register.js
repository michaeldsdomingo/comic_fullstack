import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

export default class Register extends Component {
    register1 = () => {
        console.log("register");
    }



    render() {
        return(
            <div className='register'>
                <form action='/newUser' method='post'>
                    <input placeholder='Email' name='email'/>
                    <input placeholder='Password' name='password' />
                    <input type='submit'/>
                </form>
                <button onClick={this.register1}>Register</button>
            
            </div>
        )
    }
}