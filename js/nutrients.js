var $xhr = $.getJSON('http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key='+ key + '&nutrients=205&nutrients=204&nutrients=208&nutrients=269');

    $xhr.done(function(data) {
      console.log(data);
    });
