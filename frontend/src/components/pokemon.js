import '../index.css';

import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


export default class Pokemon extends React.Component {



    render() {
        // utilise la props (les data de l'API), les affiche, teste qu'elles sont récupéré
        const { data, option } = this.props;
        //console.log("data", data);
        if (!data) return null;

        // get API data
        const name = data.data.name;
        const height = parseFloat(data.data.height) / 10;
        const weight = parseFloat(data.data.weight) / 10;
        const sprite = data.data.sprites.front_default;
        const type = data.data.types[0].type.name;
        const hpstat = data.data.stats[0].base_stat;
        const attstat = data.data.stats[1].base_stat;
        const defstat = data.data.stats[2].base_stat;
        const satstat = data.data.stats[3].base_stat;
        const sdefstat = data.data.stats[4].base_stat;
        const speedstat = data.data.stats[5].base_stat;
        const info = [
            {
                subject: 'HP',
                A: hpstat
            },
            {
                subject: 'Attaque',
                A: attstat
            },
            {
                subject: 'Defense',
                A: defstat
            },
            {
                subject: 'Attaque Speciale',
                A: satstat
            },
            {
                subject: 'Defense Speciale',
                A: sdefstat
            },
            {
                subject: 'Vitesse',
                A: speedstat
            }
        ];


        // affichage des infos
        return (
            <div class='Pokemon' id='pokemon'>
                <div class="row">
                    <div class="col">
                        <div class='row'>
                            <div class='infoPokemon col-auto'>
                                {`Nom : ${name}`}
                            </div>
                            <div class='infoPokemon col-auto' id="taille">
                                {`Taille : ${height} m`}
                            </div>
                        </div>
                        <div class='row'>
                            <div class='infoPokemon col-auto' id="poids">
                                {`Poids : ${weight} kg`}
                            </div>
                            <div class='infoPokemon col-auto' id="poktype">
                                {`Type : ${type}`}
                            </div>
                        </div>

                    </div>
                    <div class="col-auto">
                        <div>
                            {
                                option && <img src={sprite}/>
                            }
                            
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <RadarChart
                            outerRadius={100}
                            width={440}
                            height={250}
                            data={info}
                        >
                            <PolarGrid stroke="#000"/>
                            <PolarAngleAxis dataKey="subject" />
                            <Radar
                                name="Pokemon"
                                dataKey="A"
                                stroke="#160085"
                                fill="#160085"
                                fillOpacity={0.6}
                            />
                        </RadarChart>
                    </div>
                </div>
            </div>


        );
    }
}