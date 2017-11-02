import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UsersContainer from "./UsersContainer";
import MessagesContainer from "./MessagesContainer";
import authHoc from "./authHoc";

class ChatWrap extends Component {
    render() {
        return (
            <div className='flex'>
                <UsersContainer/>
                <MessagesContainer/>
            </div>
        );
    }
}

ChatWrap.propTypes = {};
ChatWrap.defaultProps = {};

export default authHoc(ChatWrap);
