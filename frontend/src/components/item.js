import React from "react";
import '../index.css';

export default class Item extends React.Component {

    render () {
        // utilise la props (les data de l'API), les affiche, teste qu'elles sont récupéré
        const { data } = this.props;
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
            <div class='berry'>
                <div class='profileInfos'>
                    <div class='profileInfo'>
                        {`Nom: ${name}`}
                    </div>
                    <div class='profileInfo'>
                        {`Prix: ${cost} `}
                    </div>
                    <div class='profileInfo'>
                        {`Attribut: ${attributes}`}
                    </div>
                    <div class='profileInfo'>
                        {`Catégorie: ${category}`}
                    </div>
                    <div>
                        <img
                            src={sprite}
                        />
                    </div>
                </div>
            </div>
        )
    }
}