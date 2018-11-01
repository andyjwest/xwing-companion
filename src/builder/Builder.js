import React, {Component} from 'react';
import factions from "../data/factions/factions";
import shipsData from '../data/pilots/ships';
import PilotSelection from "./PilotSelection";

class Builder extends Component {

    constructor(props){
        super(props);
        this.state = {
            faction:factions[0].xws
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({faction:event.target.value})
    }

    render() {
        let options = factions.map(faction =>
            <option key={faction.xws} value={faction.xws}>{faction.name}</option>);
        console.log(shipsData.find(collection => collection.faction === this.state.faction));
        let ships = shipsData.find(collection => collection.faction === this.state.faction).ships.map(ship => <span style={{color:'white'}}>
            <div>{ship.name} <PilotSelection {...ship}/></div>
            </span>);
        return (
            <div>
                <select value={this.state.faction} onChange={this.handleChange}>
                    {options}
                </select>
                <div>{ships}</div>
            </div>
        )
    }
}

export default Builder;