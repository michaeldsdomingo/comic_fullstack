import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import axios from 'axios';

export default class Register extends Component {
    register1 = () => {
        axios.get('/auth/addUser')
        .then( res => console.log(res))
        .catch( error => console.log(error))
    }



    render() {
        return(
            <div className='register login'>
                <div className='tile'>
                    <div className="flexColumnCenter" >
                        <h1 className="loginTitle">Comic Bloggers</h1>
                        <form action='/auth/newUser' method='post'>
                            <input placeholder='Email' name='email'/>
                            <input placeholder='Password' name='password' />
                            <input type='submit'/>
                        </form>

                        
                    </div>
                 
                    
                </div>
                
                <button onClick={this.register1}>Register</button>
            
            </div>
        )
    }
}