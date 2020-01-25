import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import axios from "axios";
import Logo from '../images/Logo3.gif'
import { connect } from 'react-redux'
import { login, logout } from '../js/actions'
// import MenuIcon from '@material-ui/icons/Menu';

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (userInfo) => dispatch(login(userInfo)),
        logout: () => dispatch(logout())
    }
}



class ConnectedAppbar extends Component {
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
            
        }
    }

    componentDidMount() {
        this.getAuth()
        
    }

    getAuth = () => {
        axios.get('/auth/sessionAuth')
            .then( response => {
                if (response.data) {
                    console.log(response.data)
                    this.props.login(response.data)
                }
                console.log(this.props.auth)
            }).catch(error => {

            })
    }

    logout = () => {
        axios.get('/auth/logout')
        .then( response => {
            console.log(response);
            this.props.logout();
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
                        <img src={Logo} className='MuiToolbar-regular' style={{height: 64 + 'px'}}></img>
                        <Link to="/" className="removeUnderline colorWhite flex-grow" >
                            <Typography variant="h6" >
                                Kabling Comics
                            </Typography>
                        </Link>
                        {this.props.auth.admin && 
                            
                            <Link to={{
                                pathname: '/addReview',
                                state: {
                                    editOrAdd: "add"
                                }
                            }}className="removeUnderline colorWhite">
                                <Button color="inherit" className="removeUnderline colorWhite">Add Review</Button>
                            </Link>
                            
                        }
                        {!this.props.auth.auth && 
                            <Link to='/login' className="removeUnderline colorWhite"  >
                                <Button color="inherit">Login</Button>
                            </Link>
                        }
                        {this.props.auth.auth && 
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

const Appbar = connect(mapStateToProps, mapDispatchToProps)(ConnectedAppbar)
export default Appbar