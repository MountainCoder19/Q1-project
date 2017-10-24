

var allNutrients = {};
var thursDate = new Date(2017,5,11);
var lastSaved = new Date(localStorage.saveDate);
var currentDate = new Date();
//86,400,000 is the amt of milliseconds in one day
// Take last saved and figure out if it was today.
if (localStorage.allNutrients) {
  allNutrients = JSON.parse(localStorage.allNutrients);

}
// Make function that counts dates.

//take out spaces and replace with dashes for modalId
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

function createList (array) {

    createFoodList(array);
    $('#table').show();
}

var $anchor = $('#table');
$($anchor).delegate('a', 'click', function(event){
  var $choice = event.target;

  var ndbno= $choice.id;

  if(ndbno === '') {
    return;
  } else {
    var $xhr = $.ajax({

      url: 'https://g-usda.herokuapp.com/ndb/reports/?ndbno='+ndbno+'&type=b&format=json',
      type: 'GET',
      dataType: 'JSON',
    });//end of ajax call

    $xhr.done(function(data) {
        nutrientArr = [];
        let $addBtn = $('<button type = "submit" id = "nextItem" onclick = "refresh(nutrientArr)">Next Item</button>');
        $('#button-area').append($addBtn);

        var arr = data.report.food.nutrients;
        arr.forEach(function(element) {
          let reportObj = {
            title: data.report.food.name,
            name: element.name,
            facts: element.value,
            units: element.unit
          };
          reportObj.name = element.name.replace(/\W+/g, "-");

          nutrientArr.push(reportObj);

        });//end of forEach method
        $('.paragraph-main').hide();
        storeNutrients();
        nutrientReport(nutrientArr);
    });//end of done function

    $xhr.fail(function() {
      console.log("error");
    });//end of fail
    $xhr.always(function() {
      console.log("complete");
    });//end of always
  }//end of else statement
});

var nutrientArr = [];

function storeNutrients() {
  for (let n of nutrientArr) {
    if (allNutrients[n.name]) {
      allNutrients[n.name].facts = allNutrients[n.name].facts + parseInt(n.facts);
    } else {
      allNutrients[n.name] = {
        facts: parseInt(n.facts),
        units: n.units
      };
    }
  }
  localStorage.allNutrients = JSON.stringify(allNutrients);
  localStorage.saveDate = Date();
}

function nutrientReport (array) {
  $('#table').hide();


  var finalReport = $('#report');
  finalReport.empty();
  var body = $("<tbody>");
  var head = $('<thead>');
  var headrow = $('<tr>');
  var headcell1 = $('<th>');
  var headcell2 = $('<th>');

  headcell1.text("Nutrient");
  headcell2.text("Amount");

  $(headrow).append(headcell1);
  $(headrow).append(headcell2);
  $(head).append(headrow);
  $(finalReport).append(head);
  $(finalReport).append(body);

  array.map(function (element,index ){
    if(element.name === 'Energy'|| element.name === 'Protein' || element.name === 'Carbohydrate-by-difference'|| element.name === 'Total-lipid-fat-' ||element.name === 'Fiber-total-dietary' ||element.name === 'Sugars-total'||element.name === 'Sodium-Na') {
      var row = $('<tr>');
      var cell1 = $("<td>");
      var cell2 = $("<td>");

      $(cell1).text(element.name);
      $(cell2).text(element.facts + element.units);

      $(row).append(cell1);
      $(row).append(cell2);
      $(body).append(row);
    }

  });
  $('#report').show();
}

function createFoodList (array) {
  array.map(function (element,index ){
    var clickText = $('<a class="selection" style="display:block;">');
    $(clickText).attr('id', `${element.id}`);

    $(clickText).text(' Name: ' + element.name);
    $(table).append(clickText);
  });
  $(table).css('cursor','pointer');
  $('#start_button').hide();
  $('#speechContainer').hide();
}
