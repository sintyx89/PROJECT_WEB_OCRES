import React from 'react';
import User from '../components/user';
import Nav from '../containers/nav';
import GuideMeteo from '../containers/guideMeteo';
import Pokedex from '../containers/pokedex';
import FicheDresseur from '../containers/FicheDresseur';

import 'bootstrap/dist/css/bootstrap.min.css';



export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                {
                    name: 'Margaux',
                    surname: 'MENGONI',
                    birthdate: '07/04/1998',
                    badge: '4'
                },
                {
                    name: 'Nicolas',
                    surname: 'LEBON',
                    birthdate: '26/05/2000',
                    badge: '5'
                },
            ],

            selectedUser: 'Margaux',
            selectedPokemon: 'Pikachu',
            city: 'Paris'
        }
    }

    changeUser(selectedUser) {
        this.setState({ selectedUser });
        // Revient a faire => this.setState({ selectedUser: selectedUser }); 
    }

    handleChange= event => {
        this.setState({ city: event.target.value });
    };

    render() {
        let { users, selectedUser, pokemons, city } = this.state;
        const option = this.props.option;
        const option2 = this.props.option2;

        return (

            <div>
                <header class='App-header'>
                    <h1> Notre super POKEDEX version OCRES </h1>
                    <Nav users={users} changeUser={this.changeUser.bind(this)} />
                </header>

                <div class='mainContent'>
                    <div class="row justify-content-center">
                        <div class="headshot headshot-dresseur col-auto">
                            <div class='profilDresseur'>
                                <h2> Profil dresseur </h2>
                                <FicheDresseur name={selectedUser} />
                                {/*<User user={users.find((user) => user.name === selectedUser)} />*/}
                            </div>
                        </div>

                        

                        <div class="col-auto">
                            <div class='pokedexInfo'>
                                <Pokedex option={option} option2={option2}/>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

        );
    }

}


