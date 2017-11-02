import {CONNECTED_USER, DISCONNECT_USER} from "../actions/userAction";

const initialState = [];

const userReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case CONNECTED_USER:
            return [...state, {id: payload.id, name: payload.name, image: payload.image}];
        case DISCONNECT_USER:
            return state.filter(u => {
                if (u.id === payload.id) {
                    return;
                }

                return u;
            });
        default:
            return state;
    }
};

export default userReducer;