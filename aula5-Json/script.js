function lerJSON(){
    var req = new XMLHttpRequest();

    req.onreadystatechange = function(){
        if( this.readyState == 4 && this.status == 200){
            var objJSON = JSON.parse( this.responseText );
            var txt = "Nome: " + objJSON.nome + "<br>";
            txt += "Idade: " + objJSON.idade + "<br>";
            txt += "Formações: ";
            objJSON.formacoes.forEach( formacao => { //A cada iteração a variavel formacao vai ser para ele colocar o elemento daquele array.
                txt += formacao + " - "
            });
            if( objJSON.casado){
                txt += "<br>Cônjuge: " + objJSON.conjuge.nome;
            }
            txt += "<br>Filhos: ";
            // a variável "filho" vai receber cada elemento daquele array e vou executar dentro das chaves
            objJSON.filhos.forEach( filho => {  
                txt += "<br> " + filho.nome + "Idade: " + filho.idade;    
            });
            document.getElementById("divJSON").innerHTML = txt;

        }
    }
    req.open("GET" , "dados.json", true);
    req.send();
}


function lerProdutos(){
    var req = new XMLHttpRequest();

    req.onreadystatechange = function(){
        if( this.readyState == 4 && this.status == 200){
            var objJSON = JSON.parse( this.responseText );
            var produtos = objJSON.produtos;
            var txt = "";
            if( produtos.lenght == 0){
                txt = "<tr><th>Nenhum produto cadastrado!</th></tx>"
            }else{
                txt +=      "<tr>";
                txt +=     "   <th> Código </th>";
                txt +=     "   <th> Nome </th>";
                txt +=     "   <th> Preço </th>";
                txt +=      "</tr>";
                produtos.forEach( prod => {
                    txt +=  "<tr>";
                    txt +=  "   <td>" + prod.id + "</td>";
                    txt +=  "   <td>" + prod.nome + "</td>";
                    txt +=  "   <td>" + prod.preco + "</td>";
                    txt +=  "</tr>"; 
                })
            }
            document.getElementById("tblProdutos").innerHTML = txt;
        }

    }
    req.open("GET" , "servidor.php?buscar" , true);
    req.send();
}