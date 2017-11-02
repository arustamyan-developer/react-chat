import createStore from '../store'
import {connectedUserAction, disconnectUserAction} from "../actions/userAction";
import {getMessageAction} from "../actions/messageAction";

export default (() => {
    const socket = window.io('http://localhost:4200');

    socket.on('connected user', function ({id, userName, imageUser}) {
        console.log('connected user');
        createStore.dispatch(connectedUserAction(id, userName, imageUser))
    });

    socket.on('disconnect', function (id) {
        console.log('disconnect user', id);
        createStore.dispatch(disconnectUserAction(id))
    });

    socket.on('chat message', function ({text, imageUser}) {
        console.log('chat message');
        createStore.dispatch(getMessageAction(text, imageUser))
    });

    let createEmit = function (actionName, data) {
        socket.emit(actionName, data);
    };

    return {createEmit, socket};
})();