import React, {Component} from 'react';
import './planning.css';
import Dial from "../ship/dial/Dial";
import Icon from "../Icon";
import ActionBar from "../ship/ActionBar";
import classNames from 'classnames';
import ShipIcon from "../ShipIcon";
import {ManeuverSelection} from "./ManeuverSelection";

class Planning extends Component {

    constructor(props) {
        super(props);
        this.state = {
            maneuver: {},
            locked: false,
            closed: true

        };
        this.updateManeuver = this.updateManeuver.bind(this);
        this.lockManeuver = this.lockManeuver.bind(this);
        this.resetManeuver = this.resetManeuver.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    updateManeuver(maneuver) {
        console.log(maneuver);
        this.setState({maneuver: maneuver})
    }

    toggle(){
        this.setState({closed:!(this.state.closed)});
    }

    lockManeuver(){
        console.log("need to add this to the redux state");
        console.log(this.state.maneuver);
    }

    resetManeuver(){
        this.setState({maneuver: {}})
    }

    render() {
        let pilot = this.props.pilots[0];

        return (
            <div className='planning'>
                <div className='planning full-flex ship-card-header' onClick={this.toggle}>
                    <div className='initiative header-icon'>{pilot.initiative}</div>
                    <div style={{flexGrow: 3}}>{pilot.name}</div>
                    <ShipIcon className='header-icon' shipId={this.props.xws}/>
                </div>
                <img className='artwork' src={pilot.artwork}/>
                <div className='full-flex'>
                    <button className='flex-item' onClick={this.lockManeuver}>Lock</button>
                    <ManeuverSelection {...this.state.maneuver}/>
                    <button className='flex-item' onClick={this.resetManeuver}>Reset</button>
                </div>
                <div className='full-flex'>
                    <div className='flex-column'>

                    </div>
                    <Dial dial={this.props.dial}
                          updateSelection={this.updateManeuver}/>
                    <ActionBar actions={this.props.actions}/>
                </div>
            </div>
        )
    }
}

export default Planning;
