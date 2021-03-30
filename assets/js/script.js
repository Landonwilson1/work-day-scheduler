// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

//Display today's time on next line
var todayTime = moment().format("hh:mm a");
$("#time").html(todayTime);

//Save button for planner 
$(document).ready(function () {

    $(".saveBtn").on("click", function () {
        // Get the description val
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        // Text is saved in time block
        localStorage.setItem(time, text);
    })

    //function for scheduer with time
    function timeTracker() {
        // var for time
        var timeNow = moment().hour();

        // loop for current time/timeblocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // conditional statement to determine indicator color of timeblock
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // local storage get
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    //end js
    timeTracker();
})