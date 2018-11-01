import React, {Component} from 'react';
import ActivationCard from "./ActivationCard";
import './activation.css';

class Activation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeShip: {},
            activeShipPhase: 0,
        }
    }

    nextShipPhase(){
        this.setState({activeShipPhase: this.state.activeShipPhase + 1});
    }

    render() {
        return (
            <div>
                <div>
                    {this.props.pilots.map(pilot => <ActivationCard key={pilot.xws} {...pilot}/>)}
                </div>
                <div className={'rule-reference'}></div>
            </div>
        )
    }
}

export default Activation;