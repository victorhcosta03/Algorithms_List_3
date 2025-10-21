function balas(){
    let total = parseInt(document.getElementById("total").value)
    let amigos = parseInt(document.getElementById("amigos").value)
    let balas = total/amigos
    document.getElementById("resultado"). innerHTML = `<p> Cada amigo receberá ${balas} balas. </p>`

}