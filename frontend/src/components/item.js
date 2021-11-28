import React from "react";

const API_URL = "https://pokeapi.co/api/v2/item/{id or name}/";

export default class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Potion',
            cost : '200',
            attributes : 'permet de restaurer 20 PV',
            category : 'Soin'
        }
    }

    render () {
        let item = this.state;

        return (
            <div class='berry'>
                <div class='profileInfos'>
                    <div class='profileInfo'>
                        {`Nom: ${item.name}`}
                    </div>
                    <div class='profileInfo'>
                        {`Prix: ${item.cost} `}
                    </div>
                    <div class='profileInfo'>
                        {`Attribut: ${item.attributes}`}
                    </div>
                    <div class='profileInfo'>
                        {`Catégorie: ${item.category}`}
                    </div>
                </div>
            </div>
        )
    }
}