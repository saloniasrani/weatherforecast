import React, { useState } from "react";
import "./Page.css";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import Form from "../Form/Form";
import Forecast from "../Forecast/Forecast";

const APIkey = "cb66c1364675a3e944528ecd08b8638d";
const Page = () => {
  const [weather, setWeather] = useState(null);
  const [iserror, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const getData = (e) => {
    e.preventDefault();
    setLoading(true);
    setWeather(null);
    setError(false);
    let cityname = e.target.city.value;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}`
    )
      .then((response) => response.json())
      .then((actualData) => {
        if (actualData.cod == 404) {
          setError(true);
        } else {
          setWeather({
            cloud: actualData.weather[0].main,
            temp: actualData.main.temp,
            city: actualData.name,
            country: actualData.sys.country,
            image: actualData.weather[0].icon
          });
        }
      })

      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="box">
      <Header />
      <Form getData={getData} />

      {isLoading ? (
        <Loader />
      ) : iserror ? (
        "City not Found!"
      ) : (
        <Forecast weather={weather} />
      )}
    </div>
  );
};

export default Page;
