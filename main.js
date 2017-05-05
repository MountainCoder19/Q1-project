$(document).ready(function() {
var foodArr=[];



var $search = $('#submit-btn');

$($search).on('click', function (event) {
  event.preventDefault();
  var $value1 = $('#submit').val();
  console.log($value1);
  if($($value1) === '') {
    return;
  } else {
    var $xhr = $.ajax({
      url: 'https://api.nal.usda.gov/ndb/search/?format=json&q='+ $value1 +'&sort=r&max=25&offset=0&ds=Standard+Reference&api_key=' + key,
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
