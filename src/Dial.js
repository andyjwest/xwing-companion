import React, { Component } from 'react';
import {covertDialToObject} from "./githubApiParser";

class Dial extends Component {

    render(){
        let dial = covertDialToObject(this.props.dial);

        let tableRows = [];
        for (let i = 1; i < 6; i++) {
            tableRows[i-1] = <tr>
                {dial.filter(man => man.speed === i +"").map(speedManeuver => <td>
                    {speedManeuver.bearing.direction} {speedManeuver.bearing.type} {speedManeuver.color}
                </td>)}
            </tr>;
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