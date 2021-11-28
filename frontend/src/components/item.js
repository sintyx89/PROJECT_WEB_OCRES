import React from "react";

const API_URL = "https://pokeapi.co/api/v2/item/{id or name}/";

export default class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'name',
            cost : '0',
            attributes : '',
            category : ''
        }
    }

    render () {
        const {item} = this.props;

        return (
            <div class='berry'>
                <div class='profileInfos'>
                    <div class='profileInfo'>
                        {`Prenom: ${item.name}`}
                    </div>
                    
                </div>
            </div>
        )
    }
}