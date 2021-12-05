import React from 'react';
import '../index.css';

const API_URL = "";

export default class Pokemon extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Pikachu',
            height: '0,4',
            weight: '7,0',
            type: 'electric'
        }
    }

    render() {
        let pokemon = this.state;

        return (
            <div class='Pokemon container' id='pokemon'>
                <div class='row'>
                    <div class='infoPokemon col-auto'>
                        {`Nom : ${pokemon.name}`}
                    </div>
                    <div class='infoPokemon col-auto'>
                        {`Taille : ${pokemon.height} m`}
                    </div>
                </div>
                <div class='row'>
                    <div class='infoPokemon col-auto'>
                        {`Poids : ${pokemon.weight} kg`}
                    </div>
                    <div class='infoPokemon col-auto'>
                        {`Type : ${pokemon.type}`}
                    </div>
                </div>
            </div>
        );
    }
}