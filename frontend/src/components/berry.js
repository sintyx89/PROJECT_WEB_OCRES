import React from "react";

export default class Berry extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'name'
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