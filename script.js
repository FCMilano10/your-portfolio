const username = document.querySelector('.username');
const password = document.querySelector('.password');
const loginBtn = document.querySelector('.btn');

username.focus();

const e = window.event;

username.addEventListener('keypress', (event) => {
    if(event.key === 'Enter') {
        password.focus();
    }
});

password.addEventListener('keypress', (event) => {
    if(event.key === 'Enter') {
        loginBtn.focus();
        loginBtn.click();
    }
});

loginBtn.addEventListener('click', () => {
    if(username.value.length >= 3 && password.value.length >= 6) {
        location.replace('./Portfolio/index.html');   
    } else {
        alert('Wrong username or/and password');
    }
});
