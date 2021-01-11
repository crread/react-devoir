import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Home/Home";
import CityPage from './CityPage/CityPage';
import WeatherPage from './WeatherPage/WeatherPage'; 
import Routeur from './Routeur/Routeur';

import { useState } from 'react';
import Container from 'react-bootstrap/Container';

function App() {
  const [apiNameCity, setApiNameCity] = useState("");
  const [apiListCities, setApiListCities] = useState([]);

  return (
    <>
      <Container className="mainDiv">
        <Routeur path="/" >
          <Home />
        </Routeur>
        <Routeur path="/site/cityData" >
          <CityPage setApiNameCity={setApiNameCity} 
                      apiNameCity={apiNameCity}
                      setApiListCities={setApiListCities}
                      apiListCities={apiListCities} 
          />
        </Routeur>
        <Routeur path="/site/cityWeather" >
          <WeatherPage  setApiNameCity={setApiNameCity} 
                        apiNameCity={apiNameCity} 
                        setApiListCities={setApiListCities}
                        apiListCities={apiListCities}
          />
        </Routeur>
      </Container>
    </>
  );
}

export default App;