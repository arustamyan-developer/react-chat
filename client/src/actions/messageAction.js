export const GET_MESSAGE = 'GET_MESSAGE';

export const getMessageAction = (text, image) => {
    return {
        type: GET_MESSAGE,
        payload: {text, image}
    }
};