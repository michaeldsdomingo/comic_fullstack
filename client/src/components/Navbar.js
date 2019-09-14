import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import '../style/navbar.css';
import Home from './Home';
import axios from "axios";


class Navbar extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     if (props.authUser !== state.authUser) {
    //         return {authUser: props.authUser}
    //     }
    //     return null
    // }

    constructor() {
        super()
        this.state = {
            authUser: null,
            state: 'hello'
        }
    }



    logout = () => {
        axios.get('/auth/logout')
        .then( response => {
            console.log(response);
            
        })
        .catch( error => {
            console.log( error )
        })
        window.location = '/';
    }


    render() {
        return (
            <div className="navbarHeader">
                <div id="navbar">
                    <ul>
                        <li id='title'>
                            <Link to="/" className="removeUnderline colorWhite">Comic Book Blogspot</Link>
                        </li>
                        <div className='align-right'>
                            {this.props.admin && 
                                <li>
                                    <Link to={{
                                        pathname: '/addReview',
                                        state: {
                                            editOrAdd: "add"
                                        }
                                    }}className="removeUnderline colorWhite">Add Review</Link>
                                </li>
                            }
                            
                            {!this.props.authUser && <li>
                                <Link to='/login' className="removeUnderline colorWhite"  >Login</Link>
                            </li>}
                            {this.props.authUser && <li>
                                <a onClick={this.logout} className="removeUnderline colorWhite">Logout</a>
                            </li>}
                            
                        </div>
                    </ul>
                </div>
            </div>
            
        )
    }
}

export default Navbar