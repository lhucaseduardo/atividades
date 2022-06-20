let word = prompt ("Digite uma palavra")
let invertedWord = ""

for(let i = word.length - 1; i >= 0; i--){
    if (word[i] == "e"){
        break
    }
    invertedWord += word[i]
}

alert ("A palavra padrão:" + word + "\nFoi formatada para:" + invertedWord)