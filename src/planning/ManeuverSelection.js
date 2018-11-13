import React from 'react';
import Icon from "../Icon";
import classnames from 'classnames';

export function ManeuverSelection({speed, icon, color}){
    if(speed &&  icon){
        return (<div className={classnames('flex-item', )}>
            {speed} <Icon className='' icon={icon}
                  color={color}/>
        </div>);
    }
    return <div className='flex-item' style={{fontSize: '20px'}}>Select a Maneuver</div>
}
