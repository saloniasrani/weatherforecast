import React from "react";
import "./Forecast.css";
function Forecast(props) {
  if (props.weather != null) {
    let city = props.weather.city;
    let temp = Math.round(props.weather.temp - 273.15);
    let sky = props.weather.cloud;
    let country = props.weather.country;
    return (
      <div className="container">
        <div className="flex1">
          <p className="sky">{sky}</p>
          <p className="temp">{temp}&deg;</p>
        </div>

        <div className="flex2">
          <p> {new Date().toDateString()}</p>
          <div>
            <img
              width="15px"
              height="17px"
              src={require("./Images/location.png")}
              alt="location"
            />

            <span className="city">{city} </span>

            <span className="country">, {country}</span>
          </div>
        </div>
      </div>
    );
  }
}
export default Forecast;
