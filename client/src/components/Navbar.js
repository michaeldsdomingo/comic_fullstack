import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import '../style/navbar.css';
import Home from './Home';


class Navbar extends Component {
    render() {
        return (
            <div className="navbarHeader">
                <div id="navbar">
                    <ul>
                        <li id='title'>
                            <Link to="/" className="removeUnderline colorWhite">Comic Book Blogspot</Link>
                            
                        </li>
                        <div className='align-right'>
                            <li>
                                <Link to={{
                                    pathname: '/addReview',
                                    state: {
                                        editOrAdd: "add"
                                    }
                                }}className="removeUnderline colorWhite">Add Review</Link>
                            </li>
                            <li>
                                <a>Recent News</a>
                            </li>
                            <li>
                                <Link to='/login' className="removeUnderline colorWhite">Login</Link>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
            
        )
    }
}

export default Navbar