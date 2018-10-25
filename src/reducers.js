import {ADD_SHIP, REMOVE_SHIP} from "./actions";

const initialState = {
    ships: []
};

function xwingApp(state = initialState, action) {
    switch (action.type) {
        case ADD_SHIP:
            return Object.assign({}, state, {
                ships: [...state.ships, action.ship]
            })
    }
    return state;
}

