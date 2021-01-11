export default function ShowWeatherdata ({weatherData}) {
    return (
        <>
            <div className="ml-3 mt-3">
                <h1>{weatherData.name}</h1>
                <p>{weatherData.weather[0].description}</p>
                <img src={"http://openweathermap.org/img/w/"+weatherData.weather[0].icon+".png"} ></img>
            </div>
        </>
    );
}