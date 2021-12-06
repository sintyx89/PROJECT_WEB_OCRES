import React from 'react';
import Button from '../components/button';
import '../index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class Nav extends React.Component {
    render() {
        const { users, changeUser } = this.props;

        return (
            <div class="container" id="listedresseur">
                <div class="row">
                    {users.map((user) => <Button text={user.name} onClick={() => changeUser(user.name)} />)}
                </div>
            </div>)
    }
}