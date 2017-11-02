import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Message from "./Message";

class MessagesList extends Component {
    render() {
        return (
            <div className="message_list">
                <div className="container">
                    {
                        this.props.messages.map((m, id) => <Message key={id} text={m.text} image={m.image}/>)
                    }
                </div>
            </div>
        );
    }
}

MessagesList.propTypes = {
    messages: PropTypes.array
};
MessagesList.defaultProps = {};

export default MessagesList;
