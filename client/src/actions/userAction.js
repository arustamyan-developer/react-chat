export const CONNECTED_USER = 'CONNECTED_USER';
export const DISCONNECT_USER = 'DISCONNECT_USER';

export const connectedUserAction = (id, name, image) => {
  return {
      type: CONNECTED_USER,
      payload: {
          id, name, image
      }
  }
};

export const disconnectUserAction = (id) => {
    return {
        type: DISCONNECT_USER,
        payload: {
            id
        }
    }
};