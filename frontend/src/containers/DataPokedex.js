import React from 'react';
import axios from "axios";
import Pokemon from '../components/pokemon';
import "../App.css";
import '../index.css';
/*
import Pokedex from 'pokedex-promise-v2';
const options = {
  protocol: 'https',
  hostName: 'localhost:443',
  versionPath: '/api/v2/',
  cacheLimit: 100 * 1000, // 100s
  timeout: 5 * 1000 // 5s
}
const P = new Pokedex(options);
*/

const API_URL = "https://pokeapi.co/api/v2/pokemon";

export default class FichePokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          dataPoke: null
        };
      }
      callAPI = (name) => {
        // Call API
        axios
          .get(`${API_URL}/${name}/`)
          .then(({ data }) => {
            console.log(data);
            // Recupere uniquement la propriété data
            const dataPoke = { data };
            
            this.setState({ dataPoke });
          })
          .catch(console.error);
      };

    // Lance un appel au lancement du component
    componentDidMount() {
        const { name } = this.props;
        this.callAPI(name);
    }

    // A chaque update relance une api
    componentDidUpdate(nextProps) {
      // Ici on verifie que la mise à jour concerne bien le champs city
      if (nextProps !== this.props.name) {
        this.callAPI(nextProps.name);
      }
    }

    render() {
        const { dataPoke } = this.state;
        const { name } = this.props;
/*
        // utilisation de Pokedex
        P.getPokemonByName(name)
        .then((dataPoke) => {
          console.log(dataPoke);
        })
        .catch((error) => {
          console.log('There was an ERROR: ', error);
        });
*/
        if (!dataPoke) return <p>Loading...</p>;
        
        return (
          <div>
              <p>{name}</p>
              <Pokemon data={dataPoke}/>
              {/*dataPoke.map((dataPoke) => {
                return <Pokemon data={dataPoke} />;
              })*/}
          </div>
        );
      }
}