var novoFilme = [];

function adicionarFilme() {
  var filme = document.getElementById("filme").value;
  var erro = document.getElementById("error");
  if (filme.endsWith(".jpg") & (document.getElementById("nome").value != "")) {
    if (novoFilme.indexOf(filme) == -1) {
      novoFilme.push(filme);
      erro.innerHTML = "";
      imagens(filme);
    } else {
      erro.innerHTML = "<h1>Esta imagem já está sendo usada!</h1>";
      document.getElementById("filme").value = "";
      document.getElementById("nome").value = "";
    }
  } else if (filme == "") {
    erro.innerHTML = "<h1>Insira um endereço de Imagem!</h1>";
  } else if (document.getElementById("nome").value == "") {
    erro.innerHTML = "<h1>Insira o Nome do Filme!</h1>";
  } else {
    erro.innerHTML = "<h1>Endereço de Filme Inválido!</h1>";
    document.getElementById("filme").value = "";
    document.getElementById("nome").value = "";
  }
}

function imagens() {
  var nomesRecebidos = document.getElementById("nome").value;
  var nomesEscritos = "<h1>" + nomesRecebidos + "</h1>";
  var filmeAdicionado =
    "<li><img src=" + filme.value + "><br>" + nomesRecebidos + "</li>";
  var lista = document.getElementById("listaFilmes");
  var nomes = document.getElementById("listaNomes");
  lista.innerHTML = lista.innerHTML + filmeAdicionado;
  document.getElementById("nome").value = "";
  document.getElementById("filme").value = "";
}