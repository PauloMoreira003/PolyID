if(document.getElementById("btn-experimentar")){
    document.getElementById("btn-experimentar").onclick = function(){
        location.href = "atividadeInicio.html"
    }
}

if(document.getElementById("cartao-origem")){
    document.getElementById("cartao-origem").onclick = function(){
        location.href = "informacao.html"
    }
}

if(document.getElementById("cartao-tipos")){
    document.getElementById("cartao-tipos").onclick = function(){
        location.href = "informacao.html#tipos"
    }
}

if(document.getElementById("cartao-reciclagem")){
    document.getElementById("cartao-reciclagem").onclick = function(){
        location.href = "informacao.html#reciclagem"
    }
}

const tipos = [
    {
        nome: "PET",
        descricao: "É usado principalmente em garrafas de água, refrigerantes, embalagens de alimentos, fibras para roupas, entre outros. É conhecido por ser leve, transparente e resistente à humidade.",
        aproveitado:"Fibra para carpete, tecido, vassoura, embalagem de produtos de limpeza, acessórios diversos.",
        imagem: "Imagens/pet.svg",
        simbolo: "Imagens/imagensQualidade/1azul.png",
        nomeCompleto: "(Politeraftalato de etileno)",
        imagemAproveita: "Imagens/limpeza.svg"
    },
    {
        nome: "PEAD",
        descricao: "Encontrado em produtos como recipientes de produtos de limpeza, embalagens de leite, tampas de garrafas e tubos. É rígido, resistente a impactos e adequado para uso em temperaturas mais altas.",
        aproveitado:"Frascos para produtos de limpeza, óleo para motor e tubulação de esgoto.",
        imagem: "Imagens/pead.svg",
        simbolo: "Imagens/imagensQualidade/2azul.png",
        nomeCompleto: "Polietileno de alta densidade",
        imagemAproveita: "Imagens/oleo.svg"
    },
    {
        nome: "PVC",
        descricao: "Amplamente utilizado em tubos, janelas, revestimentos, brinquedos e embalagens. O PVC é versátil, resistente e pode ser rígido ou flexível.",
        aproveitado:"Mangueira para jardim, tubulação de esgoto, cones de tráfego, cabos",
        imagem: "Imagens/pvc.svg",
        simbolo: "Imagens/imagensQualidade/3azul.png",
        nomeCompleto: "Policloreto de vinilo",
        imagemAproveita: "Imagens/cone.svg"
    },
    {
        nome: "PEBD",
        descricao: "Presente em embalagens de alimentos, utensílios domésticos, peças para carros e fibras. É durável, resistente a altas temperaturas e usado em aplicações onde a resistência química é necessária.",
        aproveitado:"Envelopes, filmes, sacos, sacos para lixo, tubulação para irrigação",
        imagem: "Imagens/pebd.svg",
        simbolo: "Imagens/imagensQualidade/4azul.png",
        nomeCompleto: "Polietileno de baixa densidade",
        imagemAproveita: "Imagens/lixo.svg"
    },
    {
        nome: "PP",
        descricao: "Comum em copos descartáveis, embalagens de proteção, brinquedos e utensílios. É leve, rígido e pode ser transparente ou opaco.",
        aproveitado:"Caixas e cabos para bateria de carro, vassouras, escovas, funil para oléo, caixas, bandejas",
        imagem: "Imagens/pp.svg",
        simbolo: "Imagens/imagensQualidade/5azul.png",
        nomeCompleto: "Polipropileno",
        imagemAproveita: "Imagens/funil.svg"
    },
    {
        nome: "PS",
        descricao: "Usado em sacos de plástico, plásticos para embalagens, revestimentos e peças flexíveis. É flexível, resistente a rasgos e tem boa capacidade de vedação.",
        aproveitado:"Placas para isolamento térmico, acessórios para escritório, bandejas",
        imagem: "Imagens/ps.svg",
        simbolo: "Imagens/imagensQualidade/6azul.png",
        nomeCompleto: "Poliestireno",
        imagemAproveita: "Imagens/bandeja.svg"
    },
    {
        nome: "OUTROS",
        descricao: "Esta categoria engloba uma variedade de plásticos que não se enquadram nos seis tipos mencionados anteriormente. Inclui o Policarbonato (usado em CDs, garrafas reutilizáveis), o ABS (usado em peças para carros, brinquedos), entre outros materiais menos comuns.",
        aproveitado:"Madeira plástica, reciclagem energética",
        imagem: "Imagens/outros.svg",
        simbolo: "Imagens/imagensQualidade/7azul.png",
        nomeCompleto: "Outros",
        imagemAproveita: "Imagens/madeira.svg"
    }
];


