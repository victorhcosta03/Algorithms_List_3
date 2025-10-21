function livro(){
    let valor = parseFloat(document.getElementById('valor').value)
    let total = valor * 0.9

    document.getElementById("resultado").innerHTML = `<p>
    Valor total da compra com desconto de 10%: ${total}
    </p>`
}