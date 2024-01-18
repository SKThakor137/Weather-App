import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Stack } from "@mui/material";

const WeatherSerch = ({ updateInfo }) => {
  let [city, setCity] = useState("");
  let [err, setErr] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feelsLike,
        weather: jsonResponse.weather[0].description,
      };
      return result;
    } catch (error) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setErr(false);
      setCity("");
    } catch {
      setErr(true);
    }
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", minWidth: "345px" }}
    >
      <form action="" onSubmit={handleSubmit}>
        <h2>Weather App Information</h2>
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <TextField
            id="city"
            label="City Name"
            variant="outlined"
            size="small"
            required
            value={city}
            onChange={handleChange}
          />
          <Button variant="contained" type="submit" color="success">
            Serch
          </Button>
        </Stack>
        {err && <p style={{ color: "red" }}>New Such Place</p>}
      </form>
    </div>
  );
};

export default WeatherSerch;
