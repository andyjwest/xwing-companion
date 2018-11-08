import React, {PureComponent} from 'react';
import factions from '../data/factions/factions';
import Icon from "../Icon";

class System extends PureComponent{
    render(){
        let pilot = this.props.pilots[0];

        let pilotName = <div>{pilot.name}</div>;
        if(pilot.limited > 0){
            pilotName = <div><Icon icon='unique' /> {pilot.name}</div>
        }

        return (
            <div>
                <img className='artwork' src={pilot.artwork}/>
                <div style={{display: 'flex', width: '100%'}}>
                    <div style={{flexGrow:1}}>{pilot.initiative}</div>
                    <div style={{flexGrow:3}}>
                        <div>{pilotName}</div>
                        <div>{pilot.caption}</div>
                    </div>
                    <Icon style={{flexGrow:1}} icon={factions.find(faction => this.props.faction === faction.name).icon} />
                </div>
                <div>Speed</div>
                <div>Bearing</div>
            </div>
        )
    }
}

export default System;