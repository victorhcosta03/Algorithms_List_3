function valor(){
    let quantidade_baunilha = parseInt(document.getElementById("qtd_b").value)
    let quantidade_chocolate = parseFloat(document.getElementById("qtd_c").value)
    let preco_b = parseFloat(document.getElementById("pb").value)
    let preco_c = parseFloat(document.getElementById("pc").value)
    let valor = quantidade_baunilha * preco_b + quantidade_chocolate * preco_c;

    console.log(valor);
    document.getElementById("resultado").innerHTML = `<p>
        O valor total arrecadado com as vendas é ${valor}
        </p>`
}