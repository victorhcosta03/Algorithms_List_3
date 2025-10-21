function falta(){
    let lanche = parseFloat(document.getElementById("lanche").value)
    let economizado = parseFloat(document.getElementById("economizado").value)
    let falta = lanche - economizado
    document.getElementById("resultado"). innerHTML = `<p> Falta economizar ${falta} reais </p>`
}