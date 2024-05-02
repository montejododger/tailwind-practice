const input = document.getElementById('link-input');
const linkForm = document.getElementById('link-form');
const errMsg = document.getElementById('err-msg');

//Hamburger Menu
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

// Hamburger Menu
btn.addEventListener('click', navToggle);

// Search Form Submit
linkForm.addEventListener('submit', formSubmit);

const isValidUrl = urlString => {
    var urlPattern = new RegExp(
        '^(https?:\\/\\/)?' + // validate protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
            '(\\#[-a-z\\d_]*)?$',
        'i'
    ); // validate fragment locator
    return !!urlPattern.test(urlString);
};

function formSubmit(e) {
    e.preventDefault();

    if (input.value === '') {
        errMsg.innerHTML = 'Please Enter Something';
        input.classList.add('border-red');
    } else if (!isValidUrl(input.value)) {
        errMsg.innerHTML = 'Please Enter Valid Url';
        input.classList.add('border-red');
    } else {
        errMsg.innerHTML = '';
        input.classList.remove('border-red');
        alert('Success');
    }
}



function navToggle() {
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
}
