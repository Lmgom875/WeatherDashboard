$(document).ready(function(){
/* -------------------------- */
/* Variables*/
/* -------------------------- */

var textBox = "";
var inputLoc = "Hartford";
var apiKey = "244e1909ec9b0b408cc09c27f2d725dd";
var queryURL_Current = "http://api.openweathermap.org/data/2.5/weather?q="+inputLoc+"&units=imperial&appid="+apiKey;
var queryURL_5Days = "http://api.openweathermap.org/data/2.5/forecast?q="+inputLoc+"&units=imperial&appid="+apiKey;
var time = moment().format('MMM DD YYYY');

displayWeatherInfo();



/* -------------------------- */
/* Function*/
/* -------------------------- */

//Function for Get and Display weather info
function displayWeatherInfo(){
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
// function displayForecastInfo(){
//     $.ajax({
//         url: queryURL_5Days,
//         method: "GET",
//         }).then(function(response5Days){

//         })
//}

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
