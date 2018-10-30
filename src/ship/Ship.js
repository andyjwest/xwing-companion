import React, {Component} from 'react';
import Dial from "./dial/Dial";
import './ship.css';
import ActionBar from "./ActionBar";
import factions from '../data/factions/factions.json';
import Icon from "../Icon";
import Stats from "./Stats";

const FACTION_ICON_MAP = new Map([
    ['rebel-alliance', 'rebel'],
    ['galactic-empire', 'empire'],
    ['scum-and-villainy', 'scum'],
    ['resistance', 'resistance'],
    ['first-order', 'firstorder'],
]);

class Ship extends Component {

    render() {
        return (
            <div>
                <div className='artwork-container'>
                    <img className='artwork' src={this.props.pilots[0].artwork} alt={this.props.name}/>
                    <div className='overlay'/>
                    <div className='text'>
                        <Icon icon={FACTION_ICON_MAP.get(factions.find(faction => faction.name === this.props.faction).xws)}/>
                        <div>{this.props.name}</div>
                    </div>
                </div>
                <ActionBar actions={this.props.actions}/>
                <Dial dial={this.props.dial}/>
                <Stats stats={this.props.stats}/>
            </div>
        )
    }
}

export default Ship;