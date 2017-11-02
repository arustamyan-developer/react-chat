import React from 'react';
import PropTypes from 'prop-types';

function Message(props) {
    return (
        <div className="message">
            <div className="message__user__avatar">
                <img src={props.image} alt="" />
            </div>
            <div className="message__text">
                <p>{props.text}</p>
            </div>
        </div>
    );
}

Message.propTypes = {
    image: PropTypes.string,
    text: PropTypes.string
};
Message.defaultProps = {};

export default Message;
