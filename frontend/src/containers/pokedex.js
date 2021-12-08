import React from 'react';
import Skill from '../components/skills';
import '../index.css';
import FichePokemon from './FichePokemon';
import FicheBerry from './FicheBerry';
import FicheItem from './FicheItem';
import FicheSkill from './FicheSkill';

export default class Pokedex extends React.Component {

    state = {
        pokemon: 'pikachu',
        berry: 'sitrus',
        item: 'leftovers',
        skill: 'flamethrower'
    };

    handleChangePokemon = event => {
        this.setState({ pokemon: event.target.value });
    };

    handleChangeBerry = event => {
        this.setState({ berry: event.target.value });
    };

    handleChangeItem = event => {
        this.setState({ item: event.target.value });
    };

    handleChangeSkill = event => {
        this.setState({ skill: event.target.value });
    };

    render() {
        let { pokemon, berry, item, skill } = this.state;

        return (
            <div class='container'>
                <div class='row'>

                    <div class='headshot headshot-pok'>
                        <div class="PokemonR ">

                            <h2> Recherche Pokémon </h2>
                            <input
                                type='text'
                                name='pokemon'
                                value={pokemon}
                                onChange={this.handleChangePokemon}
                            />
                            <div class='pokemonInfo'>
                                <FichePokemon name={pokemon} />
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
                                name='berry'
                                value={berry}
                                onChange={this.handleChangeBerry}
                            />
                            <div class='berryInfo'>
                                <FicheBerry name={berry} />
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
                                name='item'
                                value={item}
                                onChange={this.handleChangeItem}
                            />
                            <div class='itemInfo'>
                                <FicheItem name={item} />
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
                                value={skill}
                                onChange={this.handleChangeSkill}
                            />
                            <div class='skillInfo'>
                                <FicheSkill name={skill} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}