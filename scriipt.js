let numero = parseFloat(prompt('Informe o numero que deseja Multiplica-lo'))
let contador = 0;
let tabuada = '';
let soma = 0
let alunoAprovado = ""


while (contador <= 10) {
    soma = contador * numero;
    tabuada += contador + " x " + numero + ' = ' + soma + '<br>';
    contador++
}

const sub = document.querySelector('.subtitulo');
sub.innerHTML = " Multiplicação do Número " + numero + ' é: <br> <br> ';

const tbl = document.querySelector('.tabela');
tbl.innerHTML = tabuada;


