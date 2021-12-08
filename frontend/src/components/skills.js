import React from "react";

const API_URL = "https://pokeapi.co/api/v2/move/{id or name}/";

export default class Skill extends React.Component {


    render() {
        // utilise la props (les data de l'API), les affiche, teste qu'elles sont récupéré
        const { data } = this.props;
        //console.log("data", data);
        if (!data) return null;

        // get API data
        const name = data.data.name;
        const accuracy = data.data.accuracy;
        const pp = data.data.pp;
        const priority = data.data.priority;
        const power = data.data.power;
        const type = data.data.type.name;

        // affichage des infos

        return (
            <div class='berry container' id="pokemon">

                <div class='row'>
                    <div class='profileInfo col-auto'>
                        {`Nom: ${name}`}
                    </div>
                    <div class='profileInfo col-auto' id="pui">
                        {`Power: ${power}`}

                    </div>
                </div>
                <div class='row'>
                    <div class='profileInfo col-auto' id="type">
                        {`Type: ${type}`}

                    </div>
                    <div class='profileInfo col-auto' id="pp">
                        {`PP: ${pp}`}

                    </div>
                </div>
                <div class='row'>
                    <div class='profileInfo col-auto' id="precision">
                        {`Précision: ${accuracy}`}

                    </div>
                    <div class='profileInfo col-auto' id="priorite">
                        {`Priorité: ${priority}/8`}

                    </div>
                </div>
            </div>
        );
    }
}