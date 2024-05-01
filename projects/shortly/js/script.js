const input = document.getElementById('link-input');
const linkForm = document.getElementById('link-form');
const errMSg = document.getElementById('err-msg');

linkForm.addEventListener('submit', formSubmit);

function formSubmit(e) {
    e.preventDefault();
}

