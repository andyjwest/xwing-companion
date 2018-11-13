export const ADD_SHIP = 'ADD_SHIP';
export const REMOVE_SHIP = 'REMOVE_SHIP';
export const SET_MANEUVER = 'SET_MANEUVER';


// export const boundAddShip = ship => dispatch(addShip(ship));

export function addShip(ship){
    return {
        type: ADD_SHIP,
        ship: ship
    }
}

export function setManeuver(maneuver){
    return {
        type: SET_MANEUVER,
        maneuver: maneuver
    }
}
