import React, { Component } from 'react';

import CarouselBootStrap from './CarouselBootStrap.js';

export default class Home extends Component {
    render() {
        return (
            <div className='main'>
                <CarouselBootStrap />
            </div>
        )
    }
}