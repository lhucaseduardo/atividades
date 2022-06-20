let pilot = prompt ("Qual é o seu nome Piloto?")

let velocity = 0

let newVelocity = prompt ("Para qual velocidade deseja acelerar?")

let confirmVelocity = confirm ("Estamos indo para " + newVelocity  + " Km/s deseja confirmar?")

if (confirmVelocity) {
    velocity = newVelocity
}

if (velocity <= 0){
    alert ("Estamos parados, sugiro acelerar!")
} else if (velocity <= 40){
    alert ("Estamos muito lento!")
} else if (velocity <= 80){
    alert ("Estamos em uma velocidade ideal.")
} else if (velocity <= 100) {
    alert ("Estamos em uma velocidade perigosa, sugiro reduzir!")
} else {
    alert ("Velocidade limite, piloto automático ligado para sua segurança!")
}

alert ("Piloto: " + pilot + "\nVelocidade: " + velocity)
