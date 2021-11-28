import React from "react";

export default class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'name'
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