import React, {Component} from 'react';
import './planning.css';
import classnames from "classnames";
import Dial from "../ship/dial/Dial";
import Icon from "../Icon";

class Planning extends Component {

    constructor(props) {
        super(props);
        this.state = {
            maneuver: {}
        };
        this.updateManeuver = this.updateManeuver.bind(this);
    }

    updateManeuver(maneuver) {
        console.log(maneuver);
        this.setState({maneuver: maneuver})
    }

    render() {
        return (
            <div className='artwork-container'>
                <img className='artwork' src={this.props.pilots[0].artwork}/>
                <div className='overlay'>
                    <div className='ship-card-header'>
                        <div className='initiative'>PS: {this.props.pilots[0].initiative}</div>
                        <div className='pilot-name'>{this.props.pilots[0].name}</div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <Dial style={{flexGrow:2}} dial={this.props.dial} updateSelection={this.updateManeuver}/>
                        <div>
                            {this.state.maneuver.speed} <Icon icon={this.state.maneuver.icon}
                                                              color={this.state.maneuver.color}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Planning;