var aggArr = "";


function refresh() {
  localStorage.setItem("aggArr", JSON.stringify(nutrientArr));
  window.location.reload();
  var storageArr = JSON.parse(localStorage.getItem("aggArr"));
  console.log(storageArr);
  totalNutrients(storageArr);
}


function totalNutrients(array) {
  let total = 0;
  let $table = $("#total-nutrients");
  console.log($table);

  array.forEach(function(element) {
    switch (element) {
      case index === 1:

      console.log(element);
        break;
      case index === 2:
      console.log(element);
        break;
      case index === 3:
      console.log(element);
        break;
      case index === 4:
      console.log(element);
        break;
      case index === 5:
      console.log(element);
        break;
      case index === 6:
      console.log(element);
        break;
      default:

    }
  })
}
