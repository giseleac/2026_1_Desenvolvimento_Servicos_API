function validar(){
    valor = document.getElementById("txtValor").value
    var divResult = document.getElementById("divResult") //O nome da variável não depende do valor do id. Colocamos o mesmo para facilitar.
    if( isNaN(valor)){
        divResult.innerHTML = "O valor digitado não é um número!"
    }else if( valor < 1 || valor > 10){

        divResult.innerHTML = "O valor digitado não é permitido!"
    }else{
        divResult.innerHTML = "Valor permitido!"
    }
}

// as vezes é necessário da cntrl + F5 na página web para poder atualizar o script.

function limpar(){
    document.getElementById("divResult").innerHTML = ""
    document.getElementById("txtValor").value = ""
       
}

$("#divJquery").css("background", "#00f")
$("#divJquery").css("color", "#fff")
$("#divJquery").html("Oi Pessoal <hr> Bom dia") // se eu colocar text e não html ele não muda tudo e fica aparecendo o <hr>

function mostrarMensagem(){
    alert("Ação finalizada!")
}

$("#botao").on("click" , function(){
    $("#divJquery").toggle(3000, mostrarMensagem )
})
//aqui eu estou programando o evento click
//toggle quer dizer que quando a div está aparecendo ele esconde e quando 
// tá escondido ele mostra. 
// O 3000 quer dizer 3000 milisegundos...quer dizer que ele vai levar 3 segundos para aparecer e esconder
// O mostrar mensagem é sem parentese pq eu não quero que a resposta seja no momento
// que ele estiver acontecendo os 3000 e sim quando terminar os 3000 milisegundos é que chama a ação