import React, {Component} from 'react';
import {maneuverSpeeds} from "../../config";
import ManeuverRow from "./ManeuverRow";
import {maneuverColumns} from "../../config";

const referenceMap = new Map([
    ['A', {key: 'A', direction: 'Left', type: 'Reverse Bank', icon: 'reversebankleft'}],
    ['E', {key: 'E', direction: "Left", type: "Tallon Roll", icon: 'trollleft'}],
    ['L', {key: 'L', direction: "Left", type: "Segnor's Loop", icon: 'sloopleft'}],
    ['T', {key: 'T', direction: "Left", type: "Turn", icon: 'turnleft'}],
    ['B', {key: 'B', direction: "Left", type: "Bank", icon: 'bankleft'}],
    ['F', {key: 'F', direction: null, type: "Straight", icon: 'straight'}],
    ['S', {key: 'S', direction: null, type: "Reverse Straight", icon: 'reversestraight'}],
    ['N', {key: 'N', direction: "Right", type: "Bank", icon: 'bankright'}],
    ['Y', {key: 'Y', direction: "Right", type: "Turn", icon: 'turnright'}],
    ['P', {key: 'P', direction: "Right", type: "Segnor's Loop", icon: 'sloopright'}],
    ['R', {key: 'R', direction: "Right", type: "Tallon Roll", icon: 'trollright'}],
    ['D', {key: 'D', direction: "Right", type: "Reverse Bank", icon: 'reversebankright'}],
    ['K', {key: 'K', direction: null, type: "Koiogran Turn", icon: 'kturn'}],
    ['O', {key: 'O', direction: null, type: "Stationary", icon: 'stop'}]
]);

const colorReference = new Map([
    ['B', 'Blue'],
    ['W', 'White'],
    ['R', 'Red']
]);

class Dial extends Component {

    constructor(props) {
        super(props);
        maneuverSpeeds.sort((a, b) => b - a);
        this.state = {dial: null};
    }

    componentWillMount(){
        this.setState({dial:this.covertDialToObject(this.props.dial)});
    }

    covertDialToObject(dial) {
        if (dial) {
            return dial.map(man => {
                let array = man.split("");
                if(referenceMap.get(array[1])){
                    let maneuverObject = referenceMap.get(array[1]);
                    return {
                        key: man,
                        speed: Dial.calculateSpeed(parseInt(array[0]), maneuverObject),
                        bearing: {
                            type: maneuverObject.type,
                            direction: maneuverObject.direction
                        },
                        color: colorReference.get(array[2]),
                        icon: maneuverObject.icon
                    };
                }else{
                    return {};
                }
            });
        }
        return null;
    }

    static calculateSpeed(speed, maneuverObject){
        if(maneuverObject.type.includes("Reverse")){
            return -1 * speed;
        }
        return speed;
    }

    render() {
        let tableRows = [];
        let columns = maneuverColumns.filter(column => this.state.dial.map(dial => dial.key.split('')[1]).includes(column));
        for (let i = 0; i < maneuverSpeeds.length; i++) {
            let maneuvers = this.state.dial.filter(dial => dial.speed === maneuverSpeeds[i]);
            if(maneuvers.length > 0){
                tableRows.push(<ManeuverRow key={i + '-maneuver-row'} maneuvers={maneuvers} columns={columns} updateSelection={this.props.updateSelection}/>);
            }
        }
        return (
            <table className='dial'>
                <tbody>
                {tableRows}
                </tbody>
            </table>
        );
    }
}

export default Dial;