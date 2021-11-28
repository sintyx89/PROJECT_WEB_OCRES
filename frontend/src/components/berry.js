import React from "react";

const API_URL = "https://pokeapi.co/api/v2/berry/{id or name}/";

export default class Berry extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'name',
            growth_time : '0',
            max_harvest : '0',
            natural_gift_power : '0'
        }
    }

    render () {
        const {berry} = this.props;

        return (
            <div class='berry'>
                <div class='profileInfos'>
                    <div class='profileInfo'>
                        {`Prenom: ${berry.name}`}
                    </div>
                    
                </div>
            </div>
        )
    }

}