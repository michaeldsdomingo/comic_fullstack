import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

export default class Login extends Component {
    render() {
        return(
            <div className='login'>
                <div className='tile'>
                    <div className="flexColumnCenter" >
                        <h1 className="loginTitle">Comic Bloggers</h1>
                        <form>
                            <input placeholder="Email"></input>
                            <input placeholder="Password"></input>

                            <button>Login</button>
                            <Link to='/register'>Register</Link>
                        </form>

                        
                    </div>
                 
                    
                </div>
                
                
                
            </div>
        )
    }
}