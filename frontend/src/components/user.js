import React from 'react';
import '../index.css';

const API_URL = "";

export default class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'prenom',
            surname: 'nom',
            birthdate: '00/00/0000',
            badge: '0'
        }
    }

    render () {
        const {user} = this.props;

        return (
            <div class='user'>
                <div class='profileInfos'>
                    <div class='profileInfo'>
                        {`Prenom: ${user.name}`}
                    </div>
                    <div class='profileInfo'>
                        {`Nom: ${user.surname}`}
                    </div>
                    <div class='profileInfo' id='ddn'>
                        {`Date de naissance: ${user.birthdate}`}
                    </div>
                    <div class='profileInfo' id='ndb'>
                        {`Nombre de Badge: ${user.badge}`}
                    </div>
                </div>
            </div>
        )
    }

}