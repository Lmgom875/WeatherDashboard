$(document).ready(function(){
/* -------------------------- */
/* Variables*/
/* -------------------------- */

var inputLoc = "Hartford";
var apiKey = "244e1909ec9b0b408cc09c27f2d725dd";
var time = moment().format('MMM DD YYYY');
var numDays = 1;


displayWeatherInfo();
displayForecastInfo();



/* -------------------------- */
/* Function*/
/* -------------------------- */

//Function for Get and Display weather info
function displayWeatherInfo(){
    var queryURL_Current = "http://api.openweathermap.org/data/2.5/weather?q="+inputLoc+"&units=imperial&appid="+apiKey;
    $.ajax({
        url: queryURL_Current,
        method: "GET",
        }).then(function(responseCurrent){
        var cityName = responseCurrent.name;
        var icon = responseCurrent.weather[0].icon;
        var iconUrl = "http://openweathermap.org/img/w/"+icon+".png";
        var temp = Math.floor(responseCurrent.main.temp);
        var Humidity = responseCurrent.main.humidity;
        var windSpeed = Math.floor(responseCurrent.wind.speed);
        $("#currentConditions1").append("<h4 id='h4CityName'>"+cityName);
        $("#h4CityName").append("<img id='wicon' src='' alt='Weather Icon'>");
        $("#wicon").attr('src',iconUrl);
        $("#currentConditions1").append("<h5>"+time);
        $("#currentConditions1").append("<p>Temperature: "+temp+"&#8457;");
        $("#currentConditions1").append("<p>Humidity: "+Humidity+"%");
        $("#currentConditions1").append("<p>Wind Speed: "+windSpeed+" MPH");
        })
}

//function for Get and Display forecast info
function displayForecastInfo(){
    var queryURL_5Days = "http://api.openweathermap.org/data/2.5/forecast?q="+inputLoc+"&units=imperial&appid="+apiKey;
    $.ajax({
        url: queryURL_5Days,
        method: "GET",
        }).then(function(response5Days){
            for(e = 3; e < response5Days.list.length; e+=8){
                var forecastUnit = $("<div class='col-3 forecast' id='forecast"+e+"'>");
                var forecastDate = moment().add(numDays,'d').format('MMM DD YYYY');
                var forecastTemp = Math.floor(response5Days.list[e].main.temp);
                var forecastHum = response5Days.list[e].main.humidity;
                var forecastIcon = response5Days.list[e].weather[0].icon;
                var forecastIconURL = "http://openweathermap.org/img/w/"+forecastIcon+".png";
                $("#forecastDiv").append(forecastUnit);
                $("#forecast"+e).append("<img id='wicon"+e+"' src='' alt='Weather Icon'>");
                $("#forecast"+e).append("<p>"+forecastDate);
                $("#wicon"+e).attr('src',forecastIconURL);
                $("#forecast"+e).append("<p>Temp: "+forecastTemp+"&#8457;");
                $("#forecast"+e).append("<p>Humidity: "+forecastHum+"%");
                console.log(numDays);
                numDays = numDays + 1;
            } 
        })
    }

//function to create locations button
function createBtnLoc(){
    if(inputLoc != ""){
        $("#locBtn").prepend("<button class='btn btn-default btnLocation' id='btn btnLocation btn-"+inputLoc+"' type='button'>"+inputLoc+"</button>")
    }
}

//function for clear
function divsClear(){
    $(".currentConditions").empty();
    $(".forecastDiv").empty();
}
/* -------------------------- */
/* Events*/
/* -------------------------- */


    $("#btnGo").click(function(){
        inputLoc = $("#seachBoxText").val();
        numDays = 1;
        createBtnLoc();
        divsClear();
        displayWeatherInfo();
        displayForecastInfo();
    });
});
