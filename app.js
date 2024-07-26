// Select elements
const placeInput = document.querySelector(".place");
const searchButton = document.querySelector(".simg");
const tempDisplay = document.querySelector(".temp");
const locDisplay = document.querySelector(".loc");
const feelsLikeDisplay = document.querySelector(".flf");
const humidityDisplay = document.querySelector(".humf");
const humidityLabel = document.getElementById("hum");
const feelsLikeLabel = document.getElementById("feel");

// Event listeners
placeInput.addEventListener("keydown", async (e) => {
    if (e.key === 'Enter') {
        await main();
    }
});

searchButton.addEventListener("click", async () => {
    await main();
});

// Main function to fetch and display weather data
async function main() {
    const city = placeInput.value.trim();
    if (!city) {
        alert("Please enter a valid city name.");
        return;
    }

    const apiKey = 'c79c2a1637d9a6185791a322bcbcca8a';
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`);
        
        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();
        console.log(data, data.name, data.main.temp);

        tempDisplay.innerHTML = `${parseInt(data.main.temp)}&#8451;`;
        locDisplay.innerHTML = data.name;
        feelsLikeDisplay.innerHTML='Feelslike:'+data.main.feels_like
          humidityDisplay.innerHTML='Humidity:'+data.main.humidity
        
        humidityLabel.style.visibility = "visible";
        feelsLikeLabel.style.visibility = "visible";
    } catch (error) {
        alert(error.message);
        console.error("Error fetching weather data:", error);
    }
}


        
