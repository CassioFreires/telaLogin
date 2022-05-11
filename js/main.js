const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');

//Ação -> validar inputs tela de login 
function validacao() {
    const valorEmailRecuperado = inputEmail.value;
    const valorSenhaRecuperado = inputSenha.value;
    if(valorEmailRecuperado === '' || valorEmailRecuperado.indexOf('@') === -1 || valorEmailRecuperado.indexOf('.com') === -1){
        alert('Preencher campo E-mail');
        window.document.getElementById('email').value = '';
        window.document.getElementById('senha').value = '';
        return false;
    }
    if(valorSenhaRecuperado === '' || valorSenhaRecuperado.length <= 5){
        alert('Preencher senha com mínimo de 5 caracteres');
        window.document.getElementById('email').value = '';
        window.document.getElementById('senha').value = '';
        return false;

    }
    return  window.location.href = 'tela_entrar.html';
}
//Ação -> quando clica no botao entrar
function entrar() {
    validacao()
}

//Ação -> quando clica no botao de cadastrar
function cadastrar(){
    window.location.href = 'tela_cadastro.html';
}