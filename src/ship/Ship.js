import React, {PureComponent} from 'react';
import Dial from "./dial/Dial";
import './ship.css';
import ActionBar from "./ActionBar";
import factions from '../data/factions/factions.json';
import Icon from "../Icon";
import Stat from "./Stat";

const FACTION_ICON_MAP = new Map([
    ['rebel-alliance', 'rebel'],
    ['galactic-empire', 'empire'],
    ['scum-and-villainy', 'scum'],
    ['resistance', 'resistance'],
    ['first-order', 'firstorder'],
]);

class Ship extends PureComponent {
    render() {
        return (
            <div className='artwork-container'>
                <img className='artwork' src={this.props.pilots[0].artwork} alt={this.props.name}/>
                {/*<span className='top-right'>*/}
                {/*<Icon icon={FACTION_ICON_MAP.get(factions.find(faction => faction.name === this.props.faction).xws)}/>*/}
                {/*</span>*/}
                <div className='top-center'>{this.props.pilots[0].name}</div>
                <Dial dial={this.props.dial}/>
                <div className='bottom-center'>
                    {this.props.stats.map(stat => <Stat key={stat.type + stat.arc} {...stat}/>)}
                </div>
                <ActionBar actions={this.props.actions}/>
            </div>
        )
    }
}

export default Ship;