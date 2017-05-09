
  var aggArr = "";
  var storageArr = JSON.parse(localStorage.getItem("aggArr"));

  function refresh() {
    localStorage.setItem("aggArr", JSON.stringify(nutrientArr));
    window.location.reload();

  }



  function totalNutrients(array) {
    let total = 0;
    let $total = $('#totalNutrients').children('tbody');
    // var $identifier = $($total).children('tr').children('td').next();
    // console.log($($identifier).attr('id'));

    array.forEach(function(element, index) {
      var $cell = $($total).children('tr').children('#'+`${index}`)[0];
      var identify = $($cell).attr('id');
      console.log(index);
      console.log(identify);

      if(index == identify) {
        var value = parseInt(element.facts);
        
      }

      // switch (index) {
      //   case index === 1:
      //   $($total).children($('tr').children($('#1').html(total)));
      //   case index === 2:
      //   $($total).children($('tr').children($('#2').html(total)));
      //
      //   case index === 3:
      //   $($total).children($('tr').children($('#3').html(total)));
      //
      //   case index === 4:
      //   $($total).children($('tr').children($('#4').html(total)));
      //
      //   case index === 5:
      //   $($total).children($('tr').children($('#5').html(total)));
      //
      //   case index === 6:
      //   $($total).children($('tr').children($('#6').html(total)));
      //
      //   default:
      //
      // }
    });
  }
  totalNutrients(storageArr);
