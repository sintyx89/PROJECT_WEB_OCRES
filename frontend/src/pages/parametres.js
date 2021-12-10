import React from 'react';
import axios from "axios";
import Button from '../components/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'bootstrap';
import '../index.css';

const API_URL = "https://localhost:2000/routes/dresseur";

export default class Parametres extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            dresseur : {
                name: 'default',
                first_name: 'default',
                brith_date: '00/00/0000',
                nbr_badge: '0'
            }
        };
    }

    // pour les modification des barre de recherches
    handleChangeName= event => {
        this.setState({ name: event.target.value });
    };

    handleChangeFirstName= event => {
        this.setState({ first_name: event.target.value });
    };

    handleChangeDate= event => {
        this.setState({ brith_date: event.target.value });
    };

    // pour faire la PopUp
    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    // pour gérer les Option (affichage des Images ou non)
    option = () => {
        this.props.option();
    }

    option2 = () => {
        this.props.option2();
    }

    // ajouter un dresseur/Utilisateur a la base de données
    newDresseur = () => {
        /*
        axios
            .create(`${API_URL}/${id}/`)
            .then(console.log('new dresseur'))
            .catch(console.error);
        */
        // PopUp d'information
        return (
            <div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );

    }

    render() {
        let { option, option2 } = this.props;
        var dresseur = this.state.dresseur;

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
                            onChange={this.handleChangeFirstName}
                        ></input>
                        <p>Entrez votre nom</p>
                        <input
                            type='text'
                            name='nom'
                            value={dresseur.name}
                            onChange={this.handleChangeName}
                        ></input>
                        <p>Entrez votre date de naissance : JJ/MM/AAAA</p>
                        <input
                            type='text'
                            name='datedenaissance'
                            value={dresseur.brith_date}
                            onChange={this.handleChangeDate}
                        ></input>
                        <p></p>
                        <button class="btn btn-primary" onClick={this.newDresseur}>Enregistrer</button>

                    </div>
                </div>
            </div>
        );
    }

}


