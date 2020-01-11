$(document).ready(function(){
/* -------------------------- */
/* Variables*/
/* -------------------------- */

var textBox = "";
var inputLoc = "Hartford";
var apiKey = "244e1909ec9b0b408cc09c27f2d725dd";
var queryURL_Current = "http://api.openweathermap.org/data/2.5/weather?q="+inputLoc+"&units=imperial&appid="+apiKey;
var queryURL_5Days = "http://api.openweathermap.org/data/2.5/forecast?q="+inputLoc+"&units=imperial&appid="+apiKey;

displayWeatherInfo();




/* -------------------------- */
/* Function*/
/* -------------------------- */

//Function fron get the api info
function displayWeatherInfo(){
    $.ajax({
        url: queryURL_Current,
        method: "GET",
        }).then(function(responseCurrent){
        var cityName = responseCurrent.name;
        var icon = responseCurrent.weather[0].icon;
        var iconUrl = "http://openweathermap.org/img/w/"+icon+".png";
        var temp = responseCurrent.main.temp;
        var Humidity = responseCurrent.main.humidity;
        var windSpeed = responseCurrent.wind.speed;
        $("#currentConditions1").append("<h4 id='h4CityName'>"+cityName);
        $("#h4CityName").append("<img id='wicon' src='' alt='Weather Icon'>");
        $("#wicon").attr('src',iconUrl);
        $("#currentConditions1").append("<p>Temperature: "+temp+"&#8457;</p>");
        $("#currentConditions1").append("<p>Humidity: "+Humidity+"%</p>");
        $("#currentConditions1").append("<p>Wind Speed: "+windSpeed+" MPH</p>");

        console.log(responseCurrent);
        console.log(icon);
        console.log(iconUrl);
        })
}

//Function to put the info on display
function displayInfo (){
    $("#currentConditions1").append("<p>"+cityName+"</p>");

}

//function to create locations button
function createBtnLoc(){
    textBox = $("#seachBoxText").val();
    if(textBox != ""){
        $("#locBtn").prepend("<button class='btn btn-default btnLocation' id='btn btnLocation btn-"+textBox+"' type='button'>"+textBox+"</button></br>")
    }
}

/* -------------------------- */
/* Events*/
/* -------------------------- */


    $("#btnGo").click(function(){
        createBtnLoc();
    });
});
