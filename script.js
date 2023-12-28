//DEPENDENCIES
var citySearchform = document.getElementById('city-search-form');
var cityHeading = document.getElementById('city-searched-heading');
var APIKey = "272144b5a50ef7e9a6cec649a29117c0";
var pastSearches = document.getElementById('past-searches')
todaysDate = dayjs().format("MM/DD/YYYY");

//FUNCTIONS

// Capture Inputted Search City
document.getElementById("city-search-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var cityName = document.getElementById('city-inputted').value;
    //Code below solves for formatting issues when enterting cities that are more than one word
    var cityNameformatted = cityName.split(" ").join("+")
    getTodaysdata(cityNameformatted);
    getFivedaydata(cityNameformatted);
    saveSearch(cityName);

});


// limit this to the most recent 5 searches <-------------------------------
function renderSearch() {
    var existingSearches = JSON.parse(localStorage.getItem("Past Searches")) || [];

    var renderedCities = [];
    for (var i=0; i <existingSearches.length; i++) {
        var city = existingSearches[i];
            if (!renderedCities.includes(city)) {
                var citySearched = document.createElement("li");
                citySearched.textContent = city;
                pastSearches.append(citySearched);
                renderedCities.push(city);
    }}

}


renderSearch()

function saveSearch(cityName) {
    // Get the existing searches from local storage. If there are no existing searches, create an array
    var existingSearches = JSON.parse(localStorage.getItem("Past Searches")) || [];

    // If there are existing searches, parse them into an array
    // Add the new city to the array of searches
    existingSearches.push(cityName);
    
    // Save the updated array back to local storage
    localStorage.setItem("Past Searches", JSON.stringify(existingSearches));
}

// API Call
function getTodaysdata(cityNameformatted) {
   
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityNameformatted + "&appid=" + APIKey + "&units=imperial";

    fetch(queryURL)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            todaysData = data;
            console.log(todaysData)       
            displayToday(data);
         
        });
    }

    function displayToday(data) {
        cityHeading.innerHTML = "";
        cityName = document.getElementById('city-inputted').value;
        
        var todaysForecast = document.getElementById('todays-forecast');
       
        todaysForecast.innerHTML = `
        <span>
        <h1>${cityName} (${todaysDate})</h1>
        <img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png' width='100' height='100'>
         </span>
        <p>Current Temp: ${data.main.temp}°C</p>
        <p>Wind: ${data.wind.speed} m/s</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;

    }
       
    function getFivedaydata(cityNameformatted) {
        var fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityNameformatted + "&appid=" + APIKey + "&units=imperial";
        console.log(fiveDayURL)
        
        fetch(fiveDayURL)
        .then(function (response2) {
        return response2.json();
        })
        .then(function (data2) {
            fivedayData = data2;
            console.log(fivedayData)
        
        fiveDaystorage = [];

        for (var i = 4; i < fivedayData.list.length; i += 8) { 
            var dayData = {
                date: fivedayData.list[i].dt,
                temp: fivedayData.list[i].main.temp,
                wind: fivedayData.list[i].wind.speed,
                humidity: fivedayData.list[i].main.humidity,
                icon: fivedayData.list[i].weather[0].icon
            };
        fiveDaystorage.push(dayData);
        console.log(fiveDaystorage)
        console.log(fiveDaystorage[0].date)
    }
  

            var displayDayOne = document.getElementById('day1')
            displayDayOne.innerHTML = `<h1> ${dayjs.unix(fiveDaystorage[0].date).format('MM/DD/YYYY')} </h1>
            <img src='https://openweathermap.org/img/wn/${fiveDaystorage[0].icon}@2x.png' width='100' height='100'>
            <h4> ${fiveDaystorage[0].temp}°F </h4>
            <h4> ${fiveDaystorage[0].wind} m/s </h4>
            <h4> ${fiveDaystorage[0].humidity}% </h4>`
      

            var displayDayTwo = document.getElementById('day2')
            displayDayTwo.innerHTML = `<h1> ${dayjs.unix(fiveDaystorage[1].date).format('MM/DD/YYYY')} </h1>
            <img src='https://openweathermap.org/img/wn/${fiveDaystorage[1].icon}@2x.png' width='100' height='100'>
            <h4> ${fiveDaystorage[1].temp}°F </h4>
            <h4> ${fiveDaystorage[1].wind} m/s </h4>
            <h4> ${fiveDaystorage[1].humidity}% </h4>`

            var displayDayThree = document.getElementById('day3')
            displayDayThree.innerHTML = `<h1> ${dayjs.unix(fiveDaystorage[2].date).format('MM/DD/YYYY')} </h1>
            <img src='https://openweathermap.org/img/wn/${fiveDaystorage[2].icon}@2x.png' width='100' height='100'>
            <h4> ${fiveDaystorage[2].temp}°F </h4>
            <h4> ${fiveDaystorage[2].wind} m/s </h4>
            <h4> ${fiveDaystorage[2].humidity}% </h4>`

            var displayDayFour = document.getElementById('day4')
            displayDayFour.innerHTML = `<h1> ${dayjs.unix(fiveDaystorage[3].date).format('MM/DD/YYYY')} </h1>
            <img src='https://openweathermap.org/img/wn/${fiveDaystorage[3].icon}@2x.png' width='100' height='100'>
            <h4> ${fiveDaystorage[3].temp}°F </h4>
            <h4> ${fiveDaystorage[3].wind} m/s </h4>
            <h4> ${fiveDaystorage[3].humidity}% </h4>`

            var displayDayFive = document.getElementById('day5')
            displayDayFive.innerHTML = `<h1> ${dayjs.unix(fiveDaystorage[4].date).format('MM/DD/YYYY')} </h1>
            <img src='https://openweathermap.org/img/wn/${fiveDaystorage[4].icon}@2x.png' width='100' height='100'>
            <h4> ${fiveDaystorage[4].temp}°F </h4>
            <h4> ${fiveDaystorage[4].wind} m/s </h4>
            <h4> ${fiveDaystorage[4].humidity}% </h4>`
        
            
})
    }
//FUNCTIONS

// Capture Inputted Search City


// API Call
function getTodaysdata(cityNameformatted) {
   
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityNameformatted + "&appid=" + APIKey + "&units=imperial";
    fetch(queryURL)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            todaysData = data;
            console.log(todaysData)
            displayToday(data)
        });
    }

    function displayToday(data) {
        cityHeading.innerHTML = "";
        cityName = document.getElementById('city-inputted').value;
        
        var todaysForecast = document.getElementById('todays-forecast');
       
        todaysForecast.innerHTML = `
        <span>
        <h1>${cityName} (${todaysDate})</h1>
        <img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png' width='100' height='100'>
         </span>
        <p>Current Temp: ${data.main.temp}°C</p>
        <p>Wind: ${data.wind.speed} m/s</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;

    }
       

    
    

        
        

     