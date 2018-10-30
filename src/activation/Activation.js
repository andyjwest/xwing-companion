import React, {Component} from 'react';
import ActivationCard from "./ActivationCard";
import {ACTIVATION_PHASE_MAP, buildPilot} from "../config";
import './activation.css';

class Activation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeShip: {},
            activeShipPhase: 0,
            pilots: this.props.pilotIds.map(pilotId => buildPilot(pilotId, this.props.factionShips)).sort((a,b) => a.pilots[0].initiative > b.pilots[0].initiative)
        }
    }

    nextShipPhase(){
        this.setState({activeShipPhase: this.state.activeShipPhase + 1});
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.pilots.map(pilot => <ActivationCard {...pilot}/>)}
                </div>
                <div className={'rule-reference'}></div>
            </div>
        )
    }
}

export default Activation;