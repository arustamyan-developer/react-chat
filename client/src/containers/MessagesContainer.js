import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MessagesList from "../components/MessagesList";
import WriteMessage from "../components/WriteMessage";
import {connect} from "react-redux";

class MessagesContainer extends Component {
    render() {
        return (
            <div className="chat_wrapper__right">
                <div className="header"/>
                <MessagesList messages={this.props.messages}/>
                <WriteMessage/>
            </div>
        );
    }
}

MessagesContainer.propTypes = {};
MessagesContainer.defaultProps = {};

export default connect((state) => {return {messages: state.messagesReducer}})(MessagesContainer);
