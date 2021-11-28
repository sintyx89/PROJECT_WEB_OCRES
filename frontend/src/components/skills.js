import React from "react";

const API_URL = "https://pokeapi.co/api/v2/move/{id or name}/";

export default class Skill extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name : 'vive-attaque',
            accuracy : '100',
            pp : '20',
            priority : '8',
            power : '30',
            type : 'fight'
        }
    }

    render () {
        let skill = this.state;

        return (
            <div class='berry'>
                <div class='profileInfos'>
                    <div class='profileInfo'>
                        {`Nom: ${skill.name}`}
                    </div>
                    <div class='profileInfo'>
                        {`Précision: ${skill.accuracy}`}
                    </div>
                    <div class='profileInfo'>
                        {`PP: ${skill.pp}`}
                    </div>
                    <div class='profileInfo'>
                        {`Priorité: ${skill.priority}/8`}
                    </div>
                    <div class='profileInfo'>
                        {`Power: ${skill.power}`}
                    </div>
                    <div class='profileInfo'>
                        {`Type: ${skill.type}`}
                    </div>
                </div>
            </div>
        )
    }
}