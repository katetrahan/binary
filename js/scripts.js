// Back End Logic
var binaryToDecimal = function (number) {
  return number;
}











// Front End Logic
$(document).ready(function() {
  $("#binary").submit(function(event){
    event.preventDefault();
    var number = $("#number").val();
    result = binaryToDecimal(number);
    $("#result").text(result);

  })
});
