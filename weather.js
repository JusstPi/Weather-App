const search = () => {
  const apiKey = 'd92babbe9c329c3ab3c0845e43864c82'; // Replace YOUR_API_KEY with your OpenWeatherMap API key
  const searchBar = document.getElementById('search-bar');
  const city = searchBar.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = {
        city: data.name,
        temperature: Math.round(data.main.temp),
        weather: data.weather[0].description,
        icon: data.weather[0].icon
      }
      displayWeather(weatherInfo);
    })
    .catch(error => console.log(error));
}

const displayWeather = (weatherInfo) => {
  const weatherIcon = document.querySelector('.weather-icon');
  const city = document.querySelector('.city');
  const temperature = document.querySelector('.temperature');
  const weather = document.querySelector('.weather');

  weatherIcon.style.backgroundImage = `url('http://openweathermap.org/img/w/${weatherInfo.icon}.png')`;
  city.textContent = weatherInfo.city;
  temperature.textContent = `${weatherInfo.temperature} °C`;
  weather.textContent = weatherInfo.weather;
}
