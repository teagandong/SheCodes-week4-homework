import React, { useState } from "react";
import axios from "axios";

export default function Searchbox() {
  let [city, getCity] = useState("");
  let [temperature, setTemperature] = useState("");
  let [response, setResponse] = useState("");

  function updateCity(event) {
    getCity(event.target.value);
    setResponse(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "53f3bc1f5d348c44be3e3754c7185573";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemperature);

    setResponse("");
  }

  function showTemperature(reply) {
    setTemperature(
      <div>
        <h2>
          <span>The weather in {reply.data.name} is: </span>
          <span className="weather-icon">
            <img
              src={`https://openweathermap.org/img/w/${reply.data.weather[0].icon}.png`}
            />
          </span>
        </h2>
        <h4>
          <p className="weather-details">
            <span>Temperature: {Math.round(reply.data.main.temp)} °C </span>
            <br />
            <span>Description: {reply.data.weather[0].description}</span>
            <br />
            <span>Humidity: {reply.data.main.humidity} % </span>
            <br />
            <span>Wind: {reply.data.wind.speed} km/h</span>
            <br />
          </p>
        </h4>
        <h5>
          <div>
            This project is coded by
            <a href="https://github.com/teagandong" target="_blank">
              {""} Teagan Dong
            </a>
            {""} is
            <a
              href="https://github.com/teagandong/SheCodes-week4-homework"
              target="_blank"
            >
              {""} open sourced on GitHub
            </a>
            {""} and
            <a
              href="https://65c0ccd8b16a0105d3852ee4--super-narwhal-e42be6.netlify.app/"
              target="_blank"
            >
              {""} hosted on Netlify
            </a>
          </div>
        </h5>
      </div>
    );
  }

  return (
    <div>
      <form className="Search" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city.."
          className="search-form-input"
          onChange={updateCity}
          value={response}
        />
        <input type="submit" value="search" className="search-form-button" />
        <h4>{temperature}</h4>
      </form>
    </div>
  );
}
