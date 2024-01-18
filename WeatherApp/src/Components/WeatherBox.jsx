import React, { useState } from "react";
import WeatherSerch from "./WeatherSerch";
import WeatherInfo from "./WeatherInfo";

const WeatherBox = () => {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelslike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 20px)",
      }}
    >
      <div
        style={{
          boxShadow:
            "0px 14px 28px rgba(0, 0, 0, 0.25), 0px 10px 10px rgba(0,0,0,0.22) ",
          borderRadius: "4px",
        }}
      >
        <WeatherSerch updateInfo={updateInfo} />
        <WeatherInfo weatherInfo={weatherInfo} />
      </div>
    </div>
  );
};

export default WeatherBox;
