import React, { Component } from 'react';
import axios from "axios";
import Navbar from './components/Navbar.js';


import  './style/app.css'

import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Review from "./components/Review";
//import Tutorial from './components/Tutorial.js'
import AddReview from "./components/AddReview";

class App extends Component {
    render() {
        return (
            <Router>
                <div className='app-container'>
                    <Navbar/>
                    <div className="main">
                        <Route path="/" exact component={Home} />
                        <Route path='/login' component={Login}/>
                        <Route path='/register' component={Register}/>
                        <Route path='/review/:reviewNumber' exact component={Review} />
                        <Route path='/addReview' component={AddReview}/>
                        <Route path='/review/:reviewNumber/edit' exact component={AddReview}/>
                    </div>
                    
                </div>
                
            </Router>
            
        );
    }
}

export default App;
