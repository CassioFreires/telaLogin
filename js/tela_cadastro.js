//Ação -> quando para validar os inputs da pagina de cadastro
function validar() {
    var nome = document.getElementById('nome-input').value;
    var email = document.getElementById('email-input').value;
    var senha = document.getElementById('senha-input').value;
    if(nome === ''){
        alert('Preencha o Nome')
        window.document.getElementById('nome-input').focus();
        return false;

    }

    if(email === '' || email.indexOf('@') === -1 || email.indexOf('.com') === -1){
        alert('Preencha o E-mail');
        window.document.getElementById('email-input').focus();
        return false;
    }

    if(senha === '' || senha.length <= 5){
        alert('Preencha a senha com mínimo de 6 caracteres');
        window.document.getElementById('senha-input').focus();
        return false;
    }
    window.location.href = 'cadastrado.html';

}

//Ação -> quando clica no botao para finalizar o cadastro e enviar o formulario
function enviarFormulario(){
    event.preventDefault()
    validar()
}

