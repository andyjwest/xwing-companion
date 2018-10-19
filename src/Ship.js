import React, { Component } from 'react';
import Dial from "./Dial";

class Ship extends Component {

    render(){
        return (
            <div>
                <h1>{this.props.ship.name}</h1>
                <h2>{this.props.ship.faction}</h2>
                <Dial dial={this.props.ship.dial}/>
            </div>
        )
    }
}

export default Ship;