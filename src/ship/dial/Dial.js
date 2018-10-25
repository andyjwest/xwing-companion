import React, {Component} from 'react';
import {maneuverSpeeds} from "../../config";
import ManeuverRow from "./ManeuverRow";

const referenceMap = new Map([
    ['A', {direction: 'Left', type: 'Reverse Bank', icon: 'reversebankleft'}],
    ['E', {direction: "Left", type: "Tallon Roll", icon: 'trollleft'}],
    ['L', {direction: "Left", type: "Segnor's Loop", icon: 'sloopleft'}],
    ['T', {direction: "Left", type: "Turn", icon: 'turnleft'}],
    ['B', {direction: "Left", type: "Bank", icon: 'bankleft'}],
    ['F', {direction: null, type: "Straight", icon: 'straight'}],
    ['S', {direction: null, type: "Reverse Straight", icon: 'reversestraight'}],
    ['N', {direction: "Right", type: "Bank", icon: 'bankright'}],
    ['Y', {direction: "Right", type: "Turn", icon: 'turnright'}],
    ['P', {direction: "Right", type: "Segnor's Loop", icon: 'sloopright'}],
    ['R', {direction: "Right", type: "Tallon Roll", icon: 'trollright'}],
    ['D', {direction: "Right", type: "Reverse Bank", icon: 'reversebankright'}],
    ['K', {direction: null, type: "Koiogran Turn", icon: 'kturn'}],
    ['O', {direction: null, type: "Stationary", icon: 'stop'}]
]);

const colorReference = new Map([
    ['B', 'Blue'],
    ['W', 'White'],
    ['R', 'Red']
]);

class Dial extends Component {

    constructor(props) {
        super(props);


        maneuverSpeeds.sort((a, b) => b - a)
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
                    return {
                        key: man,
                        speed: parseInt(array[0]),
                        bearing: {
                            type: referenceMap.get(array[1]).type,
                            direction: referenceMap.get(array[1]).direction
                        },
                        color: colorReference.get(array[2]),
                        icon: referenceMap.get(array[1]).icon
                    };
                }else{
                    return {};
                }
            });
        }
        return null;
    }

    render() {
        let tableRows = [];
        for (let i = 0; i < maneuverSpeeds.length; i++) {
            let maneuvers = this.state.dial.filter(dial => dial.speed === maneuverSpeeds[i]);
            if(maneuvers.length > 0){
                tableRows.push(<ManeuverRow maneuvers={maneuvers}/>)
            }
        }
        return (
            <table>
                <tbody>
                {tableRows}
                </tbody>
            </table>
        );
    }
}

export default Dial;