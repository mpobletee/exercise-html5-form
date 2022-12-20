window.onload = function () {
    const myForm = document.getElementById("myForm");
    myForm.addEventListener("submit", e => {
        e.preventDefault();
        let alert = document.querySelector('.alert');
        let cardNumber = document.querySelector('#cardNumber');
        let cvcNumber = document.querySelector('#cvcNumber');
        let firstName = document.querySelector('#firstName');
        let lastName = document.querySelector('#lastName');
        let city = document.querySelector('#city');
        let postalCode = document.querySelector('#postalCode');
        // let textArea1 = document.querySelector('#textArea1');
        // let state = document.querySelector('#state');
        let amount = document.querySelector('#amount');


        let regexCardNumber = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
        let regexCvcNumber = /^[0-9]{3,4}$/;
        let regexAmount = /^[0-9]+$/;
        let regexFirstName = /^[a-zA-Z]+$/;
        let regexLastName = /^[a-zA-Z]+$/;
        let regexCity = /^[a-zA-Z]+$/;
        let regexPostalCode = /^\d{6,9}$/;
        // let regexTextArea1 = /^[a-zA-Z0-9.!#-_]+$/;

        if (regexCardNumber.test(cardNumber.value) !== true) {
            alert.classList.remove("d-none");
            cardNumber.classList.add("alert-danger");
        } else {
            alert.classList.add("d-none");
            cardNumber.classList.remove("alert-danger");
            cardNumber.classList.add("is-valid");
        }
        if (regexCvcNumber.test(cvcNumber.value) !== true) {
            alert.classList.remove("d-none");
            cvcNumber.classList.add("alert-danger");
        } else {
            alert.classList.add("d-none");
            cvcNumber.classList.remove("alert-danger");
            cvcNumber.classList.add("is-valid");
        }
        if (regexAmount.test(amount.value) !== true) {
            alert.classList.remove("d-none");
            amount.classList.add("alert-danger");
        } else {
            alert.classList.add("d-none");
            amount.classList.remove("alert-danger");
            amount.classList.add("is-valid");
        }
        if (regexFirstName.test(firstName.value) !== true) {
            alert.classList.remove("d-none");
            firstName.classList.add("alert-danger");
        } else {
            alert.classList.add("d-none");
            firstName.classList.remove("alert-danger");
            firstName.classList.add("is-valid");
        }
        if (regexLastName.test(lastName.value) !== true) {
            alert.classList.remove("d-none");
            lastName.classList.add("alert-danger");
        } else {
            alert.classList.add("d-none");
            lastName.classList.remove("alert-danger");
            lastName.classList.add("is-valid");
        }
        if (regexCity.test(city.value) !== true) {
            alert.classList.remove("d-none");
            city.classList.add("alert-danger");
        } else {
            alert.classList.add("d-none");
            city.classList.remove("alert-danger");
            city.classList.add("is-valid");
        }
        if (regexPostalCode.test(postalCode.value) !== true) {
            alert.classList.remove("d-none");
            postalCode.classList.add("alert-danger");
        } else {
            alert.classList.add("d-none");
            postalCode.classList.remove("alert-danger");
            postalCode.classList.add("is-valid");
        }
      /*   if (regexTextArea1.test(textArea1.value) !== true) {
            alert.classList.remove("d-none");
            textArea1.classList.add("alert-danger");
        } else {
            alert.classList.add("d-none");
            textArea1.classList.remove("alert-danger");
            textArea1.classList.add("is-valid");
        } */
        /* if (regexState.test(state.value) !== true) {
            alert.classList.remove("d-none");
            state.classList.add("alert-danger");
        } else {
            alert.classList.add("d-none");
            state.classList.remove("alert-danger");
            state.classList.add("is-valid");
        } */
    });
};

