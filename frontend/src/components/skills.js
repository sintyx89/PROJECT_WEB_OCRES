import React from "react";

const API_URL = "https://pokeapi.co/api/v2/move/{id or name}/";

export default class Skill extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'vive-attaque',
            accuracy: '100',
            pp: '20',
            priority: '8',
            power: '30',
            type: 'fight'
        }
    }

    render() {
        let skill = this.state;

        return (
            <div class='berry container' id="pokemon">

                <div class='row'>
                    <div class='profileInfo col-auto'>
                        {`Nom: ${skill.name}`}
                    </div>
                    <div class='profileInfo col-auto' id="pui">
                        {`Power: ${skill.power}`}

                    </div>
                </div>
                <div class='row'>
                    <div class='profileInfo col-auto' id="type">
                        {`Type: ${skill.type}`}

                    </div>
                    <div class='profileInfo col-auto' id="pp">
                        {`PP: ${skill.pp}`}

                    </div>
                </div>
                <div class='row'>
                    <div class='profileInfo col-auto' id="precision">
                        {`Précision: ${skill.accuracy}`}

                    </div>
                    <div class='profileInfo col-auto' id="priorite">
                        {`Priorité: ${skill.priority}/8`}
                    </div>
                </div>

            </div>
        )
    }
}