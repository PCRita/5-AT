function LoadForm() {
    document.formPessoa.textName.focus();

}

function ValidateNome() {
    let nome = document.getElementById("textName");

    if (nome.value == null || nome.value == !isNaN) {
        nome.focus();
        nome.style.color = 'red';
        return false;
    }
    else {
        nome.style.color = 'black';
        return true;
    }
}

function ValidateEmail() {
    let email = document.getElementById("textEmail");
    let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!regexEmail.test(email.value)) {
        email.focus();
        email.style.color = 'red';
        return false;
    }
    else {
        email.style.color = 'black';
        return true;
    }
}

function CalculateAge() {
    let anoAtual = new Date().getFullYear();
    let dataNascimento = new Date(document.getElementById('inputDataNascimento').value);
    let anoNascimento = dataNascimento.getFullYear();
    let idade = anoAtual - anoNascimento;
    var anos;

    if (idade == 1) {
        var anos = "ano";
    }
    else 
    {
        var anos = "anos";
    }

    document.getElementById('spanIdade').innerHTML = '' + idade + anos;
    //window.alert(idade);
}

function ValidateTelefone() {
    let telefone = document.getElementById("textPhone");
    let regexTelefone = /^\d{9}$/;

    if (!regexTelefone.test(telefone.value)) {
        telefone.focus();
        telefone.style.color = 'red';
        return false;
    }
    else {
        telefone.style.color = 'black';
        return true;
    }
}

function ValidateNIF() {
    let nif = document.getElementById("textNIF");
    let regexNIF = /^\d{9}$/;

    if (!regexNIF.test(nif.value)) {
        nif.focus();
        nif.style.color = 'red';
        return false;
    }
    else {
        nif.style.color = 'black';
        return true;
    }
}

function ValidateForm() {
    let message;

    let nome = document.getElementById("textName");
    let email = document.getElementById("textEmail");
    let telefone = document.getElementById("textPhone");
    let nif = document.getElementById("textNIF");

    if ((nome.value == '') || (email.value == '') || (telefone.value == '') || (nif.value == '')) {
        message = 'Erro!Campos Vazios';
    }
    else {
        message = 'Validado';
    }

    document.getElementById("pMessage").innerHTML = message;
}
