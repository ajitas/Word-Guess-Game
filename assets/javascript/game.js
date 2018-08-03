var userInput;
var comInput;
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var arrayInputs = [];
var placeholder = [];
var totalIndicesFound = 0;
var arrayWords = 
                ["paris",
                "mumbai",
                "jakarta",
                "taipei",
                "chicago",
                "kabul",
                "brussels",
                "beijing",
                "tokyo",
                "cairo",
                "havana",
                "london",
                "perth",
                "sydney",
                "melbourne",
                "brisbane",
                "seoul",
                "colombo",
                "stockholm",
                "bangkok",
                "madrid",
                "singapore",
                "edinburgh",
                "moscow",
                "doha",
                "lisbon",
                "muscat",
                "islamabad",
                "amsterdam",
                "rome",
                "dublin",
                "budapest",
                "athens",
                "berlin",
                "prague",
                "dhaka",
                "seattle",
                "portland",
                "orlando"];

function resetGame(){
    guessesLeft = 10;
    totalIndicesFound = 0;
    document.getElementById("guesses").textContent = "";
    document.getElementById("guessesleft").textContent = guessesLeft;
    document.getElementById("wordplaceholder").textContent = "";
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;

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
    comInput = arrayWords[Math.floor(Math.random()*arrayWords.length)];
    var blank = document.getElementById("wordplaceholder");
    for( var i = 0; i < comInput.length; i++){
        placeholder.push("__");
    }
    for( var i = 0; i < placeholder.length; i++){
        blank.textContent = blank.textContent + placeholder[i] + " ";
    }
}

resetGame();

document.onkeyup = function(event){
    if(event.keyCode >= 65 && event.keyCode <= 90 && arrayInputs.indexOf(event.key.toLowerCase()) == -1){

        userInput = event.key.toLowerCase();
        arrayInputs.push(event.key.toLowerCase());
        var blank = document.getElementById("wordplaceholder");
        var matchFound = false;
        
        for(var i = 0; i < comInput.length; i++){
            if(comInput[i] === userInput){
                totalIndicesFound = totalIndicesFound + 1;
                placeholder[i] = userInput;
                matchFound = true;
            }
        }
        if(matchFound){
            blank.textContent = "";
            for( var i = 0; i < placeholder.length; i++){
                blank.textContent = blank.textContent + placeholder[i] + " ";
            }
            if(totalIndicesFound == placeholder.length) {
                wins++;
                resetGame();
            }
        }
        else{
            guessesLeft--;
            document.getElementById("guessesleft").textContent = guessesLeft;
            if(guessesLeft == 0){
                losses++;
                resetGame();
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
        document.getElementById("losses").textContent = losses;
    }
    else
    {
        if(event.keyCode < 65 && event.keyCode > 90)
            alert("Invalid input");
    }
}

