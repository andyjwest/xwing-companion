import React, {Component} from 'react';
import './planning.css';
import ShipIcon from "../ShipIcon";

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
                </div>
            </div>
        );
    }
}

export default PlanningHeaderItem;
