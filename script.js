//DEPENDENCIES
var citySearchform = document.getElementById('city-search-form');
var cityHeading = document.getElementById('city-searched-heading');


//DATA


//FUNCTIONS

// Capture Inputted Search City
document.getElementById("city-search-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var cityName = document.getElementById('city-inputted').value;
    //Code below solves for formatting issues when enterting cities that are more than one word
    var cityNameformatted = cityName.split(" ").join("+")
    getWeatherdata(cityNameformatted);
});

// API Call
function getWeatherdata(cityNameformatted) {
    var APIKey = "272144b5a50ef7e9a6cec649a29117c0";
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
       var hightemp = data.main.temp_max;
       console.log(hightemp)
       
    }

 
    // fetch(fiveDayURL)
    //     .then(function(response2) {
    //         return response2.json();
    //     })
    //     .then(function)(data2) {


    //     }
    //     }
        // .then(function (response2) {
        //     return response2.json();  // Use json() instead of JSON()
        // })
        // .then(function (data2) {
        //     // Process data for the five-day forecast here
        //     console.log(data2);
        // })
        // .catch(function (error) {
        //     // Handle any errors that occurred in the fetch requests
        //     console.error('Error:', error);
        // });

              
            
            
        



        
//INIT
