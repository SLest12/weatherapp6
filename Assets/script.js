const apiKey = '58f4ff6b22f562aa33f26ce8e835f1a2';
const city = 'Portland';
let today;
const cityNameElement = document.getElementById('city-name');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const humidityElement = document.getElementById('humidity');
const windSpeedElement = document.getElementById('wind-speed');
const cityinput = document.getElementById('city')
const searchbtn = document.getElementById('search')
searchbtn.addEventListener('click', function () {
  const city = cityinput.value
  searchweather(city)
  weeklyForecast(city)
})

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const d = new Date();
const todayIndex = d.getDay();
for (let i = 0; i < 5; i++) {
  const weekdayIndex = todayIndex + i;
  const weekday = weekdays[weekdayIndex % 7];

  //document.getElementById('day${i+1}').innerHTML = weekday;
}






function searchweather(city) {
  console.log(cityinput.value)
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      cityNameElement.textContent = cityinput.value;
      temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
      descriptionElement.textContent = `Description: ${data.weather[0].description}`;
      humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
      windSpeedElement.textContent = `Wind Speed: ${data.wind.speed}m/s`;
      today = dt_txt.split(" ")[0]


    })
    .catch(error => console.log(error));



}

{/* <div class="day2">
                    <p id="temperature"></p>
                    <p id="description"></p>
                    <p id="humidity"></p>
                    <p id="wind-speed"></p>
                </div> */}
function weeklyForecast(city) {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=45.5234&lon=-122.6762&appid=${apiKey}&units=imperial`)
    .then(response => response.json())
    .then(data => {

      var dataArr = data.list;
      console.log(dataArr, "%day")
      let htmlCode = ""
      for (let i = 6; i < dataArr.length; i = i + 8) {
        const time = dataArr[i].dt_txt.split(" ")[0]
        if (time !== today) {
          htmlCode += `      <div class="today">
          <h3 id="day">${time}</h3>
          <p id="temperature">${dataArr[i].main.temp}</p>
        
          <p id="humidity"></p>
          <p id="wind-speed"></p>
      </div>    
          `
          today = time
        }

      }
document.getElementById('forecast').innerHTML = htmlCode;
      const apiKey = '58f4ff6b22f562aa33f26ce8e835f1a2';

      fetch(`https://api.example.com/data?apiKey=${apiKey}`)
        .then(response => response.json())
        .then(data => {

          // Render data for day 56910203040
          renderData(data[5]);

        });

      function renderData(dayData) {

        // Get container element
        const container = document.getElementById('data-container');

        // Create element for day 5
        const day5 = document.createElement('div');
        day5.classList.add('day');

        // Add day 5 data 
        day5.innerText = dayData.summary;

        // Append to container
        container.appendChild(day5);

      }




    })
    .catch(error => console.log(error));
}

fetch(`https://api.example.com/data?apiKey=${apiKey}`)
  .then(response => response.json())
  .then(data => {

    // Render data for day 56910203040
    renderData(data[5]);

  });
// in this fetch call we are not checking for errors this could be bad since we do not get a descriptive message so lets do the following

fetch(`https://api.example.com/data?apiKey=${apiKey}`)
  .then(response => {
    if (response.ok) { return response.json() }
    throw new Error('Failed to retrieve weather')
  })
  .then(data => {

    // Render data for day 56910203040
    renderData(data[5]);

  }).catch((err) => console.log('Error while fetching weather', err));