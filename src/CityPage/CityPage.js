import Link from "./../Link/Link";
import GetCity from "./../GetCity/GetCity";
import DisplayListCities from "./../DisplayListCities/DisplayListCities";
import Input from "./../Input/Input";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useEffect } from 'react';

export default function CityPage ({setApiNameCity, apiNameCity, apiListCities, setApiListCities}) {
    useEffect(()=> {}, [apiNameCity]);

    function CityData ({data}) {
        return (
            <>
                <div className="mt-5">
                    <p className="mb-2">Ville : {data.nom}</p>
                    <p className="mb-2">Code du département : {data.codeDepartement}</p>
                    <p className="mb-2">code de la région : {data.codeRegion}</p>
                    <p className="mb-2">population : {data.population} habitants</p>
                </div>
            </>
        )
    }

    function DisplayCityData () {
        const city = document.getElementById("inputCityName");
        if (city != null && city.value != "" && window.getComputedStyle(document.getElementById("listCities")).display == "none")
        {
            return(
                <>
                    <div className="ml-3 mt-3">
                        {apiListCities.map( (element) => (element.nom.toLowerCase() == city.value.toLowerCase() ? <CityData data={element}/> : null))}
                    </div>
                </>
            );
        }
        return null;
    }

    return (
        <>
            <Row className="justify-content-md-center">
                <Col xs={6}>
                    <Link href="/" className="mb-3 ml-3">
                        page d'accueil
                    </Link>
                    <Link href="/site/cityWeather" className="mb-3 mr-3 float-right">
                        météo aujourd'hui
                    </Link>
                    <Col>
                        <Input apiNameCity={apiNameCity} setApiNameCity={setApiNameCity} />
                    </Col>
                    <DisplayListCities apiListCities={apiListCities} setApiNameCity={setApiNameCity} />
                    <GetCity nameCity={apiNameCity} setApiListCities={setApiListCities}/>
                    <DisplayCityData />
                </Col>
            </Row>
        </>
    )
}