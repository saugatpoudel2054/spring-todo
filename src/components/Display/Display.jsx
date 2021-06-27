import React, { Component } from 'react';
import './Display.css';
class Display extends Component{
   
    render() {
        return (
            <div className="Display">
                <div className="count">
                    {this.props.number}
                </div>
            </div>
        );
    }

}
export default Display;