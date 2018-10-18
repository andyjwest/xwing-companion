import React, { Component } from 'react';
import Ship from "./Ship";

class Card extends Component {

    constructor(props) {
        super(props)
        this.state = {selectedFaction:"Rebel Alliance"}
    }

    render(){
        let pilots = this.props.ships.filter(pilot=>pilot.faction === this.state.selectedFaction).map(pilot => <Ship ship={pilot}/>)

        return (
            <div>
                {pilots}
            </div>
        );
    }
}

export default Card;