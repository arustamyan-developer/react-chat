import {GET_MESSAGE} from "../actions/messageAction";

const initialState = [];

const messagesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_MESSAGE:
            return [...state, {text: payload.text, image: payload.image}];
        default:
            return state;
    }
};

export default messagesReducer;