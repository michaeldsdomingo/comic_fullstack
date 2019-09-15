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
    constructor(props) {
        super(props);
        
        this.state = {
            authUser: null,
            test: 'world',
            admin: false,
            currentUser: null
        };
    }

    componentDidMount() {
        console.log('app did mount')
        this.getSession();
        
    }



    componentWillUnmount() {
        
    }

    getSession = () => {
        axios.get('/auth/session')
        .then( response => {
            this.setState({
                authUser: response.data
            })
            console.log(response.data)
            this.getCurrentUser();
        })
        .catch( error => {
            console.log(error)
        })
    }

    getCurrentUser = () => {
        
        axios.post('/auth/currentUser', {
            authUser: this.state.authUser
        })
        .then( response => {
            console.log(response.data)
            this.setState({
                currentUser: response.data,
                admin: response.data.admin
            })
        })
    }

    render() {
        return (
            <Router>
                <div className='app-container'>
                    <Navbar authUser={this.state.authUser} admin={this.state.admin}/>
                    <div className="main">
                        <Route path="/" exact 
                            render={(props) => <Home {...props} admin={this.state.admin}/>} 
                        />
                        <Route path='/login' 
                            render={(props) => <Login {...props} />}
                        />
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
