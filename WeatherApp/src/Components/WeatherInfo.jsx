import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import PropTypes from "prop-types";

const WeatherInfo = ({ weatherInfo }) => {
  const imageUrl =
    weatherInfo.humidity > 80
      ? "/images/monsoon.avif"
      : weatherInfo.temp > 25
      ? "/images/summer.avif"
      : "/images/winter.avif";

  const iconStatus =
    weatherInfo.humidity > 80 ? (
      <ThunderstormIcon />
    ) : weatherInfo.temp > 25 ? (
      <WbSunnyIcon />
    ) : (
      <AcUnitIcon />
    );
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h3>WeatherInfo - {weatherInfo.weather}</h3>
      <Card sx={{ maxWidth: 345 }} style={{ boxShadow: "none" }}>
        <CardMedia sx={{ height: 200 }} image={imageUrl} title="green iguana" />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign={"center"}
          >
            {weatherInfo.city} {iconStatus}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temperature ={weatherInfo.temp}&deg;</p>
            <p>Humidity = {weatherInfo.humidity}</p>
            <p>Min Temp = {weatherInfo.tempMin}&deg;</p>
            <p>Max Temp = {weatherInfo.tempMax}&deg;</p>
            <p>
              The weather can be described as haze and feels like
              {weatherInfo.feelslike}&deg;
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

WeatherInfo.propTypes = {
  weatherInfo: PropTypes.object.isRequired,
};

export default WeatherInfo;
