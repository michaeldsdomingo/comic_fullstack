import React from 'react'
import "../style/slider.css"
import Button from '@material-ui/core/Button';

import { BrowserRouter as Router, Route, Link} from "react-router-dom";

class Review extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            artist: '',
            coverPrice: '',
            publisher: '',
            releaseDate:'',
            score: '',
            title: '',
            writer:'',
            image:'',
            body:'',
            name:''
          
        };
    }

    //Make sure to use es7 function declaration so you dont have to bind this
    display = () => {
        console.log(this.props.location.state.id)
    }

    componentDidMount() {
        const {id,
            artist,
            coverPrice,
            publisher,
            releaseDate,
            score,
            title,
            writer,
            image,
            body,
            admin
            } = this.props.location.state;
        console.log(id, body);
        this.setState({
            id,
            artist,
            coverPrice,
            publisher,
            releaseDate,
            score,
            title,
            writer,
            image,
            body,
            admin
            
        })
    }
    render() {
        const styleInline = {
           
        }
        return (
            <div className="review mt-5">
                
                <div className='row'>
                    <img src={this.state.image} id="reviewImage"></img>
                    <div className="ml-5" id="reviewDetails">
                    {this.state.admin &&
                        <Link id="reviewEditButton"
                            to={{
                            pathname: `/review/${this.state.id}/edit`,
                            state: {
                                id: this.state.id,
                                artist: this.state.artist,
                                coverPrice: this.state.coverPrice,
                                publisher: this.state.publisher,
                                releaseDate: this.state.releaseDate,
                                score: this.state.score,
                                title: this.state.title,
                                writer: this.state.writer,
                                image: this.state.image,
                                body: this.state.body,
                                editOrAdd: "edit",
                                
                            }
                        }}>
                            <Button variant="contained" color="primary" className="buttonPrimary">Edit</Button>
                        </Link>
                    }
                    
                        <h3>Title: <span className="reviewDescValue">{this.state.title}</span></h3>
                        <h3>Writer: <span className="reviewDescValue">{this.state.writer}</span> </h3>
                        <h3>Artist: <span className="reviewDescValue">{this.state.artist}</span> </h3>
                        <h3>Publisher: <span className="reviewDescValue">{this.state.publisher}</span> </h3>
                        <h3>Cover Price: <span className="reviewDescValue">${this.state.coverPrice}</span> </h3>
                        

                    </div>
                </div>
                
                <p className='reviewDescription' style={styleInline}>{this.state.body}</p>
                
                

            </div>
                
        )
    }
    
}

export default Review