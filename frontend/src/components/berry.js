import React from "react";
import '../index.css';

export default class Berry extends React.Component {

    render() {
        // utilise la props (les data de l'API), les affiche, teste qu'elles sont récupéré
        const { data } = this.props;
        console.log("data", data);
        if (!data) return null;

        // get API data
        const name = data.data.name;
        const growth_time = data.data.growth_time;
        const max_harvest = data.data.max_harvest;
        const natural_gift_power = data.data.natural_gift_power;

        // affichage des infos
        return (
            <div class='berry' id='pokemon'>
                <div class='row'>
                    <div class='profileInfo col-auto'>
                        {`Nom: ${name}`}
                    </div>
                    <div class='profileInfo col-auto'>
                        {`Temps de pousse: ${growth_time} h`}
                    </div>
                </div>
                <div class='row'>
                    <div class='profileInfo col-auto' id="nbrrec">
                        {`Nombre de récolte: ${max_harvest}`}
                    </div>
                    <div class='profileInfo col-auto' id="berrypui">
                        {`Puissance : ${natural_gift_power}`}


                    </div>
                </div>
            </div>
        );
    }

}