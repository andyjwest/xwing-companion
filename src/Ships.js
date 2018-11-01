import React, { Component } from 'react';
import Ship from "./ship/Ship";

class Ships extends Component {

    render(){
        return (
            <div>
                {this.props.ships.map(ship => <Ship key={ship.xws} {...ship}/>)}
            </div>
        );
    }
}

export default Ships;