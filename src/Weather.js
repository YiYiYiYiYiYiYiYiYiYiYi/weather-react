import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Paris",
    date: "Tuesday 10:00",
    description: "Sunny",
    temperature: 25,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humdity: 20,
    wind: 5
  };

  return (
    <div className="Weather">
      <form id="search-form" class="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Last updated: {weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="clearfix weather-temperature">
            <img src={weatherData.imgUrl} alt="weather icon"/>
            <strong>{weatherData.temperature}</strong>
            <span className="units">
              <a href="/" className="active">
                °C
              </a>{" "}
              |<a href="/">°F</a>
            </span>
          </div>
        </div>
        <div className="col-md-6">
          <ul className="parameters">
            <li>
              Humidity: <span>{weatherData.humdity}</span>%
            </li>
            <li>
              Wind: <span>{weatherData.wind}</span> km/h
            </li>
          </ul>
        </div>
      </div>
      <div className="weather-forecast"></div>
    </div>
  );
}
