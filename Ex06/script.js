let dname = prompt ("Digite o nome: ")
let troca = prompt ("Digite a letra que deseja mudar")
let novaLetra = prompt ("Por qual letra deseja mudar?")
let newName = ""

for (let cont = 0; cont < dname.length; cont++){
    if (dname[cont] == troca){
        newName += novaLetra 
    } else {
        newName += dname[cont]
    }

}

alert ("O nome ficou " + newName)

