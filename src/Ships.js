import React, { Component } from 'react';

class Card extends Component {

    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div>
                <h1>{this.props.ship.name}</h1>
                <h2>{this.props.ship.faction}</h2>
            </div>
        )
    }
}

export default Card;