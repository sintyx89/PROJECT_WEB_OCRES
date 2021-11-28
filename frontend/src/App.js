import React from 'react';
import User from './components/user';
import Nav from './containers/nav';
import './App.css';
import GuideMeteo from './containers/guideMeteo';
import Pokedex from './containers/pokedex';

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
        <header class='App-header'>
          <h1> Notre super POKEDEX version OCRES </h1>
          <Nav users={users} changeUser={this.changeUser.bind(this)} />
        </header> 
        
        <div class='mainContent'>
          
          <div class='pokedexInfo'>
            <Pokedex/>
          </div>
          
          <div class='profilDresseur'>
            <h2> Profil dresseur </h2>
            <User user={users.find((user) => user.name === selectedUser)}/>
          </div>

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
    );
   }
    
}


