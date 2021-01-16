//global variables
const APIKEY = "f2eb32d047cfe66ff08699de666cfe89";
var monthEl = $(".c-main");
var dataCel = $(".c-cal__cel");
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1;
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
var monthText = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var indexMonth = month;
var todayBtn = $(".c-today__btn");
var addBtn = $(".js-event__add");
var saveBtn = $(".js-event__save");
var closeBtn = $(".js-event__close");
var winCreator = $(".js-event__creator");
var inputDate = $(this).data();
var today = year + "-" + month + "-" + day;
//console.log(today);


// ------ set default events -------
function defaultEvents(dataDay,dataName,dataNotes,classTag){
  var date = $('*[data-day='+dataDay+']');
  date.attr("data-name", dataName);
  date.attr("data-notes", dataNotes);
  date.addClass("event");
  date.addClass("event--" + classTag);
}

// defaultEvents(today, 'YEAH!','Today is your day','important');
// defaultEvents('2017-12-25', 'MERRY CHRISTMAS','A lot of gift!!!!','festivity');
// defaultEvents('2017-05-04', "LUCA'S BIRTHDAY",'Another gifts...?','birthday');
// defaultEvents('2017-03-03', "MY LADY'S BIRTHDAY",'A lot of money to spent!!!!','birthday');


// ------ functions control -------

//button of the current day
todayBtn.on("click", function(e) {
  e.preventDefault();
    $(".c-aside__num").text(day);
  $(".c-aside__month").text(monthText[month - 1]);
  if (month < indexMonth) {
    var step = indexMonth % month;
    $(".c-aside__num").text(day);
  $(".c-aside__month").text(monthText[month - 1]);
    movePrev(step, true);
  } else if (month > indexMonth) {
    var step = month - indexMonth;
    $(".c-aside__num").text(day);
  $(".c-aside__month").text(monthText[month - 1]);
    moveNext(step, true);
  }
  //dataCel.removeClass("isSelected");
  //thisEl.addClass("isSelected");
});

//higlight the cel of current day
dataCel.each(function() {
  if ($(this).data("day") === today) {
    $(this).addClass("isToday");
    fillEventSidebar($(this));
  }
});

//window event creator

//fill sidebar event info
function fillEventSidebar(self) {
  $(".c-aside__event").remove();
  var thisName = self.attr("data-name");
  var thisNotes = self.attr("data-notes");
  var thisImportant = self.hasClass("event--important");
  var thisBirthday = self.hasClass("event--birthday");
  var thisFestivity = self.hasClass("event--festivity");
  var thisEvent = self.hasClass("event");
  
  switch (true) {
    case thisImportant:
      $(".c-aside__eventList").append(
        "<p class='c-aside__event c-aside__event--important'>" +
        thisName +
        " <span> • " +
        thisNotes +
        "</span></p>"
      );
      break;
    case thisBirthday:
      $(".c-aside__eventList").append(
        "<p class='c-aside__event c-aside__event--birthday'>" +
        thisName +
        " <span> • " +
        thisNotes +
        "</span></p>"
      );
      break;
    case thisFestivity:
      $(".c-aside__eventList").append(
        "<p class='c-aside__event c-aside__event--festivity'>" +
        thisName +
        " <span> • " +
        thisNotes +
        "</span></p>"
      );
      break;
    case thisEvent:
      $(".c-aside__eventList").append(
        "<p class='c-aside__event'>" +
        thisName +
        " <span> • " +
        thisNotes +
        "</span></p>"
      );
      break;
   }
};
dataCel.on("click", function() {

  var thisEl = $(this);
  var thisDay = $(this)
  .attr("data-day")
  .slice(8);
  var thisMonth = $(this)
  .attr("data-day")
  .slice(5, 7);

  fillEventSidebar($(this));
  display(thisDay, monthText[thisMonth - 1]);


  $(".c-aside__num").text(thisDay);
  $(".c-aside__month").text(monthText[thisMonth - 1]);
  //console.log(thisDay+monthText[thisMonth - 1]);


  dataCel.removeClass("isSelected");
  thisEl.addClass("isSelected");

});

//function for move the months
function moveNext(fakeClick, indexNext) {
  for (var i = 0; i < fakeClick; i++) {
    $(".c-main").css({
      left: "-=100%"
    });
    $(".c-paginator__month").css({
      left: "-=100%"
    });
    switch (true) {
      case indexNext:
        indexMonth += 1;
        break;
    }
  }
}
function movePrev(fakeClick, indexPrev) {
  for (var i = 0; i < fakeClick; i++) {
    $(".c-main").css({
      left: "+=100%"
    });
    $(".c-paginator__month").css({
      left: "+=100%"
    });
    switch (true) {
      case indexPrev:
        indexMonth -= 1;
        break;
    }
  }
}

//months paginator
function buttonsPaginator(buttonId, mainClass, monthClass, next, prev) {
  switch (true) {
    case next:
      $(buttonId).on("click", function() {
        if (indexMonth >= 2) {
          $(mainClass).css({
            left: "+=100%"
          });
          $(monthClass).css({
            left: "+=100%"
          });
          indexMonth -= 1;
        }
        return indexMonth;
      });
      break;
    case prev:
      $(buttonId).on("click", function() {
        if (indexMonth <= 11) {
          $(mainClass).css({
            left: "-=100%"
          });
          $(monthClass).css({
            left: "-=100%"
          });
          indexMonth += 1;
        }
        return indexMonth;
      });
      break;
  }
}

buttonsPaginator("#next", monthEl, ".c-paginator__month", false, true);
buttonsPaginator("#prev", monthEl, ".c-paginator__month", true, false);

//launch function to set the current month
moveNext(indexMonth - 1, false);

//fill the sidebar with current day
$(".c-aside__num").text(day);
$(".c-aside__month").text(monthText[month - 1]);

function display(cday, month)
{
  
  var day;
switch (month) {
  
  case "January":
    day = "01";
    break;
  case "February":
    day = "02";
    break;
  case "March":
    day = "03";
    break;
  case "April":
    day = "04";
    break;
  case "May":
    day = "05";
    break;
  case "June":
    day = "06";
    break;
  case "July":
    day = "07";
    break;
  case "August":
    day = "08";
    break;
  case "September":
    day = "09";
    break;
  case "October":
    day = "10";
    break;
  case "November":
    day = "11";
    break;
  case "December":
    day = "12";
    
}

//console.log(cday+" page  "+day);
    var req1 = new XMLHttpRequest();
    req1.onreadystatechange=function()
    {
       if(req1.readyState==4 && req1.status==200){
          var values =JSON.parse(req1.responseText);
          console.log(values);
          for (let i = 0; i < 20; i++) {
               
          if(values.results[i].release_date.startsWith('2019-'+day+'-'+cday))
          {
          //  console.log(values.results[i].title);
            $(".c-aside__eventList").append(
                "<p class='c-aside__event c-aside__event--birthday'>" +
                values.results[i].title +
                " <span></span></p>"
              );
          }
          else
          {
            //console.log("Not found");
           } 
           }
          }
          };

        
        

      req1.open("GET", 'https://api.themoviedb.org/3/discover/movie?page=1&primary_release_date.gte=2019-'+day+'-'+cday+'&primary_release_date.lte=2019-'+day+'-'+cday+' &language=en-US&api_key='+APIKEY, false);
      req1.send();  
}