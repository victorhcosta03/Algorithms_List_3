function flores(){
    let primeiro_dia = parseInt(document.getElementById("primeiro_dia").value)
    let segundo_dia = primeiro_dia * 2
    let terceiro_dia = primeiro_dia * 3
    let quarto_dia = primeiro_dia * 4
    let quinto_dia = primeiro_dia * 5
    let total = primeiro_dia + segundo_dia + terceiro_dia + quarto_dia + quinto_dia

    document.getElementById("total"). innerHTML = `<p>
    No segundo dia, você plantará ${segundo_dia} flores. <br>
    No terceiro dia, você plantará ${terceiro_dia} flores. <br>
    No quarto dia, você plantará ${quarto_dia} flores. <br>
    No quinto dia, você plantará ${quinto_dia} flores. <br>
    Ao final dos 5 dias, o total de flores plantadas será ${total}.
    </p>`
}