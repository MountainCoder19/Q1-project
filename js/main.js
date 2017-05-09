
function createList (array) {
  var table = $('#table');
  array.map(function (element,index ){
    var row = $('<p>');
    var clickText = $('<a class="selection">');
    $(clickText).attr('id', `${element.id}`);

    $(clickText).text(' Name: ' + element.name);
    $(row).append(clickText);
    $(table).append(row);
  });

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
        var addBtn = $('<button type = "submit" onclick = "refresh(nutrientArr)">Next Item</button>');
        $('#button-area').append(addBtn);



        var arr = data.report.food.nutrients;
        arr.forEach(function(element) {
          let report = {
            name: element.name,
            facts: element.value + element.unit
          };

          nutrientArr.push(report);
        });//end of forEach method
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


function nutrientReport (array) {
  $('#table').hide();


  var finalReport = $('#report');
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
  var row = $('<tr>');
  var cell1 = $("<td>");
  var cell2 = $("<td>");

  $(cell1).text(element.name);
  $(cell2).text(element.facts);

    $(row).append(cell1);
    $(row).append(cell2);
    $(body).append(row);

  });

}
