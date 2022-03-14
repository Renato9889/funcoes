function adicionarFilme() {
  var filme = document.getElementById("filme").value;
  if (filme.endsWith(".jpg")) {
    listarFilmes(filme);
  } else {
    console.error("Endereço invalido");
  }
  document.getElementById("filme").value = "";
}
function listarFilmes(filmeSH) {
  var elementoFilme = "<img src=" + filmeSH + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilme;
}
