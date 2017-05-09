
  var aggArr = "";
  var storageArr = JSON.parse(localStorage.getItem("aggArr"));
  var aggNutrients;




  function refresh(array) {
    localStorage.setItem("aggArr", JSON.stringify(array));
    window.location.reload();

  }



  function totalNutrients(array) {

    let $total = $('#totalNutrients').children('tbody');
    // var $identifier = $($total).children('tr').children('td').next();
    // console.log($($identifier).attr('id'));

    array.forEach(function(element, index) {

      let $cell = $($total).children('tr').children('#'+`${index}`)[0];
      let identify = $($cell).attr('id');

      if(index == identify) {
        let value = parseInt(element.facts);
        var unit = $($cell).html();
        $($cell).html(value + unit);
      }
    });

  }
  totalNutrients(storageArr);
