function getData() {
    var place = document.getElementById("place").value;
    var person = document.getElementById("person").value;
    var verb = document.getElementById("verb").value;
    var adj = document.getElementById("adj").value;
    var adverb = document.getElementById("adverb").value;

    document.getElementById("sentence").innerHTML = sentences(verb, adverb, person, place, adj);
}

//              0                       1                   2               3               4

function sentences(verb, adverb, person, place, adj) {
    sentenceArray = [`Today, I had to ${verb} ${adverb}. But right in the mid]dle of it, ${person} came with this ${adj} book and wanted to go to ${place}`, `${person} was in ${place} trying to ${verb}. However, ${person} left a ${adj} shirt behind, while crying ${adverb}.`, `It's been a long time since ${person} decided to ${verb} in ${place}. What some people said was that ${person} screamed "This strawberry is ${adj}!! We thought ${person} went crazy.`]


ranN = Math.floor(Math.random() * sentenceArray.length)
// 0 to 2

return sentenceArray[ranN]
}

console.log(sentences())


var wordArr = [
    {
        word: "dog",
        hint: "company you keep at home", 
        
    },
    {
        word: "place",
        hint: "somewhere you are at any time", 
    },
    {
        word: "tree",
        hint: "it grows from the ground",
    },
    {
        word: "computer",
        hint: "you are using it right now",
    }
]

var rN = Math.floor(Math.random() * wordArr.length);

var word = wordArr[rN].word;
var hint = wordArr[rN].hint;

document.getElementById("word").innerHTML = word;
document.getElementById("hint").innerHTML = hint;

var w = document.getElementById("word");

var splitWord = word.split("");

var emptySplitWord = [];

var correct = [];

var counter = word.length + 2

console.log(splitWord)

for (i = 0; i < splitWord.length ; i++) {
    emptySplitWord[i] = "x"
    console.log(emptySplitWord);
    document.getElementById("word").innerHTML = emptySplitWord.
    join(" ")
}

function enterLetter() {
    var letter = document.getElementById("letter").value
   
    for ( x = 0; x < splitWord.lenght; x++)
    if (letter == splitWord[i]) {
        emptySplitWord[x] = letter;
        w.innerHTML = emptySplitWord.join(" ")
        document.getElementById("letter").value = "";
        correct.push(1);
    } else {
        document.getElementById("letter").value = "";
    }
}

if (correct.length == emptySplitWord.length) {
    alert("THE END")
}