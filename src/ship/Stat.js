import React, {PureComponent} from 'react';
import Icon from "../Icon";

const STAT_MAPPING = new Map([
        ["attack",{icon:'attack', color:'Red'}],
        ["agility",{icon:'agility', color:'Green'}],
        ["hull",{icon:'hull', color: 'Yellow'}],
        ["shields",{icon:'shield', color: 'Blue'}],
        ["force",{icon:'forcepower', color: 'Blue'}],
        ["charge",{icon:'charge-outline', color: 'Yellow'}],
        ["doubleturretarc",{icon:'doubleturretarc', color: 'Red'}],
        ["fullfrontarc",{icon:'fullfrontarc', color: 'Red'}],
        ["frontarc",{icon:'frontarc', color: 'Red'}],
        ["bullseyearc",{icon:'bullseyearc', color: 'Red'}],
        ["singleturretarc",{icon:'singleturretarc', color: 'Red'}],
        ["reararc",{icon:'reararc', color: 'Red'}],
        ["weaponrangenobonus",{icon:'rangebonusindicator', color:'Red'}]
]);

class Stat extends PureComponent {

    buildStatIcon() {
        let stat = STAT_MAPPING.get(this.props.type);

        if (stat) {
            return <Icon icon={stat.icon} color={stat.color}/>;
        }
        console.error("This stat is not mapped!");
        console.error(stat);
        return <div/>
    }

    render() {
        return (
            <div>
                {this.buildStatIcon()}
                <span style={{color: 'white'}}>{this.props.value}</span>
            </div>
        );
    }
}

export default Stat;