import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import List from "../Layout/List";
const apikey = process.env.REACT_APP_WEATHER_API;
const WeatherData = () => {
  const [weather, setWeather] = useState(null);
  let { place } = useParams();

  useEffect(() => {
    fetchphoto();
    async function fetchphoto() {
      const res = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          place +
          "&APPID=" +
          apikey
      );
      const data = await res.json();
      setWeather(data);
    }
  }, []);
  if (!weather)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  if (!place) return <div>Please go to Home</div>;
  return (
    <div className="row">
      <h1 className="text-center">{weather.name}</h1>
      <ul className="list-group">
        <List q={"wind Speed"} s={weather.wind.speed + " km"} />
        <List q={"Sun Rise"} s={new Date(weather.sys.sunrise).toTimeString()} />
        <List q={"feels_like"} s={weather.main.feels_like} />
        <List q={"Humidity"} s={weather.main.humidity} />
        <List q={"Pressure"} s={weather.main.pressure} />
        <List q={"Temp_Max : "} s={weather.main.temp_max} />
        <List q={"Temp_Min"} s={weather.main.temp_min} />
      </ul>
    </div>
  );
};

export default WeatherData;
