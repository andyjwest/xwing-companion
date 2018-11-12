import React, {Component} from 'react';
import './planning.css';
import ShipIcon from "../ShipIcon";
import Icon from "../Icon";

class PlanningHeaderItem extends Component {

    render() {
        let pilot = this.props.pilots[0];
        return (
            <div className='planning-header-card' onClick={this.props.updateShip}>
                <div className='full-flex'>
                    <div className='initiative' style={{lineHeight: 3}}>{pilot.initiative}</div>
                    <div style={{flexGrow: 1}}>
                        <div>{pilot.name}</div>
                        <ShipIcon className='header-icon' shipId={this.props.xws}/>
                    </div>
                    {/*<div className='maneuver'>*/}
                        {/*{this.props.maneuver.speed} <Icon icon={this.props.maneuver.icon}*/}
                                                          {/*color={this.props.maneuver.color}/>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}

export default PlanningHeaderItem;
