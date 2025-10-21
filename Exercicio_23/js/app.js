function resto(){
    let mesada = parseFloat(document.getElementById("mesada").value)
    let economizar = parseFloat(document.getElementById("economizar").value)
    let resto = mesada - economizar

    document.getElementById("resultado").innerHTML = `<p>
    Após retirar uma parte para economizar, o dinheiro restante será: ${resto} reais.
    </p>`
    
}