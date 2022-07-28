import React from "react";

function Forecast(props) {
  if (props.weather != null) {
    let city = props.weather.city;
    let temp = Math.round(props.weather.temp - 273.15);
    let sky = props.weather.cloud;
    let country = props.weather.country;
    return (
      <div>
        <p>{city}</p>
        <p>{temp}</p>
        <p>{sky}</p>
        <p>{country}</p>
      </div>
    );
  }
}
export default Forecast;
