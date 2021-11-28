import React from "react";

export default class Encounter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'name'
        }
    }

    render () {
        const {encounter} = this.props;

        return (
            <div class='berry'>
                <div class='profileInfos'>
                    <div class='profileInfo'>
                        {`Prenom: ${encounter.name}`}
                    </div>
                    
                </div>
            </div>
        )
    }
}