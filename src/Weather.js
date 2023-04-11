import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      iconUrl:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAg5JREFUeNrt2tGRgyAQBmBLoARLSAmUkBIsISVYgiVYgiVQgq//myXQAfdwS4bJqRFuCWjWmZ3JaGYin8AumMY513xzNAIgAAIgAAIgAAIgAAIgAALwe4LhANACGADMANxLzHStbQoc2QGoce5g9JcBAKA2nvi7mAGoUwP8o/FPhOoBAGgAIwBD0ftxHNntiw6HJICdBiqa8BxD2E9MjNEAAO4bNzwxPn0fA/WsbNkjBWDZuNkHXZ8ZAQ5DfQQAwG3nJjR9xxWKpOwRC6D3AGgOcGdCYAMI0p8rHEMWAGq82Zit++B7roJoWQEAdBs/NPouR/PDUAnAwAaw0+27YKEzVdLw6EryCIDZabymIeBqC06AP93+QEa4LMASlLv2GwF81zc1N54bwJe29kA1WHMY/wBjAe4vY388KUBYLbY5FkNniudSOwXAXSTmlLWAKtRl/a4T91K7qxlgXKvpKQVzzUOmxiFgg70FBeBBu0I9fVacVWiNk6AOFmB2A6gLUrIO9wAoa5mcADnT4Phm9blWlClC0B6Pzve5AHIWQm1EmW1pSNiVcv129GGlboubXGmJGsWS56l37GFOqQA5FkMmputGDKeRLQ1+4mAEWKp4OxzR6KXEirA4QOZ9RPPuHWNRAMb3iMmbpKUBdOkNktIAt+oB5F9iAiAAAiAAAiAAAiAAAiAAAiAAAiAAl48fFVnRpiVnD+AAAAAASUVORK5CYII=",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="button-search" />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            {" "}
            <FormattedDate date={weatherData.date} />{" "}
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-4">
            <div className="clearfix">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              />
            </div>
          </div>
          <div className="col-4">
            <div className="float-left">
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-4">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "e0a5a97de9a0b7a951e9d154a8f9bad8";
    let units = "metric";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiURL).then(handleResponse);

    return "Loading...";
  }
}
