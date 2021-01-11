import { useEffect } from "react";

export default function DisplayListCities ({apiListCities, setApiNameCity, className}) {
    useEffect(() => {
        const updateDisplayList = (e) => {
            if (e.target.value === "")
            {
                document.getElementById('listCities').style.display = "none";
            }
            else
            {
                document.getElementById('listCities').style.display = "block";
            }
        }
        if ( document.getElementById("inputCityName") !== null )
        {
            document.getElementById("inputCityName").addEventListener('focusout', updateDisplayList, false);
        }
        return () => {
            if ( document.getElementById("inputCityName") !== null )
            {
                document.getElementById("inputCityName").removeEventListener('focusout', updateDisplayList, false);
            }
        }
    }, []);

    const selectCity = event => {
        {setApiNameCity(event.target.getAttribute("data"))};
        document.getElementById("listCities").style.display = "none";
    }

    return  (
                <div id="listCities" className={className}>
                    <ul>
                        {apiListCities.map( (element, index) => <li onClick={selectCity} className="li-list-cities" key={index} data={element.nom}> {element.nom} ({element.code}) </li> )}
                    </ul>
                </div>
            )
  }