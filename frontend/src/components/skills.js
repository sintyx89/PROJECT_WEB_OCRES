import React from "react";

const API_URL = "https://pokeapi.co/api/v2/move/{id or name}/";

export default class Skill extends React.Component {

    render () {
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
            <div class='berry'>
                <div class='profileInfos'>
                    <div class='profileInfo'>
                        {`Nom: ${name}`}
                    </div>
                    <div class='profileInfo'>
                        {`Précision: ${accuracy}`}
                    </div>
                    <div class='profileInfo'>
                        {`PP: ${pp}`}
                    </div>
                    <div class='profileInfo'>
                        {`Priorité: ${priority}/8`}
                    </div>
                    <div class='profileInfo'>
                        {`Power: ${power}`}
                    </div>
                    <div class='profileInfo'>
                        {`Type: ${type}`}
                    </div>
                </div>
            </div>
        )
    }
}