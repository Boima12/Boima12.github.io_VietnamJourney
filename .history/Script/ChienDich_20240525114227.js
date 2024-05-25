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


const provinces = [
    "An Giang", "Bà Rịa - Vũng Tàu", "Bắc Giang", "Bắc Kạn", "Bạc Liêu", 
    "Bắc Ninh", "Bến Tre", "Bình Định", "Bình Dương", "Bình Phước", 
    "Bình Thuận", "Cà Mau", "Cần Thơ", "Cao Bằng", "Đà Nẵng", 
    "Đắk Lắk", "Đắk Nông", "Điện Biên", "Đồng Nai", "Đồng Tháp", 
    "Gia Lai", "Hà Giang", "Hà Nam", "Hà Nội", "Hà Tĩnh", 
    "Hải Dương", "Hải Phòng", "Hậu Giang", "Hòa Bình", "Hưng Yên", 
    "Khánh Hòa", "Kiên Giang", "Kon Tum", "Lai Châu", "Lâm Đồng", 
    "Lạng Sơn", "Lào Cai", "Long An", "Nam Định", "Nghệ An", 
    "Ninh Bình", "Ninh Thuận", "Phú Thọ", "Phú Yên", "Quảng Bình", 
    "Quảng Nam", "Quảng Ngãi", "Quảng Ninh", "Quảng Trị", "Sóc Trăng", 
    "Sơn La", "Tây Ninh", "Thái Bình", "Thái Nguyên", "Thanh Hóa", 
    "Thừa Thiên Huế", "Tiền Giang", "TP Hồ Chí Minh", "Trà Vinh", 
    "Tuyên Quang", "Vĩnh Long", "Vĩnh Phúc", "Yên Bái"
];

const select = document.getElementById('province');

provinces.forEach(province => {
    const option = document.createElement('option');
    option.value = province;
    option.textContent = province;
    select.appendChild(option);
});


$('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
}); 


$('.center').slick({
centerMode: true,
centerPadding: '30%',
slidesToShow: 1,
responsive: [
    {
    breakpoint: 768,
    settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10%',
        slidesToShow: 1
    }
    },
    {
    breakpoint: 480,
    settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '15%',
        slidesToShow: 1
    }
    }
]
});


