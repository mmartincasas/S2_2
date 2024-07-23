


function validate() {
	var error = 0;
	
	let fName = document.getElementById("fName");
	let fEmail = document.getElementById("fEmail");
	let fAddress = document.getElementById("fAddress");
	let fLastN = document.getElementById("fLastN");
	let fPassword = document.getElementById("fPassword");
	let fPhone = document.getElementById("fPhone");

	let errorName = document.getElementById("errorName");
	let errorEmail = document.getElementById("errorEmail");
	let errorAddress = document.getElementById("errorAddress");  
	let errorLastN = document.getElementById("errorLastN");  
	let errorPassword = document.getElementById("errorPassword");  
	let errorPhone = document.getElementById("errorPhone");    
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == ""){
		error++;
	}

	if(fEmail.value == ""){
		error++;
	}

    // Valida el campo de email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fEmail.value)) {
        showError(fEmail, errorEmail);
        valid = false;
    }
	 
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}





// Example starter JavaScript for disabling form submissions if there are invalid fields
(function validate2 () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
        })
    })()
