function buscar(){
    var req = new XMLHttpRequest();
    req.onreadystatechange = function(){
       if( this.readyState == 4 && this.status == 200 ){
            var divInformacoes = document.getElementById("informacoes");
            divInformacoes.innerHTML = this.responseText
       } 
    }
    req.open("GET", "informacoes.txt", true);
    req.send();
}