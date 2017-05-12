 $(".button-collapse").sideNav();
// Open
 $('.collapsible').collapsible('open', 0);

 // Close
 $('.collapsible').collapsible('close', 0);
var storageInfo =
JSON.parse(localStorage.allNutrients);

var pieArr = [['Nutrient','gram']];
  function makePieChart (object) {
  for(var key in object) {
    var array = [];
    if(key === 'Protein' || key === 'Carbohydrate-by-difference'|| key === 'Total-lipid-fat-' ||key === 'Fiber-total-dietary' ||key === 'Sugars-total') {
    array[0] = key;
    array[1] = object[key].facts;
    pieArr.push(array);
    }
  }
  }
  makePieChart(storageInfo);

  google.charts.load('current', {'packages':['corechart']});

  google.charts.setOnLoadCallback(drawPieChart);

  function drawPieChart () {
    let data = google.visualization.arrayToDataTable(pieArr);

    let options = {
      title: "Diet Breakdown",
      backgroundColor: "white",
      width: 600,
      height: 600
    };

    let chart = new google.visualization.PieChart(document.getElementById('pie-chart'));
    chart.draw(data, options);
  }

  $(window).on("throttledresize", function (event) {
    var options = {
        width: '100%',
        height: '100%'
    };

    var data = google.visualization.arrayToDataTable(pieArr);
    drawChart(data, options);
});


  function totalNutrients(object) {
    let $total = $('#totalNutrients').children('tbody');

    for(let key in object) {
      // console.log(key);
      let $cell = $($total).children('tr').children('#'+`${key}`)[0];
      // console.log($cell);
      // let identify = $($cell).attr('id');

      switch (key) {
        case 'Energy':
        $($cell).html(object[key].facts + " " + object[key].units);
        break;
        case 'Protein':
        $($cell).html(object[key].facts + " " + object[key].units);
        break;
        case 'Total-lipid-fat-':
        $($cell).html(object[key].facts + " " + object[key].units);
        break;
        case 'Carbohydrate-by-difference':
        $($cell).html(object[key].facts + " " + object[key].units);
        break;
        case 'Fiber-total-dietary':
        $($cell).html(object[key].facts + " " + object[key].units);
        break;
        case 'Sugars-total':
        $($cell).html(object[key].facts + " " + object[key].units);
        break;
        case 'Sodium-Na':
        $($cell).html(object[key].facts + " " + object[key].units);
        break;
        default:

      }
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
    $('.paragraph-main').show();
    reset();
  // window.location.reload();
  }
  totalNutrients(storageInfo);
