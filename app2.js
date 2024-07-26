const apiKey = 'c79c2a1637d9a6185791a322bcbcca8a';

// Function to update the weather information in the DOM
function updateWeather(data) {
    const tempDisplay = document.querySelector(".temp");
    const locDisplay = document.querySelector(".loc");
    const feelsLikeDisplay = document.querySelector(".flf");
    const humidityDisplay = document.querySelector(".humf");
    const humidityLabel = document.getElementById("hum");
    const feelsLikeLabel = document.getElementById("feel");

    tempDisplay.innerHTML = `${parseInt(data.main.temp)}&#8451;`;
    locDisplay.innerHTML = data.name;
    feelsLikeDisplay.innerHTML='Feelslike:'+data.main.feels_like
          humidityDisplay.innerHTML='Humidity:'+data.main.humidity
    humidityLabel.style.visibility = "visible";
    feelsLikeLabel.style.visibility = "visible";
}

// Function to fetch weather data
async function fetchWeather(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        updateWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Error fetching weather data. Please try again later.');
    }
}

// Success callback for geolocation
const successCallback = (position) => {
    const { latitude, longitude } = position.coords;
    console.log('Position:', position, `Longitude: ${longitude}`);

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    fetchWeather(weatherUrl);
};

// Error callback for geolocation
const errorCallback = (error) => {
    console.error('Geolocation error:', error);
    alert('Error retrieving location. Please enable location services and try again.');
};

// Request current position
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);


