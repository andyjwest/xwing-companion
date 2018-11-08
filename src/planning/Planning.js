import React, {Component} from 'react';
import './planning.css';
import Dial from "../ship/dial/Dial";
import Icon from "../Icon";
import ActionBar from "../ship/ActionBar";
import classNames from 'classnames';

class Planning extends Component {

    constructor(props) {
        super(props);
        this.state = {
            maneuver: {},
            locked:false
        };
        this.updateManeuver = this.updateManeuver.bind(this);
        this.lockManeuver = this.lockManeuver.bind(this);
        this.resetManeuver = this.resetManeuver.bind(this);
    }

    updateManeuver(maneuver) {
        console.log(maneuver);
        this.setState({maneuver: maneuver})
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
            <div>
                <div className='artwork-container'>
                    <img className='artwork' src={pilot.artwork}/>
                    <div className='overlay'>
                        <div className={classNames('ship-card-header', 'full-flex')}>
                            <div className='initiative'>{pilot.initiative}</div>
                            <div style={{flexGrow: 3}}>
                                <div>{pilot.name}</div>
                                <div style={{fontSize: '.4em'}}>{pilot.caption}</div>
                            </div>
                        </div>
                        <div className='maneuver'>
                            {this.state.maneuver.speed} <Icon icon={this.state.maneuver.icon}
                                                              color={this.state.maneuver.color}/>
                        </div>
                    </div>
                </div>
                <div className='full-flex'>
                    <div className='flex-column'>
                        <button onClick={this.lockManeuver}>Lock</button>
                        <button onClick={this.resetManeuver}>Reset</button>
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