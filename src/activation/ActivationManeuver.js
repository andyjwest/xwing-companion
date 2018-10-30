import React, {Component} from 'react';
import Icon from "../Icon";
import './activation-maneuver.css';

class ActivationManeuver extends Component {

    /*
        {
            icon
            color
            hidden
        }
     */

    render() {
        return (
            <div className='maneuver'>
                <div className='maneuver-text'>
                    {this.props.speed} <Icon icon={this.props.icon} color={this.props.color}/>
                </div>
            </div>
        )
    }
}

export default ActivationManeuver;