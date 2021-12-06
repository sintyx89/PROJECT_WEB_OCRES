import React from 'react';
import axios from "axios";
import Pokemon from '../components/pokemon';
import "../App.css";
import '../index.css';


const API_URL = "https://pokeapi.co/api/v2/pokemon";
const API_KEY = "";

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
            // const { list } = data;
            // On prend les data en question
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
        this.callAPI(nextProps);
      }
    }

    render() {
        const { dataPoke } = this.state;
        const { name } = this.props;
        if (!dataPoke) return <p>Loading...</p>;
        return (
          <div>
              {dataPoke.map((dataPokeData) => {
                return <Pokemon data={dataPoke} />;
              })}
          </div>
        );
      }
}