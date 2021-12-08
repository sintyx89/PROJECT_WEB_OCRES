import React from "react";
import axios from "axios";
import Meteo from "../components/meteo";
import "../App.css";

const API_URL = "http://api.openweathermap.org/data/2.5/forecast";
const API_KEY = "768a35a09a1701be84498950a95e7cf5";
const API_KEY2 = "44df947c43958d2ce1cb7a4ba9123b2a8";

export default class GuideMeteo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          forecast: null
        };
      }

      callAPI = city => {
        // Call API
        axios
          .get(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
          .then(({ data }) => {
            console.log(data);
            // Recupere uniquement la propriété data
            const { list } = data;
            // On prend les trois premières heures de chaque jour (donc de 0-3h))
            const forecast = [list[0], list[9], list[17], list[25], list[33]];
    
            this.setState({ forecast });
          })
          .catch(console.error);
      };

    // Lance un appel au lancement du component
    componentDidMount() {
        const { city } = this.props;
        this.callAPI(city);
    }

    // A chaque update relance une api
    componentDidUpdate(nextProps) {
      // Ici on verifie que la mise à jour concerne bien le champs city
      if (nextProps !== this.props.city) {
        this.callAPI(nextProps.city);
      }
    }

    render() {
        const { forecast } = this.state;
        const { city } = this.props;

        if (!forecast) return <p>Loading...</p>;
        
        return (
          <div>
            <h2 className="forecast-header">{city}</h2>
            <div className="forecast-container">
              {/* render tout le tableau */}
              {forecast.map((forecastData, index) => {
                return <Meteo key={index} data={forecastData} />;
              })}
              {/* <Meteo data={forecast[0]}/>,
              <Meteo data={forecast[1]}/>,
              <Meteo data={forecast[2]}/>,
              <Meteo data={forecast[3]}/>,
              <Meteo data={forecast[4]}/> */}
            </div>
          </div>
        );
      }

}