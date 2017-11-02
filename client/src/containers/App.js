import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ChatWrap from "./ChatWrap";

class App extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className="chat_wrapper flex">
                    <ChatWrap/>
                </div>
            </div>
        );
    }
}

export default App;
