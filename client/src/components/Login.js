import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import axios from "axios";
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

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

    editValue(name) {
        if (this.state.editOrAdd == "edit") {
            return this.props.location.state[name];
        }
        else {
            return ""
        }
    }

    handleChange = name => event => {
        //setValues({ ...values, [name]: event.target.value });
        this.setState({
            [`${name}`]: event.target.value
        })
    };

    render() {
        return(
            <div className='login'>
                <Card className="tile">
                    <div className="flexColumnCenter" >
                        <h1 className="loginTitle">Kabling Comics</h1>
                        <form onSubmit={this.login}>
                            <TextField
                                id="outlined-writer"
                                label="Email"
                                margin="normal"
                                variant="outlined"
                                name="email"
                                defaultValue={this.editValue("email")}
                                onChange={this.handleChange("email")}
                                
                            />
                            <TextField
                                id="outlined-writer"
                                label="Password"
                                margin="normal"
                                variant="outlined"
                                name="password"
                                defaultValue={this.editValue("password")}
                                onChange={this.handleChange("password")}
                                
                            />
                            <Button type='submit' onClick={this.props.getSession}>Login</Button>
                            {/* <input placeholder="Email" name="email" onChange={this.onChangeEmail} />
                            <input placeholder="Password" name="password" onChange={this.onChangePassword} />

                            <input type='submit' onClick={this.props.getSession}/> */}
                            <div id="register">
                              <Link to='/register'>Register</Link>
                            </div>
                            
                        </form>

                        
                    </div>

                </Card>
                
                
                
            </div>
        )
    }
}