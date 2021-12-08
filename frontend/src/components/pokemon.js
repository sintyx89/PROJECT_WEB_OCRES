import React from 'react';
import '../index.css';

export default class Pokemon extends React.Component {


    render() {
        // utilise la props (les data de l'API), les affiche, teste qu'elles sont récupéré
        const { data } = this.props;
        //console.log("data", data);
        if (!data) return null;

        // get API data
        const name = data.data.name;
        const height = parseFloat(data.data.height) / 10;
        const weight = parseFloat(data.data.weight) / 10;
        const sprite = data.data.sprites.front_default;
        const type = data.data.types[0].type.name;

        // affichage des infos

        return (
            <div class='Pokemon container' id='pokemon'>
                <div class="row">
                    <div class="col">
                        <div class='row'>
                            <div class='infoPokemon col-auto'>
                                {`Nom : ${name}`}
                            </div>
                            <div class='infoPokemon col-auto' id="taille">
                                {`Taille : ${height} m`}
                            </div>
                        </div>
                        <div class='row'>
                            <div class='infoPokemon col-auto' id="poids">
                                {`Poids : ${weight} kg`}
                            </div>
                            <div class='infoPokemon col-auto' id="poktype">
                                {`Type : ${type}`}
                            </div>
                        </div>
                        <div class="col">
                            <div>
                                <img
                                    src={sprite}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}