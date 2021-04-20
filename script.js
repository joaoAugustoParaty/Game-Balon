function addBola()
{
    //Criar uma div
    var bola = document.createElement("div")
    bola.setAttribute("class", "bola")

    //Gera numero aleatório do 1 até o 500
    var p1 = Math.floor(Math.random() * 500)
    //Gera numero aleatório do 1 até o 400
    var p2 = Math.floor(Math.random() * 400)
    //Gerar cor aleatório
    var cor = Math.floor(Math.random() * 999999 );

    //Posicionamento da bola
    bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;background-color:#"+cor+";")

    //Evento de click
    bola.setAttribute("onclick", "estourar(this)");

    //Adicionar elemento novo
    document.body.appendChild(bola)
}
function estourar(elemento){

    //remover documento da tela
    document.body.removeChild(elemento)

    //Gerando Pontos
    var p = parseInt(document.getElementById("pontos").innerHTML);
    p = p +1;
    document.getElementById("pontos").innerHTML = p;
    if (p > 20) {
     alert ("VOCÊ GANHOU");
     window.location.href = window.location.href;
}
}
function iniciar(){
    setInterval(addBola, 1000)
}