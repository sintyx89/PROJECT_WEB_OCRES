import React from "react";

const API_URL = "https://pokeapi.co/api/v2/item/{id or name}/";

export default class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Potion',
            cost: '200',
            attributes: 'restaure 20 PV',
            category: 'Soin'
        }
    }

    render() {
        let item = this.state;

        return (
            <div class='berry container' id='pokemon'>
                <div class='row'>
                    <div class='profileInfo col-auto'>
                        {`Nom: ${item.name}`}
                    </div>
                    <div class='profileInfo col-auto'>
                        {`Prix: ${item.cost} `}
                    </div>
                </div>
                <div class='row'>
                    <div class='profileInfo col-auto'>
                        {`Attribut: ${item.attributes}`}
                    </div>
                    <div class='profileInfo col-auto'>
                        {`Catégorie: ${item.category}`}
                    </div>
                </div>

            </div>
        )
    }
}