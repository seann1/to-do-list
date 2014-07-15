$(document).ready(function() {
  $("form#to-do-list").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#task").val();
    $("ul#list").append("<li>" + inputtedTask + "</li>");
    $("input#task").val("");

    $("li").click(function() {
    $("li").before("<img src='../img/check.jpeg'>");
  });


  });

});


