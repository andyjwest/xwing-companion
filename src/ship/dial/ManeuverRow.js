import React, {PureComponent} from 'react';
import Icon from '../../Icon';

class ManeuverRow extends PureComponent {

    render() {
        let cells = [<td key={this.props.maneuvers[0].speed + 'label'}>{this.props.maneuvers[0].speed}</td>];

        this.props.columns.forEach(column => {
            let maneuver = this.props.maneuvers.find(man => man.key.substring(1, 2) === column);
            if (maneuver) {
                cells.push(
                    <td key={maneuver.bearing.type + maneuver.bearing.direction}
                        title={maneuver.bearing.type + " " + maneuver.bearing.direction} onClick={()=> this.props.updateSelection(maneuver)}>
                        <Icon
                            icon={maneuver.icon}
                            color={maneuver.color}/>
                    </td>)
            } else {
                cells.push(<td key={column}/>)
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