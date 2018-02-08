function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}
var typedText = document.getElementById("input").value;
document.getElementById("findButton").onclick = function () {
    var typedText = document.getElementById("input").value;
    for (let i = 0; i < words.length; i++) {
        var word = words[i];
        if (word === alphabetize(typedText)) {
            console.log(word);
        }
    }
}
//making all potential anagrams the same order of letters
//should be able to be checked
//if the same = anagram--if !== it is not an anagram


//test
//console.log(alphabetize("lair"))