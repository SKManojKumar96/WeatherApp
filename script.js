let result = document.getElementById("result");
let serachBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");

let key = "229970d6ef76e45f2a1e124e6229c73a";

// function to fetch weather details from api and display them.
let getWeather = () => {
  let cityValue = cityRef.value;

  if (cityValue.length == 0) {
    result.innerHTML = `<h3 class='msg'> Please enter a city name </h3>`;
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;

    cityRef.value = "";

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        console.log(data.weather[0].icon);
        console.log(data.weather[0].main);
        console.log(data.weather[0].description);
        console.log(data.name);
        console.log(data.main.temp_min);
        console.log(data.main.temp_max);

        result.innerHTML = `
        <h2 class='city'>${data.name}</h2>
        <h4 class='weather'>${data.weather[0].main}</h4>
        <h4 class='desc'>${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png"/>
        <h1 class='temp'>${data.main.temp} &#176;</h1>
        <div class="temp-container">
        <div >
        <h4>min</h4>
        <h4 class='temp-min'>${data.main.temp_min}</h4>
        </div>
        <div >
        <h4>max</h4>
        <h4 class='temp-max'>${data.main.temp_max}</h4>
        </div>
        </div>
        
        `;
      })
      .catch(() => {
        result.innerHTML = `<h3 class='msg'> City Not Found</h3>`;
      });
  }
};

serachBtn.addEventListener("click", getWeather);

window.addEventListener("load");
