let ingredientes = ["mel", "água", "sal", "mostarda"]
for(let i = 0; i < ingredientes.length; i++){
    let letraInicial = ingredientes[i].charAt(0).toUpperCase();
    let restoTexto = ingredientes[i].slice(1);
    let resultado = letraInicial + restoTexto
    console.log(resultado)
}