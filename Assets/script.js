const apiKey = '58f4ff6b22f562aa33f26ce8e835f1a2';
const city = 'Portland';

const cityNameElement = document.getElementById('city-name');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const humidityElement = document.getElementById('humidity');
const windSpeedElement = document.getElementById('wind-speed');
const cityinput= document.getElementById('city')
const searchbtn= document.getElementById('search')
searchbtn.addEventListener('click',searchweather)

function searchweather(){
    console.log(cityinput.value)
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityinput.value}&appid=${apiKey}&units=imperial`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
      cityNameElement.textContent = cityinput.value;
      temperatureElement.textContent = `Temperature: ${data.list[0].main.temp}°C`;
      descriptionElement.textContent = `Description: ${data.list[0].weather[0].description}`;
      humidityElement.textContent = `Humidity: ${data.list[0].main.humidity}%`;
      windSpeedElement.textContent = `Wind Speed: ${data.list[0].wind.speed}m/s`;
    })
    .catch(error => console.log(error));
  

    
}


