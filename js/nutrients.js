  //
  // var aggArr = '';
  // var storageArr = JSON.parse(localStorage.getItem("aggArr"));
  // var everyItemArray = [];
  //
  // var storeAggArr = "";
  //   var something = JSON.parse(localStorage.getItem("storeAggArr"));
  //   // console.log(something);
  //
  // function refresh(array) {
  //   $('#report').hide();
  //   reset();
  // }
  //
  // function totalNutrients(array) {
  //
  //   let $total = $('#totalNutrients').children('tbody');
  //   // var $identifier = $($total).children('tr').children('td').next();
  //   // console.log($($identifier).attr('id'));
  //   let aggObj = {
  //     1: 0,
  //     2: 0,
  //     3: 0,
  //     4: 0,
  //     5: 0,
  //     6: 0
  //   };
  //   array.forEach(function(element, index) {
  //
  //     let $cell = $($total).children('tr').children('#'+`${index}`)[0];
  //     let identify = $($cell).attr('id');
  //
  //     for(var key in aggObj) {
  //       if(index == identify && index == key ) {
  //         let value = parseInt(element.facts);
  //         var unit = $($cell).html();
  //         $($cell).html(value + unit);
  //
  //         // adding values to aggObj to accumulate
  //         aggObj[key]= aggObj[key] + value;
  //       }// end of if statement
  //     }//end of for in loop of aggObj
  //
  //   });//end of forEach method
  //   localStorage.setItem("storeAggArr", JSON.stringify(aggObj));
  //
  //
  // }
  //
  // totalNutrients(storageArr);
