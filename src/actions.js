export const ADD_SHIP = 'ADD_SHIP';
export const REMOVE_SHIP = 'REMOVE_SHIP';


export const boundAddShip = ship => dispatch(addShip(ship))

export function addShip(ship){
    return {
        type: ADD_SHIP,
        ship: ship
    }
}