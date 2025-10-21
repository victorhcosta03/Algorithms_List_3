function dinheiro(){
    let total = parseFloat(document.getElementById("total").value);
    let primeiro_amigo = total/7
    let segundo_amigo = primeiro_amigo * 2
    let terceiro_amigo = segundo_amigo * 2;

    document.getElementById("resultado").innerHTML = `<p>
    O primeiro amigo receberá ${primeiro_amigo}, o segundo amigo receberá ${segundo_amigo} e o terceiro receberá ${terceiro_amigo}.
    </p>`
}