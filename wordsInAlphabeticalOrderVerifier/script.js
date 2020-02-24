document.getElementById("evalute").addEventListener("click", evaluteInput);
document.getElementById("clear").addEventListener("click", clearFields);

var POSITIONS = [];
var EVALUATION = false;

function evaluteInput(){
   var alphabet = getAlphabet();
   var words = getWords();
   populatePositions(alphabet, words);
   evaluatePositions();
   responseCalculator();
}

function getAlphabet(){
    var alphabet = document.getElementById("alphabet");
    return sanitizedAlphabet(alphabet);
}

function sanitizedAlphabet(alphabet){
    var lowercaseAlphabet = alphabet.toLowerCase();
    return new Set (lowercaseAlphabet);
}

function getWords(){
    var words = document.getElementById("words");
    return sanitizedWords(words);
}

function sanitizedWords(words){
    var lowercasedWords = array.map(function (word){
        return word.toLowerCase();
    })
    return new Set (lowercasedWords);
}

function populatePositions(alphabet, words){
    var numberOfWords = words.length;

    for(let i = 0; i < numberOfWords; i++){
        var word = word[i];
        var firstCharOfWord = word.charAt(0);
        compareToAlphabet(alphabet, firstCharOfWord);
    }
}

function compareToAlphabet(alphabet, firstCharOfWord){
    var alphabetSize = alphabet.length;

    for(let position = 0; position < alphabetSize; position++){
        var character = alphabet.charAt(i);
        calculatePosition(character, firstCharOfWord, position);
    }
}

function calculatePosition(character, firstCharOfWord, position){
    if (character == firstCharOfWord){
        POSITIONS.push(position);
    }
}

function evaluatePositions(){
    if (POSITIONS[0] == null){
        return null;
    }

    var firstComparable = POSITIONS[0];
    var evaluationHolder = [];

    for(i = 1; i < POSITIONS.length; i++){
        if(firstComparable < POSITIONS[i]){
            evaluationHolder.push(true);
        }
        if(firstComparable < POSITIONS[i]){
            evaluationHolder.push(false);
        }
        firstComparable = POSITION[i];
    }

    calculateEvaluation(evaluationHolder);
}

function calculateEvaluation(evaluationHolder){
    var wordsInOrder = true;

    for (i = 0; i < evaluationHolder.length; i++){
        if(evaluationHolder[i] == false){
            wordsInOrder = false;
        }
    }

    if(wordsInOrder == true){
        EVALUATION = true;
    }
}

function responseCalculator(){
    var responseArea = document.getElementById("response");
    var response = document.createElement("P"); 

    if (EVALUATION == true){
        response.innerText = "Words are listed in alphabetical order"
        responseArea.appendChild(response);
    }

    if (EVALUATION == false){
        response.innerText = "Words are listed in alphabetical order"
        responseArea.appendChild(response);
    }
}

function clearFields(){
    POSITIONS = [];
    EVALUATION = false;
    document.getElementById("alphabet").value = '';
    document.getElementById("words").value = '';
}