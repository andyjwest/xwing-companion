import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {maneuverColumns} from "../../config";

class ManeuverRow extends Component {

    render() {
        let cells = [];

        maneuverColumns.forEach(column => {
            let maneuver = this.props.maneuvers.find(man => man.key.substring(1,2) === column);
            if(maneuver){
                cells.push(<td key={maneuver.key} title={maneuver.bearing.type + " " + maneuver.bearing.direction}>
                    <FontAwesomeIcon
                        icon={maneuver.faIconName}
                        style={{color: maneuver.color, transform: maneuver.iconRotation}}/>
                </td>)
            }else{
                cells.push(<td/>)
            }
        });
        return (
            <tr>
                {cells}
            </tr>
        );
    }
}

export default ManeuverRow;