var storageInfo = JSON.parse(localStorage.allNutrients);


  function totalNutrients(object) {
    let $total = $('#totalNutrients').children('tbody');

    console.log(storageInfo);

    for(let key in object) {
      console.log(key);
      let $cell = $($total).children('tr').children('#'+`${key}`)[0];
      console.log($cell);
      // let identify = $($cell).attr('id');

      switch (key) {
        case 'Energy':
        $($cell).html(object[key]);
        break;
        case 'Protein':
        $($cell).html(object[key]);
        break;
        case 'Total-lipid-(fat)':
        $($cell).html(object[key]);
        break;
        case 'Carbohydrate,-by-difference':
        $($cell).html(object[key]);
        break;
        case 'Fiber,-total-dietary':
        $($cell).html(object[key]);
        break;
        case 'Sugars,-total':
        $($cell).html(object[key]);
        break;
        default:

      }
      //
      //   if(index == identify) {
      //     let value = parseInt(element.facts);
      //     var unit = $($cell).html();
      //     if(everyItemArray.length === 0){
      //     everyItemArray.push(value.toString());
      //     $($cell).html(value + element.units);
      //     } else {
      //      for(var i = 0; i < everyItemArray.length; i++) {
      //        if (index == i) {
      //          var arrayValue = parseInt(everyItemArray[i]);
      //          arrayValue += value;
      //          $($cell).html(everyItemArray[i] + element.units);
      //        }//end of if statement
        //    }//end of for loop
        //   }//end of else statement
        // }// end of if statement
    }//end of forEach method
  }//end of totalNutrients Function

  function refresh(array) {

    // localStorage.setItem('aggArr', JSON.stringify(array));
    // $("#speechContainer").val("");
    $('#nextItem').remove();
    $('#report').hide();
    $('#table').empty();
    $('#start_button').show();
    $('#speechContainer').show();
    reset();
  // window.location.reload();
  }
  totalNutrients(storageInfo);
