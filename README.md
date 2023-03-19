# Weather-Dashboard-Challenge-6

~link to deployed app here~

![Weather Dashboard Screenshot 1]()
![Weather Dashboard Screenshot 2]()

# User Story

AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly

# Acceptance Criteria

GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city

## Description

My motivation for this project was to use a server-side API to build a Weather Dashabord to help plan future trips. 

I built this application so I could learn to use server-side APIs to retrieve and display data. Additionally, I wanted to practice writing HTML, CSS and JavaScript code, while using programs such as Bootstrap, jQuery and Day.js.

This application solves a user's need to access the weather forecast in any city of their choosing while also getting information on future weather conditions in that city. 

Through building out this application, I was able to solidify my knowledge on using a fetch request to retrieve data from an API. I learned how to make a responsive webpage layout using Bootstrap. 

## Usage

To use this application, you will first go to the deployed page linked above. 

From there, you will enter a city you're interest in visiting or learning the weather conditions of into the search bar, once you click the "Search" button or hit enter, you will be presented with the current wether conditions of that city. 

Right below that, you'll see a 5-Day Forecrast section that will present you with future weather conditions for the next 5 days. 

## Credits

-Used following link to assist with API key:
https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys 
-Request URLs were fetched from the following APIs:
https://openweathermap.org/current 
https://openweathermap.org/forecast5
-Used following link to assist with styling for gradient background:
https://www.w3schools.com/css/css3_gradients.asp 
-Used following links in dayjs for current date + formatting:
https://day.js.org/docs/en/display/format
https://day.js.org/docs/en/durations/add

JavaScript fetch request were written with the assitance of tutor, Katherine Redford.

Local Storage functions were created with the assitance of AskBCS Learning Assistant user ask-235781.

## License

N/A

## Features

-Search engine that fetches the results of weather conditions in different cities. 
-Functionality to display weather forecast for the next 5 days. 
