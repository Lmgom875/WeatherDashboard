$(document).ready(function(){
/* -------------------------- */
/* Variables*/
/* -------------------------- */

var textBox = "";
var inputLoc = "Hartford";
var apiKey = "";
var queryURL_Current = "http://api.openweathermap.org/data/2.5/weather?q="+inputLoc+"&appid="+apiKey;
var queryURL_5Days = "http://api.openweathermap.org/data/2.5/forecast?q="+inputLoc+"&appid="+apiKey;

getWeatherInfo();


/* -------------------------- */
/* Function*/
/* -------------------------- */
function getWeatherInfo(){
     $.ajax({
        url: queryURL_5Days,
        method: "GET"
        }).then(function(response_5Days){
        var results_5Days = response_5Days;
        //console.log(results_5Days);
    })
    $.ajax({
        url: queryURL_Current,
        method: "GET"
        }).then(function(response_Current){
        var results_Current = response_Current;
        //console.log(results_Current);
        })
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
