import React from 'react';
import PropTypes from 'prop-types';

function Search(props) {
    return (
        <div className="search">
            <input type="text" className="search__input" placeholder="Search" />
        </div>
    );
}

Search.propTypes = {};
Search.defaultProps = {};

export default Search;
