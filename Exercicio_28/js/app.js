function conta(){
    let conta = parseFloat(document.getElementById("conta").value)
    let gorgeta = parseFloat(document.getElementById("gorgeta").value)
    let total = conta + (conta * gorgeta / 100)

    document.getElementById("total").innerHTML =`<p>
    Valor total a ser pago: ${total} reais.
    </p>`
}