function slowDown(velocity, printer){
    let deceleration = 20

    while (velocity >= 0){
        printer(velocity)
        velocity -= deceleration 
    }
    alert("Nave parada. As comportas podem ser abertas!")
}

let spaceVelocity = 200

slowDown(spaceVelocity, function(velocity){
    console.log("Velocidade atual de " + velocity)
})