import React from "react";

const API_URL = "https://pokeapi.co/api/v2/move/{id or name}/";

export default class Skill extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name : 'name',
            accuracy : '0',
            pp : '1',
            priority : '0',
            power : '0',
            type : 'fight'
        }
    }

    render () {
        const {skill} = this.props;

        return (
            <div class='berry'>
                <div class='profileInfos'>
                    <div class='profileInfo'>
                        {`Prenom: ${skill.name}`}
                    </div>
                    
                </div>
            </div>
        )
    }
}