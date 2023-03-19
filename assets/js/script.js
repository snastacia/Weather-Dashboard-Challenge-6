// Variable for API key
var APIKey = "e0b5ecd2fc949a77f92b573312447eb2";

//Variables for form submit
var submitBtn = document.querySelector("#submit");
var userInput = document.querySelector(".user-input");
var searchHistory = document.querySelector("#history");
var weatherIcon = $("#icon");



//Function that handles the form submit

function handleFormSubmit(event) {
    event.preventDefault()
    var city = userInput.value
    if (userInput) {
        getWeather(city)
    }
}

// Write Function that loads search history



//Write Function that saves search history

//Function that fetches weather data from API and displays current + future data

function getWeather(city) {
    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;
    fetch(queryUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            //console.log(data);
            //saveToStorage(data.name)
            var currentDate = dayjs();
            var cityEl = document.querySelector("#city")
            cityEl.textContent = data.name + " (" + currentDate.format("MM/DD/YYYY") + ")"
            weatherIcon.attr("src", "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png");


            var tempEl = document.querySelector("#temp")
            console.log(data.main.temp);
            tempEl.textContent = "Temp: " + data.main.temp + " °F"

            var windEl = document.querySelector("#wind")
            console.log(data.wind.speed);
            windEl.textContent = "Wind: " + data.wind.speed + " MPH"

            var humidityEl = document.querySelector("#humidity")
            console.log(data.main.humidity);
            humidityEl.textContent = "Humidity: " + data.main.humidity + " %"

           weatherForecast(data); 
})
}

function weatherForecast(forecastData) {
    var lat = forecastData.coord.lat
    var lon = forecastData.coord.lon
    var queryUrl = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;

   fetch(queryUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data, "forecastData");


            var startingIndex;

            for (let i = 0; i < data.list.length; i++) {
                console.log(data.list[i].dt_txt.split(" ")[1])
                if (data.list[i].dt_txt.split(" ")[1] == "15:00:00") {
                    startingIndex = i
                    break
                }
            }

                    // for loop to dynamically format the future forecast divs
                    const currentDay = dayjs();
                    const futureForecastElement = document.getElementById("5DayForecast")
                    futureForecastElement.innerHTML = ""
                    let day = 1
                    for (let i = startingIndex; i < data.list.length; i += 8) {
                        var currentDate = currentDay.add(day, "day");
                        futureForecastElement.innerHTML += ` <div class="col card">
                        <p>${currentDate.format("MM/DD/YY")}</p>
                        <img src=${"https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + "@2x.png"} class="future-icon">
                            <p>Temp: ${data.list[i].main.temp + " °F"}</p>
                            <p>Wind: ${data.list[i].wind.speed + " MPH"}</p>
                            <p>Humidity: ${data.list[i].main.humidity + "%"}</p>
                    </div>`
                        day++
                    }

                })
            }

            
//})
//}

// Event listeners for button clicks

submitBtn.addEventListener("click", handleFormSubmit);

//searchHistory.on('click', handleSearchHistoryClick);

//loadStorage();


