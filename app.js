const API_KEY = '3265874a2c77ae4a04bb96236a642d2f'; // Ensure this is a valid API key
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getWeather = async (city) => {
    weather.innerHTML = `<h2>Loading...</h2>`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);

        // Check if the response status is not OK
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Check for errors in the API response
        if (data.cod !== 200) {
            throw new Error(`API error: ${data.message}`);
        }

        showWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weather.innerHTML = `<h2>Error fetching weather data</h2>`;
    }
};

const showWeather = (data) => {
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h4>${data.weather[0].main}</h4>
        </div>
    `;
};

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const city = search.value.trim();
    if (city) {
        getWeather(city);
    } else {
        weather.innerHTML = `<h2>Please enter a city name.</h2>`;
    }
});
