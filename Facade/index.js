const WeatherFacade = require('./WeatherFacade');

const apiKey = 'Klucz123';
const city = process.argv.slice(2).join(' ');

if (!city) {
  console.log('Brakuje nazwy miasta!');
  process.exit(1);
}

(async () => {
  try {
    const facade = new WeatherFacade(apiKey);
    const result = await facade.getWeather(city);
    if (!result) {
      console.log('Nie znaleziono miasta lub błąd pobierania.');
      return;
    }
    console.log(`Miasto: ${result.city}`);
    console.log(`Koordynaty: lat=${result.lat}, lon=${result.lon}`);
    console.log(
      result.temp == null ? 'Brak temperatury w odpowiedzi.' : `Aktualna temperatura: ${result.temp.toFixed(1)} °C`
    );
  } catch (e) {
    console.log('Błąd:', e.message);
  }
})();