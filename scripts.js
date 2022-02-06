const form = document.getElementById('form');
const username = document.getElementById('name');
const mail = document.getElementById('mail');
const pass = document.getElementById('pass');
const confpass = document.getElementById('confpass');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInput();
})

function checkInput() {
    const nameValue = username.value.trim();
    const emailValue = mail.value.trim() ;
    const passValue = pass.value.trim();
    const cpassValue = confpass.value.trim();

    if(nameValue === "") {
        setErrorMsg(username, "Username cannot be Blank!");
    } else {
        setSuccessMsg(username);
    }

    if(emailValue === '') {
		setErrorMsg(mail, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorMsg(mail, 'Not a valid email');
	} else {
		setSuccessMsg(mail);
	}
	
	if(passValue === '') {
		setErrorMsg(pass, 'Password cannot be blank');
	} else {
		setSuccessMsg(pass);
	}
	
	if(cpassValue === '') {
		setErrorMsg(confpass, 'Confirm Password cannot be blank');
	} else if(passValue !== cpassValue) {
		setErrorMsg(confpass, 'Passwords does not match');
	} else{
		setSuccessMsg(confpass);
	}
}

function setErrorMsg(input,message) {
    const formContent = input.parentElement;
    const small = formContent.querySelector('small');
    formContent.className = "formContent error";
    small.innerHTML = message;
}
function setSuccessMsg(input) {
	const formContent = input.parentElement;
	formContent.className = 'formContent success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}