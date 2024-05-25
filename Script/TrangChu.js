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



// Animating stuff
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        
        // else {
        //     entry.target.classList.remove('show');
        // }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));




// div.slider animating stuff
const slider = document.querySelector('.slider');

const slider_info1 = document.querySelector('.slider_info1');
const slider_p1 = slider_info1.querySelector('.slider_p1');
const slider_p2 = slider_info1.querySelector('.slider_p2');

const slider_info2 = document.querySelector('.slider_info2');
const slider_p3 = slider_info2.querySelector('.slider_p1');
const slider_p4 = slider_info2.querySelector('.slider_p2');

const slider_info3 = document.querySelector('.slider_info3');
const slider_p5 = slider_info3.querySelector('.slider_p1');
const slider_p6 = slider_info3.querySelector('.slider_p2');

// Function to delay execution
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to change slides
async function sliding() {
    // Slide 1
    slider.style.backgroundImage = "url('../../Images/TrangChu/anh1.jpg')";
    slider.classList.add('show2');
    slider_info1.classList.add('show2');
    await delay(7000); // wait 7 seconds

    slider.classList.add('show3');
    slider_info1.classList.add('show3');
    
    
    await delay(1000); // wait 1 second
    slider_info1.style.display = 'none';
    slider_info2.style.display = 'flex';
    slider.classList.remove('show3');
    slider.classList.remove('show2');
    // await delay(1000); // wait 1 second

    // Slide 2
    slider.style.backgroundImage = "url('../../Images/TrangChu/anh2.jpg')";
    slider.classList.add('show2');
    slider_info2.classList.add('show2');
    await delay(7000); // wait 7 seconds

    slider.classList.add('show3');
    slider_info2.classList.add('show3');
    
    await delay(1000); // wait 1 second
    slider_info2.style.display = 'none';
    slider_info3.style.display = 'flex';
    slider.classList.remove('show3');
    slider.classList.remove('show2');
    // await delay(1000); // wait 1 second

    // Slide 3
    slider.style.backgroundImage = "url('../../Images/TrangChu/anh3.jpg')";
    slider.classList.add('show2');
    slider_info3.classList.add('show2');
    await delay(7000); // wait 7 seconds

    slider.classList.add('show3');
    slider_info3.classList.add('show3');
    
    await delay(1000); // wait 1 second
    slider_info3.style.display = 'none';
    slider_info1.style.display = 'flex';
    slider.classList.remove('show3');
    slider.classList.remove('show2');
    slider_info1.classList.remove('show2');
    slider_info1.classList.remove('show3');
    slider_info2.classList.remove('show2');
    slider_info2.classList.remove('show3');
    slider_info3.classList.remove('show2');
    slider_info3.classList.remove('show3');
    // await delay(1000); // wait 1 second

    sliding(); // :3
}

sliding();