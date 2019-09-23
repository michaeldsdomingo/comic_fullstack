import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import axios from "axios";
// import MenuIcon from '@material-ui/icons/Menu';



class Appbar extends Component {
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
            <div className="appBar flex-grow">
                <AppBar position="static">
                    <Toolbar>
                        {/* <IconButton edge="start" className color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton> */}
                        <Link to="/" className="removeUnderline colorWhite flex-grow" >
                            <Typography variant="h6" >
                                Kabling Comics
                            </Typography>
                        </Link>
                        {this.props.admin && 
                            
                            <Link to={{
                                pathname: '/addReview',
                                state: {
                                    editOrAdd: "add"
                                }
                            }}className="removeUnderline colorWhite">
                                <Button color="inherit" className="removeUnderline colorWhite">Add Review</Button>
                            </Link>
                            
                        }
                        {!this.props.authUser && 
                            <Link to='/login' className="removeUnderline colorWhite"  >
                                <Button color="inherit">Login</Button>
                            </Link>
                        }
                        {this.props.authUser && 
                                <a onClick={this.logout} className="removeUnderline colorWhite">
                                    <Button color="inherit">Logout</Button>
                                </a>
                        }
                        
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Appbar