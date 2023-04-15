import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{props.data.dt}</div>

      <WeatherIcon code={props.data.weather[0].icon} size={36} />

      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max">
          {Math.round(props.data.temp.max)}°
        </span>
        <span className="WeatherForecast-temperature-min">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
