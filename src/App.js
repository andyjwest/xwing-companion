import React, {Component} from 'react';
import './App.css';
import Ships from "./Ships";
import actions from './data/actions/actions.json'
import factions from './data/factions/factions'
import shipsData from './data/pilots/ships';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            actions: actions,
            conditions: [],
            damageDeck: [],
            factions: factions,
            ships: shipsData,
            stats: [],
            upgrades: [],
            factionFilter: factions[0].xws
        };

        this.updateFaction = this.updateFaction.bind(this)
    }

    updateFaction(event){
        this.setState({factionFilter: event.target.value})
    }

    render() {
        let factions = this.state.factions.map(faction =>
            <option key={faction.xws} value={faction.xws}>{faction.name}</option>)
        return (
            <div>
                <select onChange={this.updateFaction} value={this.state.factionFilter}>
                    {factions.length === 0 ? <option/>: factions}
                </select>
                <Ships ships={this.state.ships.find(factionCollection => factionCollection.faction === this.state.factionFilter).ships}/>
            </div>
        );
    }
}

export default App;
