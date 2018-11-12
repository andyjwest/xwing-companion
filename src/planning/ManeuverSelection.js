import React from 'react';
import Icon from "../Icon";

export function ManeuverSelection({speed, icon, color}){
    if(speed &&  icon){
        return (<div className='flex-item full-flex'>
            <div className='flex-item'>{speed}</div>
            <Icon className='flex-item' icon={icon}
                  color={color}/>
        </div>);
    }
    return <div>Select a Maneuver</div>
}