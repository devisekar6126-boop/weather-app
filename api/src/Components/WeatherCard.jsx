
import WeatherDetails from "./WeatherDetails";

function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2>{weather.name}, {weather.sys.country}</h2>

      <h1>{weather.main.temp} °C</h1>

      <p className="description">
        {weather.weather[0].description}
      </p>

      <WeatherDetails weather={weather} />
    </div>
  );
}

export default WeatherCard;
