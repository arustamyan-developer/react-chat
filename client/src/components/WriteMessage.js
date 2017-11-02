import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ws from '../utils/ws'

class WriteMessage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };

        this.sendMessage = this.sendMessage.bind(this);
        this.changeText = this.changeText.bind(this);
    }

    changeText(e) {
        let {value: text} = e.target;

        this.setState({text})
    }

    sendMessage() {
        ws.createEmit('chat message', {text: this.state.text});
        this.setState({text: ''})
    }

    render() {
        return (
            <div className="write_message">
                <input type="text" placeholder="Type your message..."
                       value={this.state.text}
                       onChange={this.changeText}
                />
                <a href="#" className="btn-send" onClick={this.sendMessage}>
                    <img src="assets/images/send-message.png" alt="" />
                </a>
            </div>
        );
    }
}

WriteMessage.propTypes = {};
WriteMessage.defaultProps = {};

export default WriteMessage;
