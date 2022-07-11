num(5);

function num(index){
var contato = document.querySelectorAll('[class="contact"]')[index].innerText;
var pos = contato.indexOf("(");
contato = contato.substring(pos,14+pos);
return contato;
}
