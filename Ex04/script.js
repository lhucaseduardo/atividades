let valueLY = prompt ("Digite a velocidade em anos-luz.")
let chosenOption = prompt ("Para qual unidade deseja converter?\n1. Parsec(PC)\n2. Unidade Astrônomica\n3. Quilômetros (KM)\n\n(Digite o número da opção desejada.)")
let chosenUnity
let convertedDistance

switch (chosenOption){
    case "1":
        chosenUnity = "Parsec"
        convertedDistance = valueLY * 0.306601
        break
    case "2":
        chosenUnity = "Unidade Astrônomica"
        convertedDistance = valueLY * 63241.1
        break
    case "3":
        chosenUnity = "Quilômetros"
        convertedDistance = valueLY * 9.5 * Math.pow(10,12)
        break
    default:
        chosenUnity = "Unidade não identificada"
        convertedDistance = "Conversão fora do escopo"
}

alert("Distância em anos-luz: " + valueLY + "\n" + chosenUnity + ": " + convertedDistance)