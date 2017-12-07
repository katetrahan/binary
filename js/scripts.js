// Back End Logic
var binaryToDecimal = function (number) {
  debugger;
  var tmp = number;
  var binaryArray = tmp.split("").reverse();
  var result = 0
  // if (tmp !== 1 && tmp !== 0 ) {
  //   return "weird";
  // }
  // else if ((tmp === 1) || (tmp === 0)) {
  //   return tmp;
  // }
  for (var i= 0; i < binaryArray.length; i +=1) {
    result += binaryArray[i]*Math.pow(2,i);
  }
  return result
}












// Front End Logic
$(document).ready(function() {
  $("#binary").submit(function(event){
    event.preventDefault();
    var number = $("#number").val();
    var result = binaryToDecimal(number);
     if (result==="weird") {
       $("#result").text("please enter in binary");
     }
     else {
       $("#result").text(result);
     }


  })
});
