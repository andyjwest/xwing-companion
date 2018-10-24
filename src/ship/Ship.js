import React, { Component } from 'react';
import Dial from "./dial/Dial";
import './ship.css';
import ActionBar from "./ActionBar";

class Ship extends Component {

    render(){
        return (
            <div>
                <h1>{this.props.ship.name}</h1>
                <div className='artwork-container'>
                    <img className='artwork' src={this.props.ship.pilots[0].artwork} alt={this.props.ship.name}/>
                    <div className='overlay' />
                    <div className='text'>{this.props.ship.name}</div>
                </div>
                <ActionBar actions={this.props.ship.actions}/>
                <Dial dial={this.props.ship.dial}/>
            </div>
        )
    }
}

export default Ship;