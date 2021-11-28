import React from "react";

export default class Skill extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'name'
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