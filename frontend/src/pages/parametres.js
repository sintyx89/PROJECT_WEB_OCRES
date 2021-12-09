import React from 'react';
import Button from '../components/button';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class Parametres extends React.Component {

    option=() =>{
        this.props.option();
    }

    render() {
       let option = this.props;
        return (
            <div>
                <Button text='avec ou sans image' onClick= {this.option} />
            </div>
        );
    }

}


