if(!('webkitSpeechRecognition' in window)) {
  // upgrade()
} else {
  var recognizing = false;
  var final_transcript = "";

  var ignore_onend;
  var start_timestamp;

  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;

  reset();
  recognition.onend = reset;

  recognition.onstart = function () {
    recognizing = true;
  };

  recognition.onend = function (){
    recognizing = false;
    if (ignore_onend) {
           return;
       }
       if (!final_transcript) {
           return;
       }
       if (window.getSelection) {
           window.getSelection().removeAllRanges();
           var range = document.createRange();
           range.selectNode(document.getElementById('final_span'));
           window.getSelection().addRange(range);
       }
  };

  recognition.onerror = function (event) {
    console.log('error occurred', event);
        if(event.error === "network") {
            console.log('network error - this application requires a working internet connection', 'error');
        }

  };
  recognition.onresult = function (event) {
    var interim_transcript = '';
        if (typeof(event.results) == 'undefined') {
            recognition.onend = null;
            recognition.stop();
            upgrade();
            return;
        }
        for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                final_transcript += event.results[i][0].transcript;
                // if(final_transcript === '') {
                //   return;
                // } else {
                  var $xhr = $.ajax({
                    url: 'https://g-usda.herokuapp.com/ndb/search/?format=json&q='+ final_transcript +'&sort=r&max=25&offset=0&ds=Standard+Reference',
                    type: 'GET',
                    dataType: 'JSON',
                  });//end of ajax call

                $xhr.done(function(data) {
                  var arr = data.list.item;
                  if(arr === undefined) {
                    console.log('There are no items that match this selection');
                  } else {
                  arr.forEach(function(element) {
                    let food = {
                      name: element.name,
                      id: element.ndbno
                    };
                    foodArr.push(food);
                  });//end of forEach method
                  createList(foodArr);
                }//end of else statement
                });//end of done function

                $xhr.fail(function() {
                  console.log("error");
                });//end of fail
                $xhr.always(function() {
                  console.log("complete");
                });//end of always
              // }//end of else statement
            } else {
                interim_transcript += event.results[i][0].transcript;
            }
        }

        final_span.innerHTML = final_transcript;
        interim_span.innerHTML = interim_transcript;




  };
}
var foodArr = [];

var $startButton = $('#start_button');





function upgrade() {
  console.log('upgrade chrome');
}

function reset () {
  recognizing = false;
}

function toggleStop(){
      if (recognizing) {
          recognition.stop();
      }
      reset();
      document.getElementById('start_img').src = 'mic-slash.gif';

  }

function toggleStartStop () {

  if (recognizing) {
          toggleStop();
      } else {
          final_transcript = '';
          recognition.lang = 'en-US';
          recognition.start();

          final_span.innerHTML = '';
          interim_span.innerHTML = '';
          start_timestamp = event.timeStamp;
          document.getElementById('start_img').src = 'mic-animate.gif';

      }
}
