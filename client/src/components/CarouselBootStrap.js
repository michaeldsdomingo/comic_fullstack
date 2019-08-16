import React, { Component } from 'react';
import SlideNew from "./SlideNew";
import axios from 'axios';


export default class CarouselBootStrap extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dataDB: []
        }

    }

    componentDidMount = () => {
        this.getReviewsFromDB();
    }

    getReviewsFromDB = () => {
        var dataDB;
        axios.get('/getReviews')
            .then((response) => {
                //console.log(response.data.data);
                dataDB = response.data.data;
                this.setState({dataDB});
            })
            .catch(function(error) {
                console.log(error, "get reviews from db unsuccessful");
            })
    }

    render() {
        return (
            <div>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="4000">
                    
                    <div className="carousel-inner">
                        {this.state.dataDB.map( (entry, index) => {
                            if (index == 0) {
                                return <SlideNew id={entry['id']} 
                                                writer={entry['writer']}
                                                title={entry['title']}
                                                artist={entry['artist']}
                                                publisher={entry['publisher']} 
                                                releaseDate={entry['releaseDate']}
                                                coverPrice={entry['coverPrice']}
                                                image={entry['imageURL']}
                                                body={entry['body']}
                                                score={entry['score']}
                                                name={entry.name}
                                                active={"active"}/>
                            }
                            else {
                                return <SlideNew id={entry['id']}
                                                writer={entry['writer']}
                                                title={entry['title']}
                                                artist={entry['artist']}
                                                publisher={entry['publisher']} 
                                                releaseDate={entry['releaseDate']}
                                                coverPrice={entry['coverPrice']}
                                                image={entry['imageURL']}
                                                body={entry['body']}
                                                score={entry['score']}
                                                name={entry.name}
                                                active={""}/>
                            }
                            
                        }) 
                        }
                        
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                        
                    </div>
                </div>
            </div>
        )
    }
}