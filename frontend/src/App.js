import React from 'react';
import User from './components/user';
import Nav from './containers/nav';
import './App.css';
import GuideMeteo from './containers/guideMeteo';
import Pokedex from './containers/pokedex';

import 'bootstrap/dist/css/bootstrap.min.css';


import { Link } from 'react-router-dom';
import Chemin from './chemin';




export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            city: 'Paris'
        }

    }


    handleChange = event => {
        this.setState({ city: event.target.value });
    };

    render() {

        return (
            <div class='App container-fluid'>
                <div class="row">
                    <aside class="col-sm-3" id="aside">
                        <div class="row">
                            <h1 class='ecriture'>Poke<span class='base'>Ocres</span></h1>
                            <ul class="nav nav-pills flex-column">
                                <li class="nav-item">
                                    <Link class="nav-link " to="/">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link " to="/parametres">Parametres</Link>
                                </li>
                            </ul>
                        </div>
                        <div class="row justify-content-center">
                            <div class="headshot headshot-meteo col-auto " id="meteoaside">
                                <div class='GuideMeteoGO'>
                                    <h2 class='textmeteo'> Méteo </h2>
                                    <input
                                        id="meteoaside"
                                        type="text"
                                        name="Ville"
                                        value={this.state.city}
                                        onChange={this.handleChange}
                                    />
                                    <GuideMeteo city={this.state.city} />
                                </div>
                            </div>
                        </div>
                    </aside>
                    <div class="col-sm-9">
                        <main class="container-fluid">
                            <Chemin option={this.changeOption} option2={this.changeOption2}/>
                        </main>
                    </div>
                </div>
            </div>
        );
    }

}


