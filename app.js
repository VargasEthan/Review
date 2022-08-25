function getDatat() {
    var place = document.getElementById("place").nodeValue;
    var person = document.getElementById("person").nodeValue;
    var verb = document.getElementById("verb").nodeValue;
    var adj = document.getElementById("adj").nodeValue;
    var adverb = document.getElementById("adverb").nodeValue;
    
    console.log(place, person, verb, adj, adverb)
    return [place, person, verb, adj, adverb]
}

function sentences() {
    sentenceArray = [`Today, I had to ${verb} ${adverb}. But right in the mid]dle of it, ${person} came with this ${adj} book and wanted to go to ${place}`, `${person} was in ${place} trying to ${verb}. However, ${person} left a ${adj} shirt behind, while crying ${adverb}.`, `It's been a long time since ${person} decided to ${verb} in ${place}. What some people said was that ${person} screamed "This strawberry is ${adj}!! We thought ${person} went crazy.`]
}