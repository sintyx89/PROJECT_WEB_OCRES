import { Route, Routes } from "react-router";
import React from 'react';
import Home from './pages/home';
import Parametres from './pages/parametres';

export default class Chemin extends React.Component {
    state = {
        option : true
    }

    changeOption=() =>{
        if (this.state.option)
            this.setState({option: false});
        else
            this.setState({option: true});
    }

    render() {
        const option = this.props;
        return(
            <Routes>
                <Route path="/" element={<Home option={this.state.option}/>}/>
                <Route path="/parametres" element={<Parametres option={this.changeOption}/>}/>
            </Routes>
        );
    }
}