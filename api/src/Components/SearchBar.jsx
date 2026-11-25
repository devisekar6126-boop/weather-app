
function SearchBar({ city, setCity, getWeather }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter any city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>
        Search
      </button>
    </div>
  );
}
export default SearchBar;