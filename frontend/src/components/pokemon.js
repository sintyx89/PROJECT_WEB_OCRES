import React from 'react';
import axios from "axios";
import '../index.css';

const API_URL = "";

export default class Pokemon extends React.Component {
    
    render () {
        
        // utilise la props (les data de l'API), les affiche, teste qu'elles sont récupéré
        const { data } = this.props;
        console.log("data", data);
        if (!data) return null;
        
        // get API data
        const { name } = data.name;
        const { height } = data.height;
        const { weight } = data.weight;
        const { type } = data.types[0].type;
        

        // affichage des infos
        return (
            <div class='Pokemon'>
                <div class='infoPokemon'>
                    {`Nom : ${name}`}
                </div>
                <div class='infoPokemon'>
                    {`Taille : ${height} m`}
                </div>
                <div class='infoPokemon'>
                    {`Poids : ${weight} kg`}
                </div>
                <div class='infoPokemon'>
                    {`Type : ${type}`}
                </div>
            </div>
        );
    }
} 