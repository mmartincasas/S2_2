let error = 0;

let fName = document.getElementById("fName");
let fEmail = document.getElementById("fEmail");
let fAddress = document.getElementById("fAddress");
let fLastN = document.getElementById("fLastN");
let fPassword = document.getElementById("fPassword");
let fPhone = document.getElementById("fPhone");

const isMinLength = (value, minLength) => {
    return value.length >= minLength;
};

const isEmailValid = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

const isPhoneValid = (phone) => {
    const re = /^\d{9}$/; 
    return re.test(phone);
};

const isText = (text) => {
    const re = /^[A-Za-zÀ-ÿ\s]+$/;
    return re.test(text);
};

const isValidPass = (password) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;
    return re.test(password);
};



function validate(event) {
    event.preventDefault();  // Evita que el formulario se envíe

    error = 0;

    if (!isMinLength(fName.value, 3) || !isText(fName.value)) {
        fName.classList.add("is-invalid");
        error++;
    } else {
        fName.classList.remove("is-invalid");
    }

    if (!isEmailValid(fEmail.value)) {
        fEmail.classList.add("is-invalid");
        error++;
    } else {
        fEmail.classList.remove("is-invalid");
    }

    if (!isMinLength(fAddress.value, 3)) {
        fAddress.classList.add("is-invalid");
        error++;
    } else {
        fAddress.classList.remove("is-invalid");
    }

    if (!isMinLength(fLastN.value, 3) || !isText(fLastN.value)) {
        fLastN.classList.add("is-invalid");
        error++;
    } else {
        fLastN.classList.remove("is-invalid");
    }

    if (!isMinLength(fLastN.value, 3) || !isValidPass(fPassword.value)) {
        fPassword.classList.add("is-invalid");
        error++;
    } else {
        fPassword.classList.remove("is-invalid");
    }

    if (!isPhoneValid(fPhone.value)) {
        fPhone.classList.add("is-invalid");
        error++;
    } else {
        fPhone.classList.remove("is-invalid");
    }

    if (error === 0) {
        // Mostrar modal
		const successModal = new bootstrap.Modal(document.getElementById('successModal'));
		successModal.show();
        //alert('Formulario válido y listo para enviar');
    }
}

document.getElementById('btnSubmit').addEventListener('click', validate);