document.addEventListener("DOMContentLoaded", function() {
    var urlParams = new URLSearchParams(window.location.search);
    var n = urlParams.get('n');
    
    if (n) {
        adicionarTipos(parseInt(n));
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var urlParams = new URLSearchParams(window.location.search);
    var n = urlParams.get('plastico');
    
    if (n) {
        resultado(parseInt(n));
    }
});

function adicionarNovoTipo(tipo) {

    var novoTipo = document.createElement('div');
    novoTipo.className = 'tipo';

    var img = document.createElement('img');
    img.src = tipos[tipo].simbolo;
    img.alt = '';

    var h4 = document.createElement('h4');
    h4.textContent = tipos[tipo].nome;

    var p = document.createElement('p');
    p.textContent = tipos[tipo].nomeCompleto;

    novoTipo.appendChild(img);
    novoTipo.appendChild(h4);
    novoTipo.appendChild(p);

    document.querySelector('.simbolos').appendChild(novoTipo);
}

function adicionarTipos(n){
    if(n === 1){
        adicionarNovoTipo(0);
        adicionarNovoTipo(2);

    }else if(n === 2){
        adicionarNovoTipo(5);

    }else if(n === 3){
        adicionarNovoTipo(1);

    }else if(n === 4){
        adicionarNovoTipo(3);
        
    }else if(n === 5){
        adicionarNovoTipo(4)
    }
}

function podeSer(n){
    window.location.href = "atividadePodeSer.html?n=" + n;
}

function resultado(n){
    var fundo = document.getElementById("fundo-plasticos");

    if (n === 1){
        adicionarNovoTipo(0);
        fundo.style.backgroundImage = 'url("Imagens/Animação\ Garrafas\ Falling.gif")'
    }else if(n === 2){
        adicionarNovoTipo(1);
        fundo.style.backgroundImage = 'url("Imagens/Animação\ ProdutosLimpz\ Falling.gif")'
    }else if(n === 3){
        adicionarNovoTipo(2);
        fundo.style.backgroundImage = 'url("Imagens/Animação\ Tubos\ Falling.gif")'
    }else if(n === 4){
        adicionarNovoTipo(3);
        fundo.style.backgroundImage = 'url("Imagens/Animação\ SacosPlast\ Falling.gif")'
    }else if(n === 5){
        adicionarNovoTipo(4);
        fundo.style.backgroundImage = 'url("Imagens/Animação\ Copos\ Falling.gif")'
    }else if(n === 6){
        adicionarNovoTipo(5);
        fundo.style.backgroundImage = 'url("Imagens/Animação\ Tampas\ Falling.gif")'
    }
}

function mudarTipo(tipo){
    document.getElementById("nome-plastico").innerHTML = tipos[tipo].nome;
    document.getElementById("descricao-plastico").innerHTML = tipos[tipo].descricao;
    document.getElementById("aproveitado-plastico").innerHTML = tipos[tipo].aproveitado;
    document.getElementById("imagem-plastico").src = tipos[tipo].imagem;
    document.getElementById("imagemAproveitado").src = tipos[tipo].imagemAproveita;
}

function setaEsquerda() {

    var current = document.querySelector(".active");
    var idIcon = parseInt(current.id);

    if(idIcon > 0){
        mudarTipo(idIcon-1);
        current.classList.remove("active");
        var previousElement = current.previousElementSibling;
        previousElement.classList.add("active");
    }
}

function setaDireita() {

    var current = document.querySelector(".active");
    var idIcon = parseInt(current.id);

    if(idIcon < 6){
        mudarTipo(idIcon+1);
        current.classList.remove("active");
        var nextElement = current.nextElementSibling;
        nextElement.classList.add("active");
    }
}

var header = document.getElementById("icons-triangulos");
var btns = header.getElementsByClassName("icon");
console.log(btns.length);
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

//Atividade

function marcarComoAtivo(idCopo){

    const atividade_textos = [
        {
            texto: "Adiciona o plástico ao copo 1. Mexe e espera um pouco. Verifica se afundou ou flutuou."
        },
        {
            texto:"Retira o plástico e em seguida seca-o. Adiciona o plástico ao copo 2. Mexe e espera um pouco. Verifica se afundou ou flutuou."
        },
        {
            texto:"Retira o plástico e em seguida seca-o. Adiciona o plástico ao copo 3. Mexe e espera um pouco. Verifica se afundou ou flutuou."
        },
        {
            texto:"Retira o plástico e em seguida seca-o. Adiciona o plástico ao copo 4. Mexe e espera um pouco. Verifica se afundou ou flutuou."
        }
    ];

    var current = document.getElementById(idCopo);
    current.className += " ativo";
    var texto = document.querySelector('.textBoxA1');
    if(idCopo === "copo2"){
        console.log(atividade_textos[1].texto)
        texto.innerText = atividade_textos[1].texto;
    }else if(idCopo === "copo3"){
        texto.innerHTML = atividade_textos[2].texto;
    }else if(idCopo === "copo4"){
        texto.innerHTML = atividade_textos[3].texto;
    }
}

function retirarPlastico(){
    var imagem = document.getElementById('imagemPote');
    var botao = document.getElementById('btn-retirarPlastico');

    setTimeout(function(){
        imagem.src = "Imagens/Plastico.svg";
        botao.style.display = 'none';
    }, 500);

    setTimeout(function(){
        window.location.href = "atividade1.html";
    }, 4000);
}