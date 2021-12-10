import React from 'react';
import axios from "axios";
import Button from '../components/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

const API_URL = "https://localhost:2000/routes/dresseur";

export default class Parametres extends React.Component {
    option = () => {
        this.props.option();
    }

    option2 = () => {
        this.props.option2();
    }
/*
    newDresseur = (id) => {
        axios
            .create(`${API_URL}/${id}/`)
            .then(console.log('new dresseur'))
            .catch(console.error);
    }
*/
    render() {
        let { option, option2 } = this.props;
        const dresseur = {
            name: 'default',
            first_name: 'default',
            brith_date: '00/00/0000',
            nbr_badge: '0'
        }

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
                            value={dresseur.first_name}
                        ></input>
                        <p>Entrez votre nom</p>
                        <input
                            type='text'
                            name='nom'
                            value={dresseur.name}
                        ></input>
                        <p>Entrez votre date de naissance : JJ/MM/AAAA</p>
                        <input
                            type='text'
                            name='datedenaissance'
                            value={dresseur.brith_date}
                        ></input>
                        <p></p>
                        <button class="btn btn-primary" /*onClick={this.newDresseur()}*/>Enregistrer</button>

                    </div>
                </div>
            </div>
        );
    }

}


