import React, {Component} from 'react';
import './App.css';
import Card from './Card'
import {extract} from "./githubApiParser";
import Ship from "./Ship";
import Ships from "./Ships";

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            actions: [],
            conditions: [],
            damageDeck: [],
            factions: [],
            ships: [],
            stats: [],
            upgrades: [],
            factionFilter: null
        }
    }

    componentWillMount() {
        extract("actions", (data)=> this.setState({actions: this.state.actions.concat(data)}))
        extract("conditions", (data)=> this.setState({conditions: this.state.conditions.concat(data)}))
        extract("damage-decks", (data)=> this.setState({damageDeck: this.state.damageDeck.concat(data)}))
        extract("factions", (data)=> this.setState({factions: this.state.factions.concat(data)}))
        extract("pilots", (data)=> this.setState({ships: this.state.ships.concat(data)}))
        extract("stats", (data)=> this.setState({stats: this.state.stats.concat(data)}))
        extract("upgrades", (data)=> this.setState({upgrades: this.state.upgrades.concat(data)}))
    }

    updateFaction(event){
        this.setState({factionFilter: event.target.value})
    }

    render() {
        let factions = this.state.factions.map(faction =>
            <option selected={this.state.factionFilter === faction.name}>{faction.name}</option>)
        return (
            <div>
                <select onChange={this.updateFaction}>
                    {factions}
                </select>
                <Ships ships={this.state.ships} factions={this.state.factions}/>
            </div>
        );
    }
}

export default App;
