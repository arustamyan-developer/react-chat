import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Search from "../components/Search";
import UsersList from "../components/UsersList";
import connect from "react-redux/es/connect/connect";

class UsersContainer extends Component {
    render() {
        return (
            <div className="chat_wrapper__left">
                <Search/>
                <UsersList users={this.props.userReducer}/>
            </div>
        );
    }
}

UsersContainer.propTypes = {};
UsersContainer.defaultProps = {};

export default connect((state) => {return {userReducer: state.userReducer}})(UsersContainer);
