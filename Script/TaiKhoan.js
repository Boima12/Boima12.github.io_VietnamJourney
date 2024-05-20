// header menu bar
const overlay = document.getElementById('overlay');
const sidebar = document.getElementById('sidebar');

function MenuBar() {
    overlay.style.display = 'block';
    sidebar.classList.add('open');
}

function CloseBar() {
    overlay.style.display = 'none';
    sidebar.classList.remove('open');
}


// back to intro when click the logo
function navToIntro() {
    window.location.href = '../../index.html';
}

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
    

// navigation bar background transparency
// const header = document.getElementById('header1');
// function toggle_header() {
//     if (window.screenY == 0) {
//         header.style.background = 'linear-gradient(to right, rgba(29, 96, 42, 0), rgba(39, 154, 83, 0))';
//     } else if (window.screenY < 210) {
//         header.style.background = 'linear-gradient(to right, rgba(29, 96, 42, ' + parseInt(window.scrollY)*2 / 300 + '), rgba(39, 154, 83, ' + parseInt(window.scrollY)*2 / 300 + '))';
//     } else {
//         header.style.background = 'linear-gradient(to right, rgba(29, 96, 42, 0.7), rgba(39, 154, 83, 0.7))';
//     }
// }

// window.addEventListener('scroll', toggle_header);
