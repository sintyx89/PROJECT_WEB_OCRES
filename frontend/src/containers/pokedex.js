import React from 'react';
import Berry from '../components/berry';
import Pokemon from '../components/pokemon';
import Item from '../components/item';
import Skill from '../components/skills';
import '../index.css';
import FichePokemon from './DataPokedex';

export default class Pokedex extends React.Component {
    state ={
        pokemon : 'pikachu',
        berry : '', 
        item : '', 
        skill : ''
    };

    handleChangePokemon = event => {
        this.setState({ pokemon : event.target.value });
    };

    render() {
        let {pokemon, berry, item, skill} = this.state;

        return (
            <div>
                <div class='Pokemon'>
                    <h2> Recherche Pokémon </h2> 
                    <input 
                        type='text'
                        name= 'pokemon'
                        value={ pokemon }
                        onChange={ this.handleChangePokemon }
                    />
                    <div class='pokemonInfo'>
                        <FichePokemon name={ pokemon } />
                    </div>
                </div>

                <div class="Berry">
                    <h2> Recherche Berry </h2> 
                    <input 
                        type='text'
                        name='Berry'
                        value={berry}
                    />
                    <div class='berryInfo'>
                        <Berry berry/>
                    </div>
                </div>

                <div class="Items">
                    <h2> Recherche Object </h2> 
                    <input 
                        type='text'
                        name='Item'
                        value={item}
                    />
                    <div class='itemInfo'>
                        <Item item/>
                    </div>
                </div>

                <div class="Skill">
                    <h2> Recherche Attaque/Move </h2> 
                    <input 
                        type='text'
                        name='skill'
                        value={skill}
                    />
                    <div class='skillInfo'>
                        <Skill skill/>
                    </div>
                </div>

            </div>
        )
    }
}