import { useEffect } from "react";

export default function WeatherCallAPI (props) {
    useEffect( () => {
        let isLast = true;
        const fetchData = () => {
            if (props.nameCity.length > 3)
            {
                fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.nameCity}&appid=ad1bac7166d226fd01509c4a9dc9d6d6&lang=fr`)
                .then(response => response.json())
                .then(data => props.setApiWeatherData(data) && isLast )
            }
        }
        fetchData();
        return () => {
            isLast = false;
        }
    }, [props.nameCity]);
    return null;
}