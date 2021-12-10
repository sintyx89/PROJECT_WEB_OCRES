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

    render() {
        const { user } = this.props;

        return (
            <div class="row">
                <div class='user'>
                    <div class='profileInfos'>
                        <div class='profileInfo'>
                            {`Prenom: ${user.first_name}`}
                        </div>
                        <div class='profileInfo'>
                            {`Nom: ${user.name}`}
                        </div>
                        <div class='profileInfo' id='ddn'>
                            {`Date de naissance: ${user.birth_date}`}
                        </div>
                        <div class='profileInfo' id='ndb'>
                            {`Nombre de Badge: ${user.nbr_badge}`}
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}