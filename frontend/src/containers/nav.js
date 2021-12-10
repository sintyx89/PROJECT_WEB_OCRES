import React from 'react';
import axios from "axios";
import Button from '../components/button';
import "../App.css";
import '../index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL = "http://localhost:2000/api/dresseur";

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          dataPoke: null
        };
    }
    callAPI = () => {
        // Call API
        axios
          .get(`${API_URL}/`)
          .then(({ data }) => {
            console.log(data);
            // Recupere uniquement la propriété data
            const list = { data };
            // on recuper la liste
            const dataPoke = list.map();
            
            this.setState({ dataPoke });
          })
          .catch(console.error);
      };

    // Lance un appel au lancement du component
    componentDidMount = ()=>  {
        this.callAPI();
    };

    render() {
        const { users, changeUser } = this.props;
        // on recuper la liste des dresseurs
        const list = this.state.dataPoke;
        //test sur list 
        if (!list) return <p>Loading...</p>;

        return (
            <div class="container" id="listedresseur">
                <div class="row">
                    {   
                        (list.map((user) => <Button text={user.name} onClick={() => changeUser(user.name)} />))
                         /*
                        (users.map((user) => <Button text={user.name} onClick={() => changeUser(user.name)} />))
                        */
                    }
                </div>
            </div>)
    }
}