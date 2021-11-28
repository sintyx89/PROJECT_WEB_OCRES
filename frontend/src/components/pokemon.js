import React from 'react';
import '../index.css';

export default class Pokemon extends React.Component {
    state = {
        name : 'Pikachu',
        height : '0',
        weight : '1',
        type : 'electric'
    };


    
    render () {
        const { pokemon } = this.props;

        return (
            <div class='Pokemon'>
                <div class='infoPokemon'>
                    {`Nom : ${pokemon.name}`}
                </div>
                <div class='infoPokemon'>
                    {`Taille : ${pokemon.height}`}
                </div>
                <div class='infoPokemon'>
                    {`Poids : ${pokemon.weight}`}
                </div>
                <div class='infoPokemon'>
                    {`Type : ${pokemon.type}`}
                </div>
            </div>
        );
    }
} 