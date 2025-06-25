const form= document.getElementById ('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt= "emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt= "emoji triste" />';
const Atividades = [];
const Notas = [];
const spanAprovado = '<span class= "resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class= "resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat (prompt("Digite a nota mínima:"));

let linhas = '';

form.addEventListener( 'submit', function(e) {
    e.preventDefault ();

    adicionaLinha ();
    AtualizaTabela ();
    atualizaMediaFinal ();
});

function adicionaLinha() { 
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    Atividades.push (inputNomeAtividade.value);
    Notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += "</tr>"

    linhas += linha
    
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function AtualizaTabela() {
    const corpoTabela = document.querySelector ('tbody')
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const MediaFinal = calculaMediaFinal ();

    document.getElementById('media-final-valor').innerHTML = MediaFinal
    document.getElementById('media-final-resultado').innerHTML = MediaFinal >= notaMinima ? spanAprovado : spanReprovado;

}

function calculaMediaFinal () {
    let SomadasNotas = 0;

    for (let i = 0; i <Notas.length; i++) {
        SomadasNotas += Notas [i];
    }
         return SomadasNotas / Notas.length;

}