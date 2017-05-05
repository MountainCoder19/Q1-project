$(document).ready(function() {
var foodArr=[];



var $search = $('#submit-btn');

$($search).on('click', function (event) {
  event.preventDefault();
  var ndbno= //element.nbdno;
  console.log($value1);
  if(ndbno === '') {
    return;
  } else {
    var $xhr = $.ajax({

      url: 'https://g-usda.herokuapp.com/ndb/?ndbno='+ndbno+'&type=b&format=json',
      type: 'GET',
      dataType: 'JSON',
    });//end of ajax call

  $xhr.done(function(data) {
    console.log(data);
    var arr = data.list.item;
    arr.forEach(function(element) {
      let food = {
        name: element.name,
        id: element.ndbno
      };
      foodArr.push(food);
    });//end of forEach method
  });//end of done function

  $xhr.fail(function() {
    console.log("error");
  });//end of fail
  $xhr.always(function() {
    console.log("complete");
  });//end of always
}//end of else statement

});// of submit event



});//end of document ready
