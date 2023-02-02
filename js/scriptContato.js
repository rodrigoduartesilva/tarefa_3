let inputName = document.querySelector(".input-name");
let inputEmail = document.querySelector(".input-email");
let textMessage = document.querySelector(".text-message");
let btnEnviar = document.querySelector(".btn-send");

btnEnviar.addEventListener('click', function (event) {
    let loginSuccess = document.querySelector("#send-success");
    const successText = document.querySelector(".form-subtitle");
    let contactForm = document.querySelector(".contact-form");
    let formSpace = document.querySelector(".form-space");

    if (inputName.value === '') {
        alert("Informe seu nome!");
        event.preventDefault();
    } else if (inputEmail.value === '') {
        alert("Informe seu email!");
        event.preventDefault();
    } else if (textMessage.value === '') {
        alert("Digite sua mensagem!");
        event.preventDefault();
    } else {
        contactForm.remove();
        successText.textContent = "Mensagem enviada com sucesso, em breve entraremos em contato!";

        setTimeout(() => {
            successText.remove();
            formSpace.appendChild(contactForm);

            inputName.value = '';
            inputEmail.value = '';
            textMessage.value = '';
        }, 4000);
    }
});