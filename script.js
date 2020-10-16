$(document).ready(function() {
    //html areas of interest
    var area = $("#day");
    var todayEl = $("#currentDay")

    //static on page load
    var times = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
    var date = moment().format('MMMM Do YYYY');

    //needed global vars
    var lastHour = 99;
    var currentHour = moment().format('HH');
    
    //initial dom populator
    todayEl.text(date);
    for(var i = 0; i<times.length; i++){
    
      //create each row give them classes
      var basic = $("<div>");
      basic.attr('class', 'time-block row');
      var firstEl = $("<div>");
      firstEl.attr('class', 'hour col-2').text(times[i]);
      var secondEl = $("<textarea>");
      secondEl.attr('class', 'description col-8');
      var thirdEl = $("<button>");
      thirdEl.attr('class', 'saveBtn col-2').text('save');
      
      //append to DOM
      basic.append(firstEl);
      basic.append(secondEl);      
      basic.append(thirdEl);
      area.append(basic);
    }
    
    updateTimeClasses();


    setInterval(tick, 1000);
    function tick(){
      currentHour = moment().format('HH');
      console.log(currentHour);
      //when there is a change in hour update the color of the blocks
      if(lastHour !== currentHour){
        updateTimeClasses();
      }
      lastHour = currentHour;
    }
    
    function updateTimeClasses(){
      //(9:00 is the index of 0)
      var hourIndex = currentHour - 9;
      //change the color based on the times.
      $(".time-block").each(function(timeBox){
        //adding classes and redundant removal of classes 
        if(timeBox < hourIndex){$(this).addClass('past').removeClass('present').removeClass('future')}
        if(timeBox === hourIndex){$(this).addClass('present').removeClass('past').removeClass('future')}
        if(timeBox > hourIndex){$(this).addClass('future').removeClass('present').removeClass('past')}
      });
    }






  });