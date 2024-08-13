// variaveis
var input = document.getElementById('input');
var button = document.getElementById('button_go');
const resp = document.querySelector('.resp');



window.onload = function(){
     input.focus()
    }

// funco pra formatar e copiar o CPF
function clicar() {
    var cpf = input.value.trim(); // Remove espaços em branco

    if (cpf.length !== 11) {
        console.log("O CPF deve ter 11 dígitos.");
        return; 
    }

    let cpf_formatado = cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6, 9) + '-' + cpf.slice(9, 11);

    resp.value = cpf_formatado;

    // seleciona o campo do input
    resp.select();
    resp.setSelectionRange(0, 99999); // Para dispositivos móveis

    // copy
    document.execCommand('copy');
}

// click
button.addEventListener('click', clicar);

// enter
input.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        button.click();
    }
});

input.addEventListener('paste', function(){
    setTimeout(function(){
        button.click();
    },0)
})

button.addEventListener('click', function(){
    setTimeout(() => {
        location.reload();
    }, 5000);
})
