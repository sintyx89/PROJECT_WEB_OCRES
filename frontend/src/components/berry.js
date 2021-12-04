import React from "react";

const API_URL = "https://pokeapi.co/api/v2/berry/{id or name}/";

export default class Berry extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'name',
            growth_time: '0',
            max_harvest: '0',
            natural_gift_power: '0'
        }
    }

    render() {
        let berry = this.state;

        return ( <
            div class = 'berry' >
            <
            div class = 'profileInfos' >
            <
            div class = 'profileInfo' > { `Nom: ${berry.name}` } <
            /div> <
            div class = 'profileInfo' > { `Temps de pousse: ${berry.growth_time} h` } <
            /div> <
            div class = 'profileInfo' > { `Nombre de récolte: ${berry.max_harvest}` } <
            /div> <
            div class = 'profileInfo' > { `Puissance de Natural Gift: ${berry.natural_gift_power}` } <
            /div> <
            /div> <
            /div>
        )
    }

}