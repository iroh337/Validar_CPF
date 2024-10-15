// variaveis
var input = document.getElementById('input');
var button = document.getElementById('button_go');
const resp = document.querySelector('.resp');
const seletor = document.querySelector('#seletor')


window.onload = function(){
     input.focus()
    }



// funco pra formatar e copiar o CPF
function clicar() {
    var cpf_cnpj = input.value.trim().replace(/\D/g, ''); // Remove espaços em branco
    


    if( seletor.value === 'cpf'){
        if(cpf_cnpj.length !== 11){
            alert('O CPF digitado está incorreto. Um CPF deve ser composto de no máximo 11 dígitos.')
            input.value = ''
            return
        }else{
            let cpf_formatado = cpf_cnpj.slice(0, 3) + '.' + cpf_cnpj.slice(3, 6) + '.' + cpf_cnpj.slice(6, 9) + '-' + cpf_cnpj.slice(9, 11);
            resp.value = cpf_formatado;
        }

    }else if(seletor.value === 'cnpj'){

        if(cpf_cnpj.length !== 14){
            alert('O CNPJ digitado está incorreto.Um CNPJ deve ser composto de no máximo 14 dígitos.')
            input.value = ''
        }else{
            let cnpj_formatado = cpf_cnpj.slice(0, 2) + '.' + cpf_cnpj.slice(2, 5) + '.' + cpf_cnpj.slice(5, 8) + '/' + cpf_cnpj.slice(8, 12) + '-' + cpf_cnpj.slice(12,14);
            resp.value = cnpj_formatado
        }
    }
    



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
       resp.value = ''
       input.value= ''
    }, 10000);
})
