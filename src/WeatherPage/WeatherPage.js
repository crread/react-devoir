import Link from "./../Link/Link";
import Input from "./../Input/Input";
import GetCity from "./../GetCity/GetCity";
import WeatherCallAPI from "./../WeatherCallAPI/WeatherCallAPI";
import DisplayListCities from "./../DisplayListCities/DisplayListCities";
import ShowWeatherdata from './../ShowWeatherData/ShowWeatherData';

import { useState, useEffect } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function WeatherPage ({setApiNameCity, apiNameCity, apiListCities, setApiListCities}) {
    const [apiWeatherData, setApiWeatherData] = useState([]);
    useEffect(() => {},[apiWeatherData]);
      
    function DisplayWeatherData () {
      const city = document.getElementById("inputCityName");
      if (city != null && 
          city.value != "" && 
          window.getComputedStyle(document.getElementById("listCities")).display == "none" && 
          typeof apiWeatherData.length === "undefined" && 
          apiWeatherData.weather[0] !== "undefined"
          )
      {
        return <ShowWeatherdata weatherData={apiWeatherData} />
      }
      return null;
    }
      
    return (
      <>
        <Row className="justify-content-md-center">
          <Col xs={6}>
            <Link href="/site/cityData" className="mb-3 ml-3">
              Info sur une ville de France.
            </Link>
            <Col>
              <Input apiNameCity={apiNameCity} setApiNameCity={setApiNameCity} />
            </Col>
            <DisplayListCities apiListCities={apiListCities} setApiNameCity={setApiNameCity} className="mb-3" />
            <GetCity nameCity={apiNameCity} setApiListCities={setApiListCities}/>
            <WeatherCallAPI nameCity={apiNameCity} setApiWeatherData={setApiWeatherData} />
            <DisplayWeatherData />
          </Col>
        </Row>
      </>
    )
}