function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}
document.getElementById("findButton").onclick = function () {
        var typedText = document.getElementById("input").value;
        for (let i = 0; i < words.length; i++) {
            var word = words[i];
            if (alphabetize(word) === alphabetize(typedText)) {
               console.log(word);
            }
        }
    }