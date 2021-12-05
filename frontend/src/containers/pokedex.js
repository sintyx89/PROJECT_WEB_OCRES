import React from 'react';
import Berry from '../components/berry';
import Pokemon from '../components/pokemon';
import Item from '../components/item';
import Skill from '../components/skills';
import '../index.css';

export default class Pokedex extends React.Component {


    render() {
        const { pokemons, berrys, items, skills, selectedPokemon, selectedBerry, selectedItem, selectedSkill } = this.props;

        return (
            <div class='container'>
                <div class='row'>

                    <div class='headshot headshot-pok'>
                        <div class="PokemonR ">

                            <h2> Recherche Pokémon </h2>
                            <input
                                type='text'
                                name='Pokemon'
                                value={this.selectedPokemon}
                            />
                            <div class='pokemonInfo'>
                                <Pokemon pokemons />
                            </div>
                        </div>
                    </div>
                </div>

                <div class='row'>
                    <div class='headshot headshot-ber'>

                        <div class="Berry ">

                            <h2> Recherche Berry </h2>
                            <input
                                type='text'
                                name='Berry'
                                value={this.selectedBerry}
                            />
                            <div class='berryInfo'>
                                <Berry berrys />
                            </div>
                        </div>
                    </div>
                </div>

                <div class='row'>
                    <div class='headshot headshot-mov'>
                        <div class="Items ">
                            <h2> Recherche Object </h2>
                            <input
                                type='text'
                                name='Item'
                                value={this.selectedItem}
                            />
                            <div class='itemInfo'>
                                <Item items />
                            </div>
                        </div>
                    </div>
                </div>

                <div class='row'>
                    <div class='headshot headshot-skill'>
                        <div class="Skill ">
                            <h2> Recherche Attaque/Move </h2>
                            <input
                                type='text'
                                name='skill'
                                value={this.selectedSkill}
                            />
                            <div class='skillInfo'>
                                <Skill skills />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}