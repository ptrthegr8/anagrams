function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}

document.getElementById("findButton").onclick = function () {
        var typedText = document.getElementById("input").value;
        for (let i = 0; i < words.length; i++) {
            var alphaTypedText = alphabetize(typedText);
            var word = words[i];
            var alphaWord = alphabetize(word);
            
            if ( alphaWord === alphaTypedText) {
               console.log(word);
            }
        }
    }

    