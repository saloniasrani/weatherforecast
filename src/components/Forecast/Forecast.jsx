import React from "react";
import "./Forecast.css";
function Forecast(props) {
  if (props.weather != null) {
    let city = props.weather.city;
    let temp = Math.round(props.weather.temp - 273.15);
    let sky = props.weather.cloud;
    let country = props.weather.country;
    let image = props.weather.image;
    return (
      <div className="container">
        <div className="flex1">
          <p className="sky">{sky}</p>
        </div>
        <div className="flex2">
          <div className="flex2">
            <p className="temp">{temp}&deg;</p>

            <img
              width="2px"
              height="100px"
              src={"http://openweathermap.org/img/wn/01n@2x.png"}
              alt="icon"
            />
            <div>
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
          <img
            width="100px"
            height="100px"
            src={`http://openweathermap.org/img/wn/${image}@2x.png`}
            alt="icon"
          />
        </div>
      </div>
    );
  }
}
export default Forecast;
