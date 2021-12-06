import { Route, Routes } from "react-router";
import React from 'react';
import Home from './pages/home';
import Parametres from './pages/parametres';

export default class Chemin extends React.Component {
    render() {
        return(
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/parametres" element={<Parametres/>}/>
            </Routes>
        );
    }
}