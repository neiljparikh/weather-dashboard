//DEPENDENCIES
var citySearchform = document.getElementById('city-search-form');
var cityHeading = document.getElementById('city-searched-heading');
var APIKey = "272144b5a50ef7e9a6cec649a29117c0";
var todaysDate;

//FUNCTIONS

// Capture Inputted Search City
document.getElementById("city-search-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var cityName = document.getElementById('city-inputted').value;
    //Code below solves for formatting issues when enterting cities that are more than one word
    var cityNameformatted = cityName.split(" ").join("+")
    getTodaysdata(cityNameformatted);
    getFivedaydata(cityNameformatted);

});

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
            todaysDate = dayjs().format("MM/DD/YYYY");
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
    }
        var citySearchform = document.getElementById('city-search-form');
        var cityHeading = document.getElementById('city-searched-heading');
        var APIKey = "272144b5a50ef7e9a6cec649a29117c0";
})
// var todaysdate = dayjs.unix(data.dt).format("MM/DD/YYYY");

//FUNCTIONS

// Capture Inputted Search City
document.getElementById("city-search-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var cityName = document.getElementById('city-inputted').value;
    //Code below solves for formatting issues when enterting cities that are more than one word
    var cityNameformatted = cityName.split(" ").join("+")
    getTodaysdata(cityNameformatted);
    getFivedaydata(cityNameformatted);

});

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
       

    }
  

        
        
        console.log(dayjs.unix(1318781876).format('MM/DD/YYYY'))
     