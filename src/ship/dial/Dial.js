import React, {Component} from 'react';
import {covertDialToObject} from "../../githubApiParser";
import {maneuverSpeeds} from "../../config";
import ManeuverRow from "./ManeuverRow";

class Dial extends Component {

    constructor(props) {
        super(props);

        let dial = covertDialToObject(this.props.dial);
        maneuverSpeeds.sort((a, b) => b - a)
        this.state = {dial: dial};
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