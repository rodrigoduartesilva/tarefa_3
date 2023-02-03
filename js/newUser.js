let inputName = document.querySelector(".input-name");
let inputEmail = document.querySelector(".input-email");
let inputTel = document.querySelector(".input-tel");
let inputPass = document.querySelector(".input-password");
let countriesOption = document.querySelector("#countries-option");
let btnCreateUser = document.querySelector(".btn-create-user");

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
        }, 2000);
    }
});