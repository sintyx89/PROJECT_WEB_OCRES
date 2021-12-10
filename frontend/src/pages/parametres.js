import React from 'react';
import Button from '../components/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

export default class Parametres extends React.Component {

    option = () => {
        this.props.option();
    }

    option2 = () => {
        this.props.option2();
    }

    render() {
        let option = this.props;
        let option2 = this.props;
        return (
            <div>
                <div class="row justify-content-center">
                    <img src={require('../images/pikachu.png')} id="pikachu" />
                </div>
                <div class="row justify-content-center">
                    <div class="headshot headshot-dresseur col-auto">
                        <div>
                            <button class="btn btn-primary" onClick={this.option}>Pokemon</button>
                            <p>Cliquez pour Afficher/Masquer les Pokemons dans le pokedex</p>
                        </div>
                    </div>
                    <div class="headshot headshot-dresseur col-auto">
                        <div>
                            <button class="btn btn-primary" onClick={this.option2}>Objets</button>
                            <p>Cliquez pour Afficher/Masquer les Objets dans le pokedex</p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="headshot headshot-dresseur">
                        <h2>Enregistrez votre profil</h2>
                        <p>Entrez votre prenom</p>
                        <input
                            type='text'
                            name='prenom'
                        ></input>
                        <p>Entrez votre nom</p>
                        <input
                            type='text'
                            name='nom'
                        ></input>
                        <p>Entrez votre date de naissance : JJ/MM/AAAA</p>
                        <input
                            type='text'
                            name='datedenaissance'
                        ></input>
                        <p></p>
                        <button class="btn btn-primary">Enregistrer</button>

                    </div>
                </div>
            </div>
        );
    }

}


