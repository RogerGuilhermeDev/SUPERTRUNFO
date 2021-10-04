let carta1 = {
    nome: "Luffy",
    imagem: "https://img.elo7.com.br/product/zoom/39C006A/placa-decorativa-cartaz-procurado-monkey-d-luffy-a3-30x40-one-piece.jpg",
    atributos: {
      força: 9,
      defesa: 7,
      velocidade: 9
    }
  };
  let carta2 = {
    nome: "Zoro",
    imagem: "http://pm1.narvii.com/6668/e05b374d8810aa5195e0846665b4e0664121a721_00.jpg",
    atributos: {
      força: 8,
      defesa: 8,
      velocidade: 7
    }
  };
  
  let carta3 = {
    nome: "Sanji",
    imagem: "https://pbs.twimg.com/media/E1x97YjXsAM7IO_.jpg",
    atributos: {
      força: 7,
      defesa: 6,
      velocidade: 8
    }
  };
     let carta4 = {
    nome: "Bartolomeo (SUPER TRUNFO)",
    imagem: "https://onepiecemerry.files.wordpress.com/2014/08/ad348-bartolomeo.jpg",
    atributos: {
      força: 10,
      defesa: 10,
      velocidade: 10
  }
  };

let carta5 = {
    nome: "Brook",
    imagem: "https://static3.cbrimages.com/wordpress/wp-content/uploads/2021/02/brook.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5",
    atributos: {
      força: 6,
      defesa: 6,
      velocidade: 8
    }
}  
  
  let cartas = [carta1, carta2, carta3, carta4, carta5];
  
  let cartaMaquina = 0;
  let cartaJogador = 0;
  
  function sortearCarta() {
    let numeroCartaDaMaquina = parseInt(Math.random() * 5);
    cartaMaquina = cartas[numeroCartaDaMaquina];
  
    let numeroCartaJogador = parseInt(Math.random() * 5);
    while (numeroCartaDaMaquina == numeroCartaJogador) {
      numeroCartaJogador = parseInt(Math.random() * 5);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirCartaJogador()
  }
  
  function obtemAtributoSelecionado() {
    let radioAtributos = document.getElementsByName("atributo");
    for (let i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked == true) {
        return radioAtributos[i].value;
      }
    }
  }
  
  function jogar() {
    let atributoSelecionado = obtemAtributoSelecionado();
    let elementoResultado = document.getElementById("resultado");
    console.log(cartaMaquina)
   
  
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
      htmlResultado = "<p class='resultado-final'>Venceu</p>"
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
        htmlResultado = "<p class='resultado-final'>Perdeu</p>"
    } else if (cartaJogador.atributos[atributoSelecionado] == cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = "<p class='resultado-final'>Empatou</p>"
  } 
  elementoResultado.innerHTML = htmlResultado
  exibirCartaMaquina()
  }
function exibirCartaJogador(){
 let divCartaJogador = document.getElementById("carta-jogador")
 divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
 let moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  
  let tagHTML = "<div id='opcoes' class='carta-status'>"
  
  let opcoes = document.getElementById("opcoes");
    let opcoesTexto = "";
  
    for (let atributo in cartaJogador.atributos)
         opcoesTexto +=
     `<input type='radio' name='atributo' value=''${atributo}>${atributo} ${cartaJogador.atributos[atributo]}<br>`
    
     let nome = `<p class="carta-subtitle"> ${cartaJogador.nome}</p>`
 
 divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

function exibirCartaMaquina(){
    let divCartaMaquina = document.getElementById("carta-maquina")
 divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
 let moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  
  let tagHTML = "<div id='opcoes' class='carta-status'>"
  
  let opcoes = document.getElementById("opcoes");
    let opcoesTexto = "";
  
    for (let atributo in cartaMaquina.atributos)
         opcoesTexto +=
     `<p type='text' name='atributo' value=''${atributo}>${atributo} ${cartaMaquina.atributos[atributo]}</p>`
    
     let nome = `<p class="carta-subtitle"> ${cartaMaquina.nome}</p>`
 
 divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"

}
      
 