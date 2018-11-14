import React, {Component} from 'react';
import './App.css';
import HeaderRoute from './Header'
import Planning from './planning/Planning'
import actions from './data/actions/actions.json'
import factions from './data/factions/factions'
import shipsData from './data/pilots/ships';
import {BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom";
import "../node_modules/xwing-miniatures-font/dist/xwing-miniatures.css"
import Activation from "./activation/Activation";
import System from './system/System';
import {createStore} from "redux";
import xwingApp from "./reducers/index";
import Builder from "./builder/Builder";
import {buildPilot} from "./config";
import PlanningContainer from "./planning/PlanningContainer";
import { Provider } from 'react-redux'

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
        let pilots = ['tennumb', 'dutchvander', 'mirandadoni', 'arvelcrynyd']
            .map(pilotId => buildPilot(pilotId, this.state.ships.find(factionCollection => factionCollection.faction === this.state.factionFilter).ships))
            .sort((a,b) => a.pilots[0].initiative - b.pilots[0].initiative);
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <HeaderRoute />
                        <div className="content">
                            <Route exact path="/"/>
                            <Route exact path="/planning" render={()=> <PlanningContainer ships={pilots}/>} />
                            <Route exact path="/system"
                                   render={()=><div>{pilots.map(pilot => <System key={pilots.indexOf(pilot)} {...pilot}/>)}</div>}/>
                            <Route exact path="/activation" render={()=><Activation pilots={pilots} />}/>
                            <Route exact path="/engagement"/>
                            <Route exact path="/end-phase"/>
                            <Route exact path="/builder" render={()=> <Builder />}/>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
