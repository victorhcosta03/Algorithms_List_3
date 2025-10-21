function calcular(){
    let quantidade = parseInt(document.getElementById("qtd").value)
    let preco = parseFloat(document.getElementById("preco").value)
    let valor = quantidade * preco  
    document.getElementById("resultado").innerHTML = `
        <p>
            O valor total arrecadado com as vendas é ${valor} reais.
       </p>`
}