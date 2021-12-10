import React from 'react';
import '../index.css';

const API_URL = "";

export default class User extends React.Component {
    constructor(props) {
        super(props);
        // pour l'affichage par défaut
        this.state = {
            name: 'prenom',
            surname: 'nom',
            birthdate: '00/00/0000',
            badge: '0'
        }
    }

    render() {
        // utilise la props (les data de l'API), les affiche, teste qu'elles sont récupéré
        const { data } = this.props;
        //console.log("data", data);
        if (!data) return null;

        // get API data
        const name = data.name;
        const first_name = data.first_name;
        const birth_date = data.birth_date;
        const nbr_badge = data.nbr_badge;

        return (
            <div class="row">
                <div class='user'>
                    <div class='profileInfos'>
                        <div class='profileInfo'>
                            {`Prenom: ${first_name}`}
                        </div>
                        <div class='profileInfo'>
                            {`Nom: ${name}`}
                        </div>
                        <div class='profileInfo' id='ddn'>
                            {`Date de naissance: ${birth_date}`}
                        </div>
                        <div class='profileInfo' id='ndb'>
                            {`Nombre de Badge: ${nbr_badge}`}
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}