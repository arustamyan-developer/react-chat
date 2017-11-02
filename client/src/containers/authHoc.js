import React from 'react';
import PropTypes from 'prop-types';
import ws from '../utils/ws';

function authHoc(ChildComponent) {
    return class authHoc extends React.Component {

        auth() {
            let isAuth = true;

            if (localStorage.getItem('user')) {
                const {username, image} = JSON.parse(localStorage.getItem('user'))
                ws.createEmit('user info', {username, image});
            } else {
                let username = prompt('Write your name...');
                let image = prompt('Write your image url...');

                if (!username && !image) {
                    isAuth = false;
                } else {
                    window.localStorage.setItem('user', JSON.stringify({username, image}));
                    ws.createEmit('user info', {username, image});
                }
            }

            return isAuth;
        }

        noInfo() {
            return <div>
                No
            </div>
        }
        render() {
            return (
                <div>
                    {
                        !this.auth() ? this.noInfo() : <ChildComponent/>
                    }
                </div>
            );
        }
    }
}

authHoc.propTypes = {};
authHoc.defaultProps = {};

export default authHoc;
