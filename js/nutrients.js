
  var aggArr = "";
  var storageArr = JSON.parse(localStorage.getItem("aggArr"));

  function refresh() {
    localStorage.setItem("aggArr", JSON.stringify(nutrientArr));
    window.location.reload();

  }




  function totalNutrients(array) {
    let total = 0;
    let $total = $('#totalNutrients').children('tbody');

    array.forEach(function(element, index) {

      switch (index) {
        case index === 1:
        $($total).children($('tr').children($('#1').text(total)));

        case index === 2:
        $($total).children($('tr').children($('#2').text(total)));

        case index === 3:
        $($total).children($('tr').children($('#3').text(total)));

        case index === 4:
        $($total).children($('tr').children($('#4').text(total)));

        case index === 5:
        $($total).children($('tr').children($('#5').text(total)));

        case index === 6:
        $($total).children($('tr').children($('#6').text(total)));

        default:
        
      }
    });
  }
  totalNutrients(storageArr);
