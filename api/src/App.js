
import { useState } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  function getWeather() {

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
    )
      .then(response => response.json())
      .then(data => {

        if (data.cod !== 200) {
          setError("City not found");
          setWeather(null);
          return;
        }

        setWeather(data);
        setError("");

      })
      .catch(error => {
        setError("Something went wrong");
        setWeather(null);
      });
  }

  return (
    <div className="app-container">

      <h1>Weather App</h1>

      <SearchBar
        city={city}
        setCity={setCity}
        getWeather={getWeather}
      />

      <p className="error">{error}</p>

      {weather && (
        <WeatherCard weather={weather} />
      )}

    </div>
  );
}

export default App;
