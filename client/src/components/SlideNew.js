import React from 'react'
import "../style/slider.css"
import Score from "./Score";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

class SlideNew extends React.Component {
    
    render() {
        return (
            <div class={`carousel-item ${this.props.active}`} 
                style={{
                    backgroundImage: `url(${this.props.image})`
                }}
            >
                <Link to={{
                    pathname: `/review/${this.props.id}`,
                    state: {
                        id: this.props.id,
                        artist: this.props.artist,
                        coverPrice: this.props.coverPrice,
                        publisher: this.props.publisher,
                        releaseDate: this.props.releaseDate,
                        score: this.props.score,
                        title: this.props.title,
                        writer: this.props.writer,
                        image: this.props.image,
                        body: this.props.body,
                        name: this.props.name,
                        admin: this.props.admin
                    }
                }}>
                    <div class="">
                        <div class="bgBlack">
                            <div class="d-flex justify-content-center align-items-center slideNew">
                                <img src={this.props.image} class="d-block " alt="..." />
                                <div class="d-flex flex-column justify-content-center ml-5" id="comicDetails">
                                    <div>Writer: {this.props.writer}</div>
                                    <div>Artist: {this.props.artist}</div>
                                    <div>Publisher: {this.props.publisher}</div>
                                    <div>Release Date: {this.props.releaseDate}</div>
                                    <div>Cover Price: ${this.props.coverPrice}</div>
                                    <Score score={this.props.score}/>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                   
                </Link>
                    
            </div>
                
        )
    }
    
}

export default SlideNew