import React from "react";
import '../index.css';

export default class Item extends React.Component {

    render() {
        // utilise la props (les data de l'API), les affiche, teste qu'elles sont récupéré
        const { data, option } = this.props;
        console.log("data", data);
        if (!data) return null;

        // get API data
        const name = data.data.names[0].name;
        const cost = data.data.cost;
        const attributes = data.data.attributes[0].name;
        const category = data.data.category.name;
        const sprite = data.data.sprites.default;

        // affichage des infos
        return (
            <div class='berry container' id='pokemon'>
                <div class="row">
                    <div class="col">
                        <div class='row'>
                            <div class='profileInfo col-auto'>
                                {`Nom: ${name}`}
                            </div>
                            <div class='profileInfo col-auto'>
                                {`Prix: ${cost} `}
                            </div>
                        </div>
                        <div class='row'>
                            <div class='profileInfo col-auto' id="objatt">
                                {`Attribut: ${attributes}`}
                            </div>
                            <div class='profileInfo col-auto' id="objcat">
                                {`Catégorie: ${category}`}
                            </div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div>
                            {
                                option && <img src={sprite} />
                            }
                        </div>
                    </div>
                </div>
            </div>



        );
    }
}