

var userInput;
var comInput;
var wins = 0;
var guessesLeft = 10;
var arrayInputs = [];
var placeholder =[ ];
var totalIndices = 0;
var arrayWords = ["calfornia","connecticut","louisiana","massachusetts","washington","minnesota"];

clearInputs();
function createNewInput()
{
        comInput = arrayWords[Math.floor(Math.random()*6)];
        var blank = document.getElementById("wordplaceholder");
        for( var i = 0; i < comInput.length; i++){
            placeholder.push("__");
        }
        for( var i = 0; i < placeholder.length; i++){
            blank.textContent = blank.textContent + placeholder[i] + " ";
        }
}
document.onkeyup = function(event){
    if(event.keyCode >= 65 && event.keyCode <= 90 && arrayInputs.indexOf(event.key.toLowerCase()) == -1){

        userInput = event.key.toLowerCase();
        arrayInputs.push(event.key.toLowerCase());
        var blank = document.getElementById("wordplaceholder");
        var indices = [];
        var matchFound = false;
        
        for(var i = 0; i < comInput.length; i++){
            if(comInput[i] === userInput){
                totalIndices = totalIndices + 1;
                placeholder[i] = userInput;
                matchFound = true;
            }
        }
        if(matchFound){
            blank.textContent = "";
            for( var i = 0; i < placeholder.length; i++){
                blank.textContent = blank.textContent + placeholder[i] + " ";
            }
            if(totalIndices == placeholder.length) {
                wins++;
                
                var word = "";
                for(var i = 0; i < placeholder.length; i++){
                    word = word + placeholder[i];
                }
                document.getElementById(word).play();
                clearInputs();
            }
        }
        else{
            guessesLeft--;
            document.getElementById("guessesleft").textContent = guessesLeft;
            if(guessesLeft == 0)
            {
                clearInputs();
            }
            else{
                if(document.getElementById("guesses").textContent == ""){
                    document.getElementById("guesses").textContent = event.key.toLowerCase();
                }
                else{
                    document.getElementById("guesses").textContent = document.getElementById("guesses").textContent  + ', ' + event.key.toLowerCase();
                }
            }
        }
    
        document.getElementById("wins").textContent = wins;
    }
    else
    {
        if(event.keyCode < 65 && event.keyCode > 90)
            alert("Invalid input");
    }
}
function clearInputs()
{
    guessesLeft = 10;
    totalIndices = 0;
    document.getElementById("guesses").textContent = "";
    document.getElementById("guessesleft").textContent = guessesLeft;
    document.getElementById("wordplaceholder").textContent = "";
    document.getElementById("wins").textContent = wins;

    var inputArrayLength = arrayInputs.length;
    for(var i = 0; i < inputArrayLength; i++)
    {
        arrayInputs.pop();
    }
    var placeholderLength = placeholder.length;
    for(var i = 0; i < placeholderLength; i++)
    {
        placeholder.pop();
    }
    createNewInput();
}
