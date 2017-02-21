$(document).ready(function(){
  $("form#formOne").submit(function(event) {
    var inputSentence = $("input#sentenceInput").val();
      for (i =0; i < inputSentence.length; i++) {
        if (inputSentence[i].match("[aeiouAEIOU]")) {
          inputSentence = inputSentence.substring(0, i) + "-" + inputSentence.substring(i+1);

        }
      }
      $("#outputSentence").show();
      $("#sentenceGuess").append(inputSentence);
      event.preventDefault();
  });


});
