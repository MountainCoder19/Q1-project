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
            } else {
                interim_transcript += event.results[i][0].transcript;
            }
        }

        final_span.innerHTML = final_transcript;
        interim_span.innerHTML = interim_transcript;
  };
}

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
