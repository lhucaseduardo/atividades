let spaceship = {
    velocity: 0,
    speedUp: function(acceleration){
        this.velocity += acceleration
    }
}

function registerSpaceship(){
    spaceship.name = prompt("Informe o Nome da nave")
    spaceship.type = prompt("informe o Tipo da nave")
    spaceship.maxVelocity = Number(prompt("Informe a Velocidade Máxima da nave (KM/S)"))
}

function acelerate(){
    let acceleration = Number(prompt("Quanto você quer acelerar?"))
    spaceship.speedUp(acceleration)
    if(spaceship.velocity > spaceship.maxVelocity){
        alert("VELOCIDADE MAXIMA ULTRAPASSADA!\nVelocidade da Nave: " + spaceship.velocity + "KM/S\n Velocidade máxima da Nave: " + spaceship.maxVelocity + "KM/S")
    }
}

function stop(){
    alert("Nome: " + spaceship.name + "\nTipo: " + spaceship.type + "\nVelocidade da Nave: " + spaceship.velocity + "\nMáxima da Nave: " + spaceship.maxVelocity)
    spaceship.velocity = 0
}

function showMenu(){
    let chosenOption
    do {
        chosenOption = prompt("Você deseja:\n1- Acelerar\n2- Parar")
        switch(chosenOption){
            case "1":
                acelerate()
                break
            case "2":
                stop()
                break
            default:
                alert("Opção Inválida")
        }
    }while(chosenOption != "2")
} 

registerSpaceship()

showMenu()