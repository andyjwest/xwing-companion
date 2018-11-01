import React, {Component} from 'react';
import './App.css';
import actions from './data/actions/actions.json'
import factions from './data/factions/factions'
import shipsData from './data/pilots/ships';
import "../node_modules/xwing-miniatures-font/dist/xwing-miniatures.css"
import Activation from "./activation/Activation";
import {createStore} from "redux";
import xwingApp from "./reducers";
import Builder from "./builder/Builder";

const store = createStore(xwingApp);

class App extends Component {

    constructor(props) {
        super(props);
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
            <option key={faction.xws} value={faction.xws}>{faction.name}</option>);
        let pilots = ['tennumb', 'dutchvander', 'mirandadoni', 'arvelcrynyd'];
        return (
            <div className="content">
                <Builder />
                <Activation pilotIds={pilots} factionShips={this.state.ships.find(factionCollection => factionCollection.faction === this.state.factionFilter).ships}/>
            </div>
        );
    }
}

export default App;
