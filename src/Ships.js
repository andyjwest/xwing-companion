import React, { Component } from 'react';
import Ship from "./ship/Ship";

class Ships extends Component {

    render(){
        let pilots = this.props.ships.map(ship => <Ship key={ship.xws} ship={ship}/>)

        return (
            <div>
                {pilots}
            </div>
        );
    }
}

export default Ships;