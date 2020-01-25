import React, { Component } from 'react';
import List from './ConnectedList';
import Form from './Form';
import CarouselBootStrap from './CarouselBootStrap.js';

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
 
    render() {
        return (
            <div className='main'>
                <CarouselBootStrap />
                {/* <List />
                <Form/> */}

            </div>
        )
    }
}