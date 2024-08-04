// DOM Module Pattern
const domManip = (() => {
    const searchButton = document.querySelector(".search-button");
    const clearButton = document.querySelector(".reset-button");
    searchButton.addEventListener("click", fetchCurrentWeather);
    clearButton.addEventListener("click", clearSearch);
    document.addEventListener("DOMContentLoaded", function hideBrokenImg() {
        let firstLoadImg = document.querySelector('img');
        firstLoadImg.style.display='none';
    });
})();

// Async function to fetch current forcast from user input on form
async function fetchCurrentWeather(searchCity, searchState, searchCountry) {
    try {
        const searchCity = document.getElementById("search-city").value;
        const searchState = document.getElementById("search-state").value;
        const searchCountry = document.getElementById("search-country").value;
        
        // Run check to ensure City and Country fields have values
        if (searchCity == "" || searchCountry == "") {
            alert("City and Country are required.  Please try again!");
            return;
        }

        console.log(searchCity);
        console.log(searchState);
        console.log(searchCountry);

        // Run fetch and wait for response JSON
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "," + searchState + "," + searchCountry + "&units=imperial&APPID=d1f87e6c9c7218274f8b83bf9e900783", { mode: "cors"});
        const currentData = await response.json();
        console.log("Fetching current weather data from API....", currentData);
        
        // Construct object for my weather app from the API JSON data
        const currentWeather = {
            mainWeather: currentData.weather[0].main,
            place: currentData.name + ", " + searchState.toUpperCase() + " " + currentData.sys.country,
            temp: Math.round(currentData.main.temp),
            humidity: currentData.main.humidity + "%",
            wind: Math.round(currentData.wind.speed) + " MPH"
        };

        console.log(currentWeather);

        displayWeather(currentWeather);

        getGiphy(currentWeather.mainWeather);

    } catch (err) {
        console.log("Something has went wrong with fetching the current weather data....", err);
        alert("Something has went wrong with fetching the current weather data....");
    }
}

function clearSearch() {
    document.getElementById("search-city").value = "";
    document.getElementById("search-state").value = "";
    document.getElementById("search-country").value = "";
    const img = document.querySelector("img");
    img.style.display = "none";
    clearDOM();
}

// Function to display cleansed JSON to DOM
function displayWeather(currentWeather) {
    const displayDiv = document.querySelector(".display-div");

    // Call function to clear any DOM elements that may be present from previous search
    clearDOM();

    // Create the elements in the DOM
    const city = document.createElement("p");
    city.textContent = currentWeather.place;
    displayDiv.appendChild(city);
    const status = document.createElement("p");
    status.textContent = currentWeather.mainWeather;
    displayDiv.appendChild(status);
    const cityTemp = document.createElement("p");
    cityTemp.textContent = currentWeather.temp + " Degrees";
    displayDiv.appendChild(cityTemp);
    const cityHumidity = document.createElement("p");
    cityHumidity.textContent = currentWeather.humidity + " Humidity";
    displayDiv.appendChild(cityHumidity);
    const cityWind = document.createElement("p");
    cityWind.textContent = currentWeather.wind + " Wind";
    displayDiv.appendChild(cityWind);
}

async function getGiphy(mainWeather) {
    try {
        const img = document.querySelector("img");
        let keyWord = mainWeather;
        if (keyWord == "Clear") {
            keyWord = "Clear Sky";
        }
        const response = await fetch("https://api.giphy.com/v1/gifs/translate?api_key=jh5Ua1zTUPEmBUWYn69qc94sPCUIWoQz&weirdness=0&s=" + keyWord, { mode: "cors" });
        const giphyResponse = await response.json();
        console.log(giphyResponse);
        img.style.display = "";
        img.src = giphyResponse.data.images.original.url;
    } catch (err) {
        console.log("Something has went wrong when trying to fetch the giphy...", err);
    }
}

function clearDOM() {
    // Clear the DOM if anything was present from a prior search
    const nodeList = document.querySelectorAll("p");
    if (nodeList !== null) {
        for (let i = 0; i < nodeList.length; i ++) {
            nodeList[i].remove();
        }
    }
}