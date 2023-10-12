// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const apiKey = 'YOUR_API_KEY';
const city = 'New York'; // You can change the city

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById('city').textContent = data.name;
    const iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    document.getElementById('weather-icon').innerHTML = `<img src="${iconUrl}" alt="Weather Icon">`;
    document.getElementById('temperature').textContent = `${(data.main.temp - 273.15).toFixed(1)}°C`;
    document.getElementById('description').textContent = data.weather[0].description;
  })
  .catch((error) => console.error('Error fetching data:', error));
