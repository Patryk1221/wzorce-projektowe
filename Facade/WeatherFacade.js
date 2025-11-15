const BASE = 'https://api.openweathermap.org';

class WeatherFacade {
  constructor(apiKey) {
    if (!apiKey) throw new Error('Brak klucza API.');
    this.apiKey = apiKey;
  }

  async getCoordinates(city) {
    if (!city?.trim()) return null;
    const url = `${BASE}/geo/1.0/direct?q=${encodeURIComponent(city.trim())}&limit=1&appid=${this.apiKey}`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const arr = await res.json();
    if (!Array.isArray(arr) || arr.length === 0) return null;
    return { lat: arr[0].lat, lon: arr[0].lon };
  }

  async getWeather(city) {
    const coords = await this.getCoordinates(city);
    if (!coords) return null;

    const url = `${BASE}/data/3.0/onecall?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=${this.apiKey}`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();

    return {
      city: city.trim(),
      lat: coords.lat,
      lon: coords.lon,
      temp: data?.current?.temp ?? null
    };
  }
}

module.exports = WeatherFacade;