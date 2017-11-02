import React from 'react';
import PropTypes from 'prop-types';

function User(props) {
    return (
        <div className="user">
            <div className="user__wrapper">
                <div className="user__avatar">
                    <img src={props.image} alt="" />
                </div>
                <div className="user__name">
                    {props.name}
                </div>
            </div>
        </div>
    );
}

User.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string
};
User.defaultProps = {};

export default User;
