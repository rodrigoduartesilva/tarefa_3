let inputName = document.querySelector(".input-name");
let inputEmail = document.querySelector(".input-email");
let inputTel = document.querySelector(".input-tel");
let inputCodCountry = document.querySelector(".cod-country");
let inputPass = document.querySelector(".input-password");
let countriesOption = document.querySelector("#countries-option");
let btnCreateUser = document.querySelector(".btn-create-user");
let addMaxLength = document.createAttribute("maxlength");

function mascara(telefone) {
    if (countriesOption.value === 'brasil') {
        inputCodCountry.value = '+55';
        addMaxLength.value = 15;
        inputTel.setAttributeNode(addMaxLength);

        if (telefone.value.length === 0)
            telefone.value = '(' + telefone.value;

        if (telefone.value.length === 3)
            telefone.value = telefone.value + ') ';

        if (telefone.value.length === 10)
            telefone.value = telefone.value + '-';

    } else if (countriesOption.value === 'argentina') {
        inputCodCountry.value = '+54';
        addMaxLength.value = 14;
        inputTel.setAttributeNode(addMaxLength);

        if (telefone.value.length === 0)
            telefone.value = '9 ' + telefone.value;

        if (telefone.value.length === 4)
            telefone.value = telefone.value + ' ';

        if (telefone.value.length === 9)
            telefone.value = telefone.value + '-';
    } else if (countriesOption.value === 'bolivia') {
        inputCodCountry.value = '+591';
        addMaxLength.value = 9;
        inputTel.setAttributeNode(addMaxLength);

        if (telefone.value.length === 0)
            telefone.value = '2 ' + telefone.value;

        if (telefone.value.length === 2)
            telefone.value = telefone.value + '2';
    } else if (countriesOption.value === 'uruguai') {
        inputCodCountry.value = '+598';
        addMaxLength.value = 10;
        inputTel.setAttributeNode(addMaxLength);

        if (telefone.value.length === 0)
            telefone.value = '2 ' + telefone.value;
    }

}

btnCreateUser.addEventListener('click', function (event) {
    let formNewUser = document.querySelector(".new-user-form");
    let containerForm = document.querySelector(".form-container");
    let divCreate = document.createElement("div");
    let subCreate = document.createElement("h1");
    const textMsg = document.createTextNode("Usuário criado com sucesso!");


    if (inputName.value === '') {
        alert("Informe seu nome!");
        event.preventDefault();
    } else if (inputEmail.value === '') {
        alert("Informe seu Email!");
        event.preventDefault();
    } else if (inputPass.value === '') {
        alert("Crie uma senha!");
        event.preventDefault();
    } else if (countriesOption.value === 'none') {
        alert("Informe seu país!");
        event.preventDefault();
    } else {
        formNewUser.remove();
        divCreate.classList.add("subtitle-message");
        containerForm.appendChild(divCreate);
        divCreate.appendChild(subCreate);
        subCreate.appendChild(textMsg);

        setTimeout(() => {
            containerForm.appendChild(divCreate).remove();
            containerForm.appendChild(formNewUser);
        }, 3000);

        inputName.value = '';
        inputEmail.value = '';
        inputCodCountry.value = '';
        inputTel.value = '';
        inputPass.value = '';
        countriesOption.value = 'none';
    }
});