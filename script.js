$(document).ready(function () {
    // add click function & logic for AJAX request here
    // do not forget to hid API key by following steps in README

    var baseURL = "https://api.openweathermap.org/data/2.5/";
    var apiKey= "";

    var myKey = config.MY_KEY;

    $("#search").click(function searchWeather(){
        var location = $("#location").val();
        var URL = `${baseURL}weather?q=${location}&APPID=${myKey}`;

      $.ajax({
        url: URL,
        method: "GET",
        success: function(data){
            console.log(data);

            var celcius= Math.floor(data.main["temp"] - 273.15);
            var degreeSymbol = String.fromCharCode(176);

            celcius += " " + degreeSymbol;

            var weatherInfo = "<h2> Weather in: " + data.name + ", " + data.sys["country"] + "</h2>";
             weatherInfo += "<p> Temperature: "+ celcius + "C</p>";
             weatherInfo += "<p> Weather: " + data.weather["0"]["description"] + "</p>";
             weatherInfo += "<p> Humidity: "+ data.main["humidity"] +"%</p>";
             weatherInfo += "<p> Wind Speed: "+ data.wind["speed"] +" m/s</p>";

            $("#weather-info").html(weatherInfo);
            $("#error-message").html("");

        },
        error: function(){
            $("#weather-info").html('');
            $("#error-message").html("<p> Network Error. Please try again later. </p>")
        }
      })
    })
});