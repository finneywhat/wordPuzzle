$(document).ready(function(){

  function vowelMask(string) {
    for (i =0; i < string.length; i++) {
      if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u" || string[i] === "A" || string[i] === "E" || string[i] === "I" || string[i] === "O" || string[i] === "U")
      {string = string.substring(0, i) + "-" + string.substring(i+1);}
    }
    return string;
  }

  $("form#formOne").submit(function(event) {
    $("#sentenceGuess").text("");
    var inputSentence = $("input#sentenceInput").val();
    inputSentence = vowelMask(inputSentence);
    $("#outputSentence").show();
    $("#sentenceGuess").append(inputSentence);
    event.preventDefault();
  });
});
