import React from 'react';
import axios from "axios";
import "../App.css";
import '../index.css';
import User from '../components/user';

const API_URL = "http://localhost:2000/api/dresseur";
const API_KEY = "nrnd7LxUjHF8cSJyew4kFjjH6P1C82dnkxxHtcNWM1HHTJvovN6CCBGeHEZ4xZKj";

export default class FicheDresseur extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          dataPoke: null
        };
      }
      callAPI = (id) => {
        // Call API
        axios
          .get(`${API_URL}/${id}/`)
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
        const { id } = this.props;
        this.callAPI(id);
    }

    // A chaque update relance une api
    componentDidUpdate(nextProps) {
      // Ici on verifie que la mise à jour concerne bien le champs city
      if (nextProps !== this.props.id) {
        this.callAPI(nextProps.id);
      }
    }

    render() {
        const { dataPoke } = this.state;
        //test sur dataPoke
        if (!dataPoke) return <p>Loading...</p>;
        
        return (
          <div>
              <User data={dataPoke}/>
          </div>
        );
      }
}