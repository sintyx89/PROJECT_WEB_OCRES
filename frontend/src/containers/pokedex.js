import React from 'react';
import Pokemon from '../components/pokemon';
import '../index.css';

export default class Pokedex extends React.Component {
    

    render() {
        const { pokemons } = this.props;

        return (
            <div class='Pokemon'>
                <h2> Recherche Pokémon </h2> 
                <input 
                    type='text'
                    name='Pokemon'
                    value={this.selectedPokemon}
                />
                <div class='pokemonInfo'>
                    <Pokemon pokemons/>
                </div>
            </div>
        )
    }
}