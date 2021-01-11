import { useEffect } from 'react';

import Form from 'react-bootstrap/Form';

export default function Input (props) {
    useEffect(() => {
        const callDisplayWeatherData = (e) => {
          if (e.key === "Enter")
          {
            document.getElementById("inputCityName").blur();
            document.getElementById("listCities").style.display = "none";
          }
        }
        if (document.getElementById("inputCityName") !== null)
        {
          document.getElementById("inputCityName").addEventListener('keypress', callDisplayWeatherData, true);
        }
        return () => {
          if (document.getElementById("inputCityName") !== null)
          {
            document.getElementById("inputCityName").removeEventListener('keypress', callDisplayWeatherData, true);
          }
        }
      }, []);

    function isEmptyOrSpaces(str){
        return str === null || str.match(/^ *$/) !== null;
    }

    const onChangeCallbackFunction = e => {
      const list = document.getElementById("listCities");
      props.setApiNameCity(e.target.value);
      !isEmptyOrSpaces(e.target.value) ? list.style.display = "block" : list.style.display = "none";
    }

    const onFocusCallbackFunction = (e) => {
      
      if (window.getComputedStyle(document.getElementById('listCities')).display === "none" && !isEmptyOrSpaces(e.target.value))
      {
        document.getElementById('listCities').style.display = "block";
      }
    }

    return (
      <>
          <Form.Control id="inputCityName"
                        placeholder="Ville française" 
                        onFocus={onFocusCallbackFunction}
                        onChange={onChangeCallbackFunction} 
                        value={props.apiNameCity}
          />
      </>
    )
}