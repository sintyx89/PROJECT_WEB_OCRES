import { Route, Routes } from "react-router";
import React from 'react';
import Home from './pages/home';
import Parametres from './pages/parametres';

export default class Chemin extends React.Component {
    state = {
        option : true,
        option2 : true
    }

    changeOption=() =>{
        if (this.state.option)
            this.setState({option: false});
        else
            this.setState({option: true});
    }

    changeOption2=() =>{
        if (this.state.option2)
            this.setState({option2: false});
        else
            this.setState({option2: true});
    }

    render() {
        const option = this.props;
        const option2 = this.props;
        return(
            <Routes>
                <Route path="/" element={<Home option={this.state.option} option2={this.state.option2}/>}/>
                <Route path="/parametres" element={<Parametres option={this.changeOption} option2={this.changeOption2}/>}/>
            </Routes>
        );
    }
}