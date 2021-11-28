import React from 'react';
import Berry from '../components/berry';
import Pokemon from '../components/pokemon';
import Item from '../components/item';
import '../index.css';

export default class Pokedex extends React.Component {
    

    render() {
        const { pokemons, berrys, items, selectedPokemon, selectedBerry, selectedItem } = this.props;

        return (
            <div>
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

                <div class="Berry">
                    <h2> Recherche Berry </h2> 
                    <input 
                        type='text'
                        name='Berry'
                        value={this.selectedBerry}
                    />
                    <div class='berryInfo'>
                        <Berry berrys/>
                    </div>
                </div>

                <div class="Items">
                    <h2> Recherche Object </h2> 
                    <input 
                        type='text'
                        name='Item'
                        value={this.selectedItem}
                    />
                    <div class='itemInfo'>
                        <Item items/>
                    </div>
                </div>

            </div>
        )
    }
}