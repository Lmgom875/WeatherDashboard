$(document).ready(function(){
/* -------------------------- */
/* Variables*/
/* -------------------------- */

    var textBox = "";

/* -------------------------- */
/* Function*/
/* -------------------------- */

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

$("#testbtn1").click(function(){
    console.log("funciona");
})
    console.log($("#btnGo"));
    $("#btnGo").click(function(){
        createBtnLoc();
    });
});
