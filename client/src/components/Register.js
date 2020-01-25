import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import axios from 'axios';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

export default class Register extends Component {
    register1 = () => {
        axios.get('/auth/addUser')
        .then( res => console.log(res))
        .catch( error => console.log(error))
    }





    render() {
        return(
            <div className='register'>
                <Card className="tile">
                    <div className="flexColumnCenter" >
                        <h1 className="loginTitle">Register</h1>
                        <form action='/auth/newUser' method='post'>
                        <TextField
                            id="outlined-writer"
                            label="Email"
                            margin="normal"
                            variant="outlined"
                            name="email"
                            
                            
                        />
                        <TextField
                            id="outlined-writer"
                            label="Password"
                            margin="normal"
                            variant="outlined"
                            name="password"
                            type="password"
                            
                            
                        />
                        <Button type='submit'>Register</Button>
                            {/* <input placeholder='Email' name='email'/>
                            <input placeholder='Password' name='password' />
                            <input type='submit'/> */}
                        </form>
                    </div>
                    
                </Card>
                
                
            
            </div>
        )
    }
}