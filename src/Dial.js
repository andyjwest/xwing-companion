import React, {Component} from 'react';
import {covertDialToObject} from "./githubApiParser";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class Dial extends Component {

    constructor(props) {
        super(props)
        this.state = {tableRows: []}
    }

    buildDialRow(speedManeuver) {
        this.setState({
            tableRows: this.state.tableRows.concat(<tr>

                maneuverRow.forEach(maneuver => {
                <td key={speedManeuver.key}>
                    <FontAwesomeIcon
                        icon={speedManeuver.faIconName}
                        style={{color: speedManeuver.color, transform: speedManeuver.iconRotation}}/>
                </td>
            })
            </tr>)
        })
    }

    render() {
        let dial = covertDialToObject(this.props.dial);


        let tableRows = [];
        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 9; j++) {
            }
            tableRows[i] = <tr>

            </tr>
            tableRows[i - 1] = <tr>
                {dial.filter(man => man.speed === i + "").map(speedManeuver =>
                    <td key={speedManeuver.key}>
                        <FontAwesomeIcon
                            icon={speedManeuver.faIconName}
                            style={{color: speedManeuver.color, transform: speedManeuver.iconRotation}}/>
                    </td>
                )}
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