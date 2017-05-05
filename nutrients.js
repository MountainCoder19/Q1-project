var $xhr = $.getJSON('http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=EByeesHLJoqSPvWqHpryJBF1RW9Mfyh3VlmabZRF&nutrients=205&nutrients=204&nutrients=208&nutrients=269');

    $xhr.done(function(data) {
      console.log(data);
    });
