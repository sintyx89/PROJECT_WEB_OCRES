import React from 'react';
import User from './components/user';
import Nav from './containers/nav';
import './App.css';
import GuideMeteo from './containers/guideMeteo';
import Pokedex from './containers/pokedex';

import 'bootstrap/dist/css/bootstrap.min.css';



export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      users : [
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

      selectedUser : 'Margaux',
      selectedPokemon : 'Pikachu',
      city : 'Paris'
    }
  }

  changeUser(selectedUser) {
    this.setState({ selectedUser });
    // Revient a faire => this.setState({ selectedUser: selectedUser }); 
  }

   render() {
    const { users, selectedUser, pokemons, city } = this.state;

    return (
      <div class='App'>
        <div class="container">
          <header class='App-header'>
            <h1> Notre super POKEDEX version OCRES </h1>
            <Nav users={users} changeUser={this.changeUser.bind(this)} />
          </header> 
          
          <div class='mainContent'>
            <div class="row">
              <div class="col">
            <div class='profilDresseur'>
                <h2> Profil dresseur </h2>
                <User user={users.find((user) => user.name === selectedUser)}/>
              </div>
              </div>

              <div class="col">
              <div class='pokedexInfo'>
                <Pokedex/>
              </div>
              </div>
              
              <div class="col">
              <div class='GuideMeteoGO'>
                <h2> Guide Méteo pour jouer à GO </h2>
                <input
                  type="text"
                  name="Ville"
                  value={city}
                  onChange={this.handleChange}
                />
                <GuideMeteo city={city} />
              </div>
              </div>
              
              </div>
            </div>
          </div>
      </div>
    );
   }
    
}


