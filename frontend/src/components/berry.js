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

        return (
            <div class='berry container' id='pokemon'>
                <div class='row'>
                    <div class='profileInfo col-auto'>
                        {`Nom: ${berry.name}`}
                    </div>
                    <div class='profileInfo col-auto'>
                        {`Temps de pousse: ${berry.growth_time} h`}
                    </div>
                </div>
                <div class='row'>
                    <div class='profileInfo col-auto' id="nbrrec">
                        {`Nombre de récolte: ${berry.max_harvest}`}
                    </div>
                    <div class='profileInfo col-auto' id="berrypui">
                        {`Puissance : ${berry.natural_gift_power}`}
                    </div>
                </div>

            </div>
        )
    }

}