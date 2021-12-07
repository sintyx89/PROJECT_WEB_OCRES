import React from 'react';
import '../index.css';

export default class Pokemon extends React.Component {
    
    render () {
        
        // utilise la props (les data de l'API), les affiche, teste qu'elles sont récupéré
        const { data } = this.props;
        //console.log("data", data);
        if (!data) return null;
        
        // get API data
        const name = data.data.name;
        const height = parseFloat(data.data.height)/10;
        const weight = parseFloat(data.data.weight)/10;
        const sprite = data.data.sprites.front_default;
        const type = data.data.types[0].type.name;
       
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
                <div>
                    <img
                        src={sprite}
                    />
                </div>
            </div>
        );
    }
} 