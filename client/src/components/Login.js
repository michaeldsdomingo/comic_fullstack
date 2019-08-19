import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

export default class Login extends Component {
    render() {
        return(
            <div className='login'>
                <div className='tile'>
                    <div className="flexColumnCenter" >
                        <h1 className="loginTitle">Comic Bloggers</h1>
                        <form action='/login' method='post'>
                            <input placeholder="Email" name="email" />
                            <input placeholder="Password" name="password" />

                            <input type='submit' />
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