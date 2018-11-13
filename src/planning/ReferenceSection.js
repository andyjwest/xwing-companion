import React from 'react';

function ReferenceSection({ability, shipAbility}) {
    let abilityElement = "";
    if (ability) {
        abilityElement =
            <div>
                <h1>Pilot Ability</h1>
                <p>{ability}</p>
            </div>
    }

    let shipElement = "";
    if(shipAbility){
        shipElement =
        <div>
            <h1>{shipAbility.name}</h1>
            <p>{shipAbility.text}</p>
        </div>
    }
    return (
        <div>
            {abilityElement}
            {shipElement}
        </div>);
}

export default ReferenceSection;
