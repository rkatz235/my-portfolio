$(document).ready(function(){
  /*load external html files*/
  $("#pt-main #pg-home").load("views/home.html");
  $("#pt-main #pg-about").load("views/about.html");
  $("#pt-main #pg-contact").load("views/contact.html");
  $("#pt-main #pg-resume").load("views/resume.html");
  $("#pt-main #pg-projects").load("views/projects.html");
  $("#pg-home").addClass("pt-page-current");
  $(".nav").show();

  $(".north > button").click(function(e){
    goWhere($(".pt-page-current"), $("#pg-about"), "north");
    disableEnable($(".north > button"));
  });
  $(".east > button").click(function(e){
    goWhere($(".pt-page-current"), $("#pg-resume"), "east");
    disableEnable($(".east > button"));
  });
  $(".south > button").click(function(e){
    goWhere($(".pt-page-current"), $("#pg-contact"), "south");
    disableEnable($(".south > button"));
  });
  $(".west > button").click(function(e){
    goWhere($(".pt-page-current"), $("#pg-projects"), "west");
    disableEnable($(".west > button"));
  });
});

var disableEnable = function(disable){
  $("button").each(function(){
    $(this).prop("disabled", false);
  });
  disable.prop("disabled", true);
};

var goWhere = function(curPage, nextPage, direction){
  var to;
  var from;
  if(direction === "north"){
    to = "pt-page-moveToBottom";
    from = "pg-pagemoveFromTop";
  } else if (direction === "south") {
    to = "pt-page-moveToTop";
    from = "pt-page-moveFromBottom";
  } else if (direction === "east"){
    to = "pt-page-moveToLeft";
    from = "pt-page-moveFromRight";
  } else if (dirction === "west"){
    to = "pt-page-moveToRight";
    from = "pt-page-moveFromLeft";
  } else {
    console.log("invalid direction value: mytransitions.js > goWhere(curPage, nextPage, direction)");
  }
  nextPage.addClass("pt-page-current");
  curPage.addClass(to);
  nextPage.addClass(from).
  one("webkitAnimationEnd msAnimationEnd oanimationend animationEnd", function(e){
    curPage.removeClass(to);
    curPage.removeClass("pt-page-current");
    nextPage.removeClass(from);
  })
}
/*
var goNorth = function(curPage, nextPage){
  nextPage.addClass("pt-page-current");
  curPage.addClass("pt-page-moveToBottom");
  nextPage.addClass("pt-page-moveFromTop").
  one("webkitAnimationEnd oanimationend msAnimationEnd animationEnd", function(e){
    curPage.removeClass("pt-page-moveToBottom");
    curPage.removeClass("pt-page-current");
    nextPage.removeClass("pt-page-moveFromTop");
  });
};
var goEast = function(curPage, nextPage){
  nextPage.addClass("pt-page-current");
  curPage.addClass("pt-page-moveToLeft");
  nextPage.addClass("pt-page-moveFromRight").
  one("webkitAnimationEnd oanimationend msAnimationEnd animationEnd", function(e){
    curPage.removeClass("pt-page-moveToLeft");
    curPage.removeClass("pt-page-current");
    nextPage.removeClass("pt-page-moveFromRight");
  });
};

var goSouth = function(curPage, nextPage){
  nextPage.addClass("pt-page-current");
  curPage.addClass("pt-page-moveToTop");
  nextPage.addClass("pt-page-moveFromBottom").
  one("webkitAnimationEnd msAnimationEnd oanimationend animationEnd", function(e){
    curPage.removeClass("pt-page-moveToTop");
    curPage.removeClass("pt-page-current");
    nextPage.removeClass("pt-page-moveFromBottom");
  });
};

var goWest = function(curPage, nextPage){
  nextPage.addClass("pt-page-current");
  curPage.addClass("pt-page-moveToRight");
  nextPage.addClass("pt-page-moveFromLeft").
  one("webkitAnimationEnd msAnimationEnd oanimationend animationEnd", function(e){
    curPage.removeClass("pt-page-moveToRight");
    curPage.removeClass("pt-page-current");
    nextPage.removeClass("pt-page-moveFromLeft");
  });
};
*/
