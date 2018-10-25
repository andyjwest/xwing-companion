import React, {PureComponent} from 'react';
import {maneuverColumns} from "../../config";
import Icon from '../../Icon';

class ManeuverRow extends PureComponent {

    render() {
        let cells = [];

        maneuverColumns.forEach(column => {
            let maneuver = this.props.maneuvers.find(man => man.key.substring(1,2) === column);
            if(maneuver){
                cells.push(<td key={maneuver.key} title={maneuver.bearing.type + " " + maneuver.bearing.direction}>
                    <Icon
                        icon={maneuver.icon}
                        color={maneuver.color}/>
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