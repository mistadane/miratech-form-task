
const email = document.querySelector('#email');
const pass = document.querySelector('#password');

const button = document.querySelector('.button');

button.addEventListener('click', login);

function login(e) {
    e.preventDefault();
    alert(`Email: ${email.value}`);
    alert(`Password: ${pass.value}`);
}