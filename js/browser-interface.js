var pingPong = require('../js/ping-pong.js').pingPong;

$(document).ready(function(){
  $('#ping-pong').submit(function(event){
    event.preventDefault();
    var goal = $('#goal').val();
    var output = pingPong(goal);
    $('#solution').empty();
    output.forEach(function(element){
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
