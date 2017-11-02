import React, {Component} from 'react';
import PropTypes from 'prop-types';
import User from "./User";

class UsersList extends Component {
    render() {
        return (
            <div className="users_list">
                {
                    this.props.users.map((u, id) => <User key={id} name={u.name} image={u.image}/>)
                }
            </div>
        );
    }
}

UsersList.propTypes = {
    users: PropTypes.array
};
UsersList.defaultProps = {};

export default UsersList;
