import {ADD_SHIP, REMOVE_SHIP} from "../actions/actions";

const list = (state = [], action) => {
    switch (action.type) {
        case ADD_SHIP:
            return Object.assign({}, state, {
                ships: [...state.ships, action.ship]
            });
        case REMOVE_SHIP:
            return Object.assign({}, state, {
            ships: [...state.ships.splice(state.ships.findIndex(action.ship))]
        })
    }
    return state;
}

export default list;