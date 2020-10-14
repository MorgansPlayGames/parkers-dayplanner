$(document).ready(function() {
    var area = $("#day");
    var todayEl = $("#currentDay")
    var times = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
    //var date = 
    //todayEl
    for(var i = 0; i<times.length; i++){

    var basic = $("<div class = 'row'></div>");
    var firstEl = $("<div class = 'col-1'>"+times[i]+"</div>");
    var secondEl = $("<div class = 'col-10'></div>");
    var thirdEl = $("<div class = 'col-1'></div>");
    var inputEl = $("<textarea class='container'></textarea>")
    var saveBtn = $("<button>Save</button>")
    basic.append(firstEl);
    basic.append(secondEl);
    secondEl.append(inputEl);
    thirdEl.append(saveBtn);
    basic.append(thirdEl);
    area.append(basic);
    }
    







  });