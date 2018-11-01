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
        ["Front Arc",{icon:'frontarc', color: 'Red'}],
        ["Bullseye Arc",{icon:'bullseyearc', color: 'Red'}],
        ["Single Turret Arc",{icon:'singleturretarc', color: 'Red'}],
        ["Rear Arc",{icon:'reararc', color: 'Red'}],
        ["weaponrangenobonus",{icon:'rangebonusindicator', color:'Red'}]
]);

class Stat extends PureComponent {

    buildStatIcon() {
        let stat = STAT_MAPPING.get(this.props.type);

        if (stat) {
            if(stat.arc){
                let arcStat = STAT_MAPPING.get(stat.arc);
                if(arcStat){
                    return <Icon icon={arcStat.icon} color={arcStat.color}/>;
                }
                console.error("This arc is not mapped!");
                console.error(stat);
            }
            return <Icon icon={stat.icon} color={stat.color}/>;
        }
        console.error("This stat is not mapped!");
        console.error(stat);
        return <div/>
    }

    render() {
        return (
            <div className='stat'>
                {this.buildStatIcon()}
                <div style={{color: 'white'}}>{this.props.value}</div>
            </div>
        );
    }
}

export default Stat;