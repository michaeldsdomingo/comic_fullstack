import React from 'react'
import "../style/slider.css"

class Score extends React.Component {
    render() {
        return (
            <div>
                <div className='score-container'>
                                
                    <h1 className='score-number'>{this.props.score}</h1>
                    {/* <div className='critic-text'>
                        <h4 className='score-text'>Based On: </h4>    
                        <h4 className='score-text-critics'> 20 Critics</h4>
                    </div> */}
                                
                </div>
            </div>
                
                
            
            
        )
    }
}



export default Score