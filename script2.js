
function getWeatherdata(cityNameformatted) {
    var APIKey = "272144b5a50ef7e9a6cec649a29117c0";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityNameformatted + "&appid=" + APIKey;

fetch(queryURL)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
});
}


function getWeatherdata(cityNameformatted) {
    var APIKey = "272144b5a50ef7e9a6cec649a29117c0";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityNameformatted + "&appid=" + APIKey;
    
    fetch(queryURL)
        .then(function (response) {
            return response.json();  
            })
        .then(function (data){
            fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityNameformatted + "&appid" + APIKey + "&units=imperial";
            console.log(cityNameformatted)
            console.log(fiveDayURL)
            return fiveDayURL;
        })