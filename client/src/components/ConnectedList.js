import React, { Component } from 'react';
import { connect } from 'react-redux'
import CarouselBootStrap from './CarouselBootStrap.js';

const mapStateToProps = state => {
    return { article: state.article}
}

class ConnectedList extends Component {
    render() {
        return (
            <div >
                <ul>
                    {this.props.article.map(el => (
                        <li key={el.id}>{el.title}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

const List = connect(mapStateToProps)(ConnectedList);

export default List;