  var aggArr = '';
  var storageArr = JSON.parse(localStorage.getItem("aggArr"));
  var everyItemArray = [];

  function totalNutrients(array) {
    let $total = $('#totalNutrients').children('tbody');

    array.forEach(function(element, index) {

      let $cell = $($total).children('tr').children('#'+`${index}`)[0];
      let identify = $($cell).attr('id');


        if(index == identify) {
          let value = parseInt(element.facts);
          // var unit = $($cell).html();
          // if(everyItemArray.length === 0){
          // everyItemArray.push(value.toString());
          $($cell).html(value + element.units);
          // } else {
          //  for(var i = 0; i < everyItemArray.length; i++) {
          //    if (index == i) {
          //      var arrayValue = parseInt(everyItemArray[i]);
          //     arrayValue += value;
          //      $($cell).html(everyItemArray[i] + element.units);
          //    }//end of if statement
          //  }//end of for loop
          // }//end of else statement
        }// end of if statement
    });//end of forEach method
    // localStorage.setItem('everyItemArray', JSON.stringify(everyItemArray));
  }//end of totalNutrients Function

  function refresh(array) {
    localStorage.setItem('aggArr', JSON.stringify(array));
    everyItemArray = JSON.parse(localStorage.getItem("everyItemArray"));
    window.location.reload();
  }
  totalNutrients(storageArr);
